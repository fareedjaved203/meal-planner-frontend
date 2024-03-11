"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import {
  LogoutOutlined,
  AppstoreFilled,
  ShoppingCartOutlined,
  CheckSquareFilled,
  ShoppingOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";

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
        >
          <Menu.Item
            key="1"
            icon={<AppstoreFilled />}
            style={{ whiteSpace: "normal", lineHeight: 1.375 }}
          >
            <Link href="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<ShoppingCartOutlined />}
            style={{
              whiteSpace: "normal",
              lineHeight: 1.375,
              marginTop: "20px",
            }}
          >
            <Link href="placed-orders">Placed Orders</Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<CheckSquareFilled />}
            style={{
              whiteSpace: "normal",
              lineHeight: 1.375,
              marginTop: "20px",
            }}
          >
            <Link href="completed-orders">Completed Orders</Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<ShoppingOutlined />}
            style={{
              whiteSpace: "normal",
              lineHeight: 1.375,
              marginTop: "20px",
            }}
          >
            <Link href="/items">Items</Link>
          </Menu.Item>
          <div className="m-4 text-white">.</div>
          <hr className="p-2 m-4 mb-0" />
          <Menu.Item
            key="5"
            icon={<QuestionCircleFilled />}
            style={{
              whiteSpace: "normal",
              lineHeight: 1.375,
              marginTop: "20px",
            }}
          >
            <Link href="/">Help</Link>
          </Menu.Item>
        </Menu>
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Menu theme="light" mode="inline">
            <Menu.Item key="6" icon={<LogoutOutlined />}>
              <Link href="/login">Logout</Link>
            </Menu.Item>
          </Menu>
        </div>
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
