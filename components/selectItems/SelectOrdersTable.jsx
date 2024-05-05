"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox } from "antd";
import Highlighter from "react-highlight-words";
import { useParams } from "next/navigation";
import { getItemsApi } from "@/api/items/itemsApi";
import { useSelector } from "react-redux";

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

const SelectOrdersTable = (itemsData) => {
  const [list, setList] = useState([]);
  const [tempArray, setTemp] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const date = useSelector((state) => state.date.date);

  const getItems = async () => {
    const data = itemsData;
    data?.itemsData?.items?.forEach((item) => {
      const date = new Date(item.createdAt);
      item.createdAt = date.toISOString().split("T")[0];
    });
    setList(data?.itemsData?.items);
    setTemp(data?.itemsData?.items);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    if (date) {
      console.log(tempArray);
      const data = tempArray.filter((item) => {
        return item.createdAt == date;
      });
      console.log(data);
      setList(data);
    } else {
      getItems();
    }
  }, [date]);

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
      record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
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

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log("selectedRows: ", selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(selectedRows);
      localStorage.setItem("rows", JSON.stringify(selectedRows));
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selectedRows);
      localStorage.setItem("rows", JSON.stringify(selectedRows));
    },
  };

  const columns = [
    {
      title: "PID",
      dataIndex: "_id",
      key: "_id",
      width: "10%",
      className: "pidColumn",

      ...getColumnSearchProps("_id"),
      render: (text) => `#${text}`,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "20%",
      ...getColumnSearchProps("createdAt"),
    },
    {
      title: "Name Line 1",
      dataIndex: "nameLine1",
      key: "nameLine1",
      width: "20%",
      ...getColumnSearchProps("nameLine1"),
    },
    {
      title: "Name Line 2",
      dataIndex: "nameLine2",
      key: "nameLine2",
      width: "20%",
      ...getColumnSearchProps("nameLine2"),
    },
    {
      title: "Level Spiciness",
      dataIndex: "spiciness",
      key: "spiciness",
      width: "20%",
      ...getColumnSearchProps("spiciness"),
    },
    {
      title: "Diet",
      dataIndex: "diet",
      key: "diet",
      width: "20%",
      ...getColumnSearchProps("diet"),
    },
    {
      title: "origin",
      dataIndex: "origin",
      key: "origin",
      width: "20%",

      ...getColumnSearchProps("origin"),
    },
  ];
  return (
    <Table
      rowKey={(record) => record._id}
      columns={columns}
      rowSelection={{
        ...rowSelection,
      }}
      dataSource={[...list]}
      pagination={pagination}
    />
  );
};
export default SelectOrdersTable;
