"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { Layout, Menu, theme } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <MdDashboard style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/">
        <span className="text-gray-600">Dashboard</span>
      </Link>
    ),
    style: { whiteSpace: "normal", lineHeight: 1.375 },
  },
  {
    key: "2",
    icon: <FaCartShopping style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/placed-orders">
        <span className="text-gray-600">Placed Orders</span>
      </Link>
    ),
    style: { whiteSpace: "normal", lineHeight: 1.375, marginTop: "20px" },
  },
  {
    key: "3",
    icon: <BsBookmarkCheckFill style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/completed-orders">
        <span className="text-gray-600">Completed Orders</span>
      </Link>
    ),
    style: { whiteSpace: "normal", lineHeight: 1.375, marginTop: "20px" },
  },
  {
    key: "4",
    icon: <FaBagShopping style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/items">
        <span className="text-gray-600">Items</span>
      </Link>
    ),
    style: { whiteSpace: "normal", lineHeight: 1.375, marginTop: "20px" },
  },
  {
    key: "5",
    icon: <IoIosHelpCircle style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/">
        <span className="text-gray-600">Help</span>
      </Link>
    ),
    style: { whiteSpace: "normal", lineHeight: 1.375, marginTop: "20px" },
  },
  {
    key: "spacer",
    label: (
      <div style={{ flex: "1 1 auto", background: "none", cursor: "none" }} />
    ),
    className: "spacer",
  },
  {
    key: "spacer",
    label: <div style={{ flex: "1 1 auto", background: "none" }} />,
    className: "spacer",
  },
  {
    key: "spacer",
    label: <div style={{ flex: "1 1 auto", background: "none" }} />,
    className: "spacer",
  },
  {
    key: "6",
    icon: <IoIosArrowRoundBack style={{ fontSize: "20px" }} />,
    className: "logout",
    label: (
      <Link href="/login">
        <span className="text-gray-500">Logout</span>
      </Link>
    ),
  },
];

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState("");
  console.log(pathname);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSelectedKey("1");
        break;
      case "/items":
        setSelectedKey("4");
        break;
      case "/placed-orders":
        setSelectedKey("2");
        break;
      case "/completed-orders":
        setSelectedKey("3");
        break;
      default:
        setSelectedKey("");
    }
  }, [pathname]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "hidden",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        <Image
          src="/Logo.png"
          width={400}
          height={400}
          alt="logo icon"
          className="mt-4"
        />
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]}
          className="my-menu"
          style={{
            height: "100%",
            borderRight: 0,
            marginTop: "30px",
            padding: "10px",
          }}
          items={items}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Navbar />
        </Header>
        <Content
          style={{
            overflow: "initial",
            background: "#F2F1F9",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
