"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Checkbox } from "antd";
import Highlighter from "react-highlight-words";
import { useParams } from "next/navigation";

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

const CustomOrderTable = (orders = []) => {
  const params = useParams().id;
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    const getOrders = async () => {
      const order = orders?.orders?.find((order) => order.id == params);

      if (order) {
        const date = new Date(order?.processed_at);
        let formattedDate = date.toISOString().slice(0, 10);

        const lineItemsProperties = order?.line_items?.reduce(
          (result, item) => {
            if (item.properties && item.properties.length > 0) {
              result.push({
                numberline1: item.properties[0]?.value,
                numberline2: item.properties[1]?.value,
                levelspiciness: item.properties[3]?.value,
                diet: item.properties[5]?.value,
                origin: item.properties[6]?.value,
              });
            }
            return result;
          },
          []
        );

        const filteredData = {
          pid: order?.id,
          date: formattedDate,
          numberline1: lineItemsProperties[0].numberline1,
          numberline2: lineItemsProperties[0].numberline2,
          levelspiciness: lineItemsProperties[0].levelspiciness,
          diet: lineItemsProperties[0].diet,
          origin: lineItemsProperties[0].origin,
        };

        setList([filteredData]);
      }
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
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

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
      title: "Name Line 1",
      dataIndex: "numberline1",
      key: "numberline1",
      width: "20%",
      ...getColumnSearchProps("numberline1"),
    },
    {
      title: "Name Line 2",
      dataIndex: "numberline2",
      key: "numberline2",
      width: "20%",
      ...getColumnSearchProps("numberline2"),
    },
    {
      title: "Level Spiciness",
      dataIndex: "levelspiciness",
      key: "levelspiciness",
      width: "20%",
      ...getColumnSearchProps("levelspiciness"),
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
      columns={columns}
      rowSelection={{
        ...rowSelection,
      }}
      dataSource={[...list]}
      pagination={pagination}
    />
  );
};
export default CustomOrderTable;
