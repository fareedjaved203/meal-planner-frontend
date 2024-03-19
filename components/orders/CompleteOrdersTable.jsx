"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox } from "antd";
import Highlighter from "react-highlight-words";
import { useRouter } from "next/navigation";

let data = [
  {
    key: "1",
    pid: "#123",
    date: "23 Feb 2023",
    orderby: "example@gmail.com",
    quantity: 30,
    type: "Custom",
    price: 4200,
    complete: true,
  },
  {
    key: "2",
    pid: "#321",
    date: "23 Feb 2023",
    orderby: "example@gmail.com",
    quantity: 30,
    type: "Custom",
    price: 4000,
    complete: true,
  },
  // 10 more similar objects
  {
    key: "3",
    pid: "#456",
    date: "24 Feb 2023",
    orderby: "anotherexample@gmail.com",
    quantity: 20,
    type: "Standard",
    price: 3000,
    complete: false,
  },
  {
    key: "4",
    pid: "#789",
    date: "25 Feb 2023",
    orderby: "yetanotherexample@gmail.com",
    quantity: 40,
    type: "Custom",
    price: 5000,
    complete: true,
  },
  {
    key: "5",
    pid: "#135",
    date: "26 Feb 2023",
    orderby: "user@example.com",
    quantity: 25,
    type: "Custom",
    price: 4500,
    complete: false,
  },
  {
    key: "6",
    pid: "#246",
    date: "27 Feb 2023",
    orderby: "user@example.com",
    quantity: 35,
    type: "Standard",
    price: 3800,
    complete: true,
  },
  {
    key: "7",
    pid: "#357",
    date: "28 Feb 2023",
    orderby: "test@example.com",
    quantity: 45,
    type: "Custom",
    price: 5200,
    complete: false,
  },
  {
    key: "8",
    pid: "#468",
    date: "01 Mar 2023",
    orderby: "test@example.com",
    quantity: 30,
    type: "Standard",
    price: 3200,
    complete: true,
  },
  {
    key: "9",
    pid: "#579",
    date: "02 Mar 2023",
    orderby: "admin@example.com",
    quantity: 40,
    type: "Custom",
    price: 4800,
    complete: false,
  },
  {
    key: "10",
    pid: "#680",
    date: "03 Mar 2023",
    orderby: "admin@example.com",
    quantity: 20,
    type: "Custom",
    price: 4200,
    complete: true,
  },
  // 10 more similar objects...
  {
    key: "11",
    pid: "#781",
    date: "04 Mar 2023",
    orderby: "admin@example.com",
    quantity: 35,
    type: "Standard",
    price: 3600,
    complete: false,
  },
  {
    key: "12",
    pid: "#892",
    date: "05 Mar 2023",
    orderby: "admin@example.com",
    quantity: 28,
    type: "Custom",
    price: 4300,
    complete: true,
  },
  {
    key: "13",
    pid: "#903",
    date: "06 Mar 2023",
    orderby: "admin@example.com",
    quantity: 33,
    type: "Standard",
    price: 3400,
    complete: false,
  },
  {
    key: "14",
    pid: "#914",
    date: "07 Mar 2023",
    orderby: "admin@example.com",
    quantity: 22,
    type: "Custom",
    price: 4100,
    complete: true,
  },
  {
    key: "15",
    pid: "#925",
    date: "08 Mar 2023",
    orderby: "admin@example.com",
    quantity: 27,
    type: "Custom",
    price: 4400,
    complete: false,
  },
  {
    key: "16",
    pid: "#936",
    date: "09 Mar 2023",
    orderby: "admin@example.com",
    quantity: 38,
    type: "Standard",
    price: 3700,
    complete: true,
  },
  {
    key: "17",
    pid: "#947",
    date: "10 Mar 2023",
    orderby: "admin@example.com",
    quantity: 31,
    type: "Custom",
    price: 4900,
    complete: false,
  },
  {
    key: "18",
    pid: "#958",
    date: "11 Mar 2023",
    orderby: "admin@example.com",
    quantity: 26,
    type: "Custom",
    price: 4500,
    complete: true,
  },
  {
    key: "19",
    pid: "#969",
    date: "12 Mar 2023",
    orderby: "admin@example.com",
    quantity: 36,
    type: "Standard",
    price: 3800,
    complete: false,
  },
  {
    key: "20",
    pid: "#970",
    date: "13 Mar 2023",
    orderby: "admin@example.com",
    quantity: 29,
    type: "Custom",
    price: 4600,
    complete: true,
  },
];

const pagination = {
  showTotal: (total, range) => (
    <>
      {range[0]}-{range[1]} of {total} items
    </>

    // <div className="w-full flex justify-between items-center">
    //   <span className="font-poppins font-bold mr-96">
    //     Total Orders: {total}
    //   </span>
    //   <span className="ml-64">
    //     {range[0]}-{range[1]} of {total} items
    //   </span>
    // </div>
  ),
  pageSize: 10,
};

const CompleteOrdersTable = ({ order = "placed-orders" }) => {
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
      width: "30%",
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
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              // Check if the event was triggered by a checkbox
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
export default CompleteOrdersTable;
