"use client";
import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox, Pagination } from "antd";
import Highlighter from "react-highlight-words";
import Image from "next/image";

let data = [
  {
    key: "1",
    pid: "123",
    date: "23 Feb 2023",
    title: "Black Shirts",
    description: "we can write here anything...",
    complete: true,
  },
  {
    key: "2",
    pid: "321",
    date: "23 Feb 2023",
    title: "Black Shirts",
    description: "we can write here anything...",
    complete: false,
  },
];

const DashboardTable = () => {
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
      ...getColumnSearchProps("pid"),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "20%",
      ...getColumnSearchProps("date"),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
      ...getColumnSearchProps("title"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "20%",
      ...getColumnSearchProps("description"),
    },
    {
      title: "QR Code",
      dataIndex: "qrcode",
      key: "qrcode",
      width: "20%",
      ...getColumnSearchProps("qrcode"),
      render: (text, record) => (
        <>
          {record.complete ? (
            <>
              <div className="inline-flex p-2 justify-center items-center font-bold bg-gray-100 text-green-700 border-green-700 cursor-pointer rounded text-xs">
                <Image src={"/Icon.png"} width={18} height={18} alt="image" />
                <div
                  className="ml-2 font-semibold text-md ml-2"
                  style={{ color: "#00C67F" }}
                >
                  QR Generated
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="inline-flex p-2 justify-center items-center font-bold bg-indigo-100 text-indigo-700 border-indigo-700 cursor-pointer rounded text-xs">
                <Image
                  src={"/scan-barcode.png"}
                  width={20}
                  height={20}
                  alt="image"
                />
                <div className="font-semibold text-md ml-2">Generated QR</div>
              </div>
            </>
          )}
        </>
      ),
    },
    {
      title: "Complete",
      dataIndex: "complete",
      key: "complete",
      render: (text, record, onChange) => (
        <Checkbox
          checked={record.complete}
          onChange={(e) => {
            const recordIndex = data.findIndex(
              (item) => item.key === record.key
            );
          }}
        />
      ),
    },
  ];
  return <Table columns={columns} dataSource={[...data]} />;
};
export default DashboardTable;
