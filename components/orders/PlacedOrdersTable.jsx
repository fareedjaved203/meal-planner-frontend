"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";
import getData from "../../lib/getData";

const PlacedOrdersTable = ({ data, completedOrders }) => {
  const router = useRouter();
  const [list, setList] = useState(data);
  const [orders, setOrders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const mappedOrders = data.orders
    .map((order) => {
      let type;
      const hasProperties = order.line_items.some(
        (item) => item.properties.length > 0
      );
      if (hasProperties) {
        type = order.line_items.every((item) => item.properties.length > 0)
          ? "Custom Order Details"
          : "Both Custom and Predefined";
      } else {
        type = "Predefined Order Details";
      }

      const date = new Date(order?.processed_at);
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      return {
        pid: order?.id,
        date: formattedDate,
        orderby: order?.customer?.email,
        quantity: order?.line_items?.length,
        type: type,
        price: order?.total_line_items_price,
      };
    })
    .filter((order) => {
      return order.id !== completedOrders.pid;
    });

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
    pageSize: 10,
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
      width: "30%",
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
            const newData = [...data];
            const recordIndex = newData.findIndex(
              (item) => item.key === record.key
            );
            newData[recordIndex] = {
              ...newData[recordIndex],
              complete: e.target.checked,
            };
            setList(newData);
          }}
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
              if (event.target.type !== "checkbox") {
                router.push(`${order}/${record?.key}`);
              }
            },
            className: "cursor-pointer",
          };
        }}
        dataSource={[...mappedOrders]}
        pagination={pagination}
        bordered
      />
    </>
  );
};
export default PlacedOrdersTable;
