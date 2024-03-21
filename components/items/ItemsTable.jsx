"use client";
import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";

const data = [
  {
    key: "20",
    pid: "#970",
    date: "23 Feb 2023",
    numberline1: "Black Shirts",
    numberline2: "Black Shirts",
    levelspiciness: "mild",
    diet: "sour",
    origin: "Continental",
  },
  {
    key: "40",
    pid: "#1980",
    date: "23 Feb 2023",
    numberline1: "Red Dress",
    numberline2: "Evening Gown",
    levelspiciness: "N/A",
    diet: "N/A",
    origin: "European",
  },
  {
    key: "60",
    pid: "#2990",
    date: "23 Feb 2023",
    numberline1: "Sports Shoes",
    numberline2: "Running Shoes",
    levelspiciness: "N/A",
    diet: "N/A",
    origin: "Asian",
  },
];

const pagination = {
  showTotal: (total, range) => (
    <span
      className="font-poppins"
      style={{ fontWeight: 500, fontSize: "12px" }}
    >
      {range[0]}-{range[1]} of items
    </span>
  ),
  pageSize: 10,
};

const ItemsTable = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
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
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "10%",
      ...getColumnSearchProps("date"),
    },
    {
      title: "Number Line 1",
      dataIndex: "numberline1",
      key: "numberline1",
      ...getColumnSearchProps("numberline1"),
    },
    {
      title: "Number Line 2",
      dataIndex: "numberline2",
      key: "numberline2",
      ...getColumnSearchProps("numberline2"),
    },
    {
      title: "Level Spiciness",
      dataIndex: "levelspiciness",
      key: "levelspiciness",
      ...getColumnSearchProps("levelspiciness"),
    },
    {
      title: "Diet",
      dataIndex: "diet",
      key: "diet",
      ...getColumnSearchProps("diet"),
    },
    {
      title: "origin",
      dataIndex: "origin",
      key: "origin",
      ...getColumnSearchProps("origin"),
    },
  ];
  return (
    <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            router.push(`items/${record?.key}`);
          },
          className: "cursor-pointer",
        };
      }}
      columns={columns}
      dataSource={[...data]}
      pagination={pagination}
    />
  );
};
export default ItemsTable;
