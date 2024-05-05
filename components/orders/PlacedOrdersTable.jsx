"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox, message } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { postOrderApi } from "@/api/orders/ordersApi";
import action from "@/app/actions/action";

const PlacedOrdersTable = ({
  data,
  completeOrders,
  size = 10,
  showPagination = true,
}) => {
  const router = useRouter();
  const [mappedOrders, setMappedOrders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const searchInput = useRef(null);
  const [tempArray, setTemp] = useState([]);
  const date = useSelector((state) => state.date.date);

  const getOrders = async () => {
    const completedOrders = completeOrders;
    action("fetchOrdersData");
    action("fetchShopifyData");
    const filteredData = data.orders?.map((order) => {
      let type;
      const hasProperties = order.line_items?.some(
        (item) => item?.properties?.length > 0
      );
      if (hasProperties) {
        type = order?.line_items?.every((item) => item?.properties?.length > 0)
          ? "Custom Order Details"
          : "Both Custom and Predefined";
      } else {
        type = "Predefined Order Details";
      }

      const date = new Date(order?.processed_at);
      let formattedDate = date.toISOString().slice(0, 10);

      return {
        pid: order?.id,
        date: formattedDate,
        orderby: order?.customer?.email,
        quantity: order?.line_items?.length,
        type: type,
        price: order?.total_line_items_price,
      };
    });
    const filteredOrders = filteredData.filter(
      (mappedOrder) =>
        !completedOrders?.orders?.some((order) => order.pid == mappedOrder?.pid)
    );
    setMappedOrders(filteredOrders);
    setTemp(filteredOrders);
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    if (date) {
      const data = tempArray.filter((item) => {
        return item.date == date;
      });
      console.log(data);
      setMappedOrders(data);
    } else {
      getOrders();
    }
  }, [date]);

  const postOrder = async (item) => {
    const data = await postOrderApi(item);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const pagination = {
    showTotal: (total, range) => (
      <div className="font-poppins">
        {/* <span style={{ fontSize: "16px", fontWeight: "500", color: "#232638" }}>
          Total Orders: {total}
        </span> */}
        <span style={{ fontSize: "12px", fontWeight: "500" }}>
          {range[0]}-{range[1]} of items
        </span>
      </div>
    ),
    pageSize: size,
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toLowerCase()?.includes(value?.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text?.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "PID",
      dataIndex: "pid",
      key: "pid",
      width: "10%",
      className: "pidColumn",
      ...getColumnSearchProps("pid"),
      render: (text) => `#${text}`,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "15%",
      ...getColumnSearchProps("date"),
    },
    {
      title: "Order By",
      dataIndex: "orderby",
      key: "orderby",
      width: "25%",
      ...getColumnSearchProps("orderby"),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "10%",
      ...getColumnSearchProps("quantity"),
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: "30%",
      ...getColumnSearchProps("type"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%",
      ...getColumnSearchProps("price"),
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Complete",
      dataIndex: "complete",
      key: "complete",
      render: (text, record, onChange) => (
        <Checkbox
          checked={record.complete}
          onChange={(e) => {
            e.stopPropagation();
            let newData = [...mappedOrders];
            const recordIndex = newData.findIndex(
              (item) => item.pid === record.pid
            );
            const item = newData[recordIndex];
            console.log(item);
            postOrder(item);
            newData[recordIndex] = {
              ...newData[recordIndex],
              complete: e.target.checked,
            };
            newData = newData.filter((item, index) => index !== recordIndex);
            setMappedOrders(newData);
            messageApi.success("Order Moved to Completed Orders");
          }}
        />
      ),
    },
  ];
  return (
    <>
      {contextHolder}
      <Table
        style={{ width: "100%" }}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log(record);
              if (event.target.type !== "checkbox") {
                router.push(`/placed-orders/${record?.pid}`);
              }
            },
            className: "cursor-pointer",
          };
        }}
        dataSource={[...mappedOrders]}
        pagination={showPagination ? pagination : false}
        bordered
      />
    </>
  );
};
export default PlacedOrdersTable;
