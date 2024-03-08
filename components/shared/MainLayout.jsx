"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import {
  DashboardOutlined,
  OrderedListOutlined,
  CheckCircleOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  AppstoreFilled,
  ShoppingCartOutlined,
  CheckSquareFilled,
  ShoppingOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";

const items = [
  { key: "1", label: "Dashboard", icon: <DashboardOutlined /> },
  { key: "2", label: "Placed Orders", icon: <OrderedListOutlined /> },
  { key: "3", label: "Completed Orders", icon: <CheckCircleOutlined /> },
  { key: "4", label: "Items", icon: <ShopOutlined /> },
  { key: "5", type: "divider" },
  { key: "6", label: "Help", icon: <QuestionCircleOutlined /> },
  { key: "7", label: "Logout", icon: <LogoutOutlined />, position: "bottom" },
].map((item) => {
  if (item.type === "divider") {
    return { type: "divider" };
  }
  return {
    key: item.key,
    icon: item.icon,
    label: item.label,
    position: item.position,
  };
});
const MainLayout = () => {
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
          backgroundColor: "white", // Set the background color to white
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
          defaultSelectedKeys={["1"]}
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
            Dashboard
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
            Placed Orders
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
            Completed Orders
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
            Items
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
            Help
          </Menu.Item>
        </Menu>
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Menu theme="light" mode="inline">
            <Menu.Item key="6" icon={<LogoutOutlined />}>
              Logout
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
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from(
                {
                  length: 100,
                },
                (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? "more" : "..."}
                    <br />
                  </React.Fragment>
                )
              )
            }
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
