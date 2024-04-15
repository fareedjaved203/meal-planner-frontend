"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getOrdersApi } from "@/api/orders/ordersApi";

const CompleteOrdersTable = ({ order = "placed-orders" }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [list, setList] = useState([]);

  const pagination = {
    showTotal: (total, range) => (
      <div className="font-poppins">
        <span style={{ fontSize: "16px", fontWeight: "500", color: "#232638" }}>
          Total Orders: {total}
        </span>
        <span
          style={{ fontSize: "12px", fontWeight: "500", marginLeft: "620px" }}
        >
          {range[0]}-{range[1]} of items
        </span>
      </div>
    ),
    pageSize: 10,
  };

  useEffect(() => {
    const getOrders = async () => {
      const data = await getOrdersApi();
      const formattedOrders = data?.orders.map((order) => {
        const date = new Date(order?.date);
        let formattedDate = date.toISOString().slice(0, 10);
        return { ...order, date: formattedDate };
      });
      setList(formattedOrders);
    };
    getOrders();
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
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
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
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
          textToHighlight={text ? text.toString() : ""}
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
      width: "20%",
      ...getColumnSearchProps("date"),
    },
    {
      title: "Order By",
      dataIndex: "orderby",
      key: "orderby",
      filters: [{ text: "example@gmail.com", value: "example@gmail.com" }],
      onFilter: (value, record) => record.orderby.indexOf(value) === 0,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "20%",
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
          checked={true}
          // checked={record.complete}
          // onChange={(e) => {
          //   e.stopPropagation();
          //   const newData = [...data];
          //   const recordIndex = newData.findIndex(
          //     (item) => item.pid === record.pid
          //   );
          //   newData[recordIndex] = {
          //     ...newData[recordIndex],
          //     complete: e.target.checked,
          //   };
          //   setList(newData);
          // }}
        />
      ),
    },
  ];
  return (
    <>
      <Table
        style={{ width: "100%" }}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              // Check if the event was triggered by a checkbox
              if (event.target.type !== "checkbox") {
                router.push(`${order}/${record?.pid}`);
              }
            },
            className: "cursor-pointer",
          };
        }}
        dataSource={[...list]}
        pagination={pagination}
        bordered
      />
    </>
  );
};
export default CompleteOrdersTable;
