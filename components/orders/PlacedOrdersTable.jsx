"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";

const PlacedOrdersTable = ({ limit = 10 }) => {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    setList([...data]);
  }, []);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  let data = [
    {
      key: "1",
      pid: "#123",
      date: "23 Feb 2023",
      orderby: "example@gmail.com",
      quantity: 30,
      type: "Custom",
      price: 4200,
      complete: false,
    },
    {
      key: "2",
      pid: "#321",
      date: "23 Feb 2023",
      orderby: "example@gmail.com",
      quantity: 30,
      type: "Custom",
      price: 4000,
      complete: false,
    },
  ];

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
      width: "20%",
      ...getColumnSearchProps("quantity"),
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: "20%",
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
        dataSource={[...list]}
        pagination={pagination}
        bordered
      />
    </>
  );
};
export default PlacedOrdersTable;
