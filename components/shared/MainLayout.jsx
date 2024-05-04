"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { Layout, Menu, theme, message } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { logoutUserApi } from "@/api/auth/authApi";
import { useRouter } from "next/navigation";
import deleteCookie from "../../lib/deleteCookie";
import { deleteUser } from "@/app/actions/cookies";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <MdDashboard style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/">
        <span className="font-mulish">Dashboard</span>
      </Link>
    ),
    style: {
      whiteSpace: "normal",
      lineHeight: 1.375,
      paddingLeft: "22px",
      paddingRight: "15px",
      paddingTop: "24px",
      paddingBottom: "23px",
      margin: "5px",
    },
  },
  {
    key: "2",
    icon: <FaCartShopping style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/placed-orders">
        <span className="font-mulish">Placed Orders</span>
      </Link>
    ),
    style: {
      whiteSpace: "normal",
      lineHeight: 1.375,
      paddingLeft: "22px",
      paddingRight: "15px",
      paddingTop: "24px",
      paddingBottom: "23px",
      margin: "5px",
    },
  },
  {
    key: "3",
    icon: <BsBookmarkCheckFill style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/completed-orders">
        <span className="font-mulish">Completed Orders</span>
      </Link>
    ),
    style: {
      whiteSpace: "normal",
      lineHeight: 1.375,
      paddingLeft: "22px",
      paddingRight: "15px",
      paddingTop: "24px",
      paddingBottom: "23px",
      margin: "5px",
    },
  },
  {
    key: "4",
    icon: <FaBagShopping style={{ fontSize: "20px" }} />,
    label: (
      <Link href="/items">
        <span className="font-mulish">Items</span>
      </Link>
    ),
    style: {
      whiteSpace: "normal",
      lineHeight: 1.375,
      paddingLeft: "22px",
      paddingRight: "15px",
      paddingTop: "24px",
      paddingBottom: "23px",
      margin: "5px",
    },
  },
  {
    key: "divider",
    className: "menu-divider",
    label: <Menu.Divider />,
  },
  {
    key: "5",
    icon: <IoIosHelpCircle style={{ fontSize: "20px" }} />,
    label: (
      <>
        <Link href="/">
          <span className="font-mulish">Help</span>
        </Link>
      </>
    ),
    style: {
      whiteSpace: "normal",
      lineHeight: 1,
      paddingLeft: "22px",
      paddingRight: "15px",
      paddingTop: "24px",
      paddingBottom: "23px",
      margin: "5px",
    },
  },
  {
    key: "spacer",
    label: <div style={{ flexGrow: 1 }} />,
    className: "spacer",
  },
];

const MainLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [path, setPath] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const [selectedKey, setSelectedKey] = useState(
    typeof window !== "undefined" ? localStorage.getItem("path") : ""
  );

  const logoutHandler = async () => {
    const data = await logoutUserApi();
    if (data.success) {
      await deleteUser("user");
      messageApi.success(data.message);
      setTimeout(() => {
        router.push("/login");
      }, 500);
    } else {
      messageApi.error("Something went wrong");
    }
  };

  const logout = [
    {
      key: "6",
      icon: <IoIosArrowRoundBack style={{ fontSize: "20px", color: "gray" }} />,
      className: "logout",

      label: (
        <>
          <span
            className="font-mulish"
            style={{ color: "#cccbd8" }}
            onClick={logoutHandler}
          >
            Logout
          </span>
        </>
      ),
      style: {
        paddingRight: "15px",
      },
    },
  ];

  useEffect(() => {
    const data = localStorage.getItem("path");
    setPath(data);
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/completed-orders")) {
      setSelectedKey("3");
      localStorage.setItem("path", "3");
    } else if (pathname.startsWith("/items")) {
      setSelectedKey("4");
      localStorage.setItem("path", "4");
    } else if (pathname.startsWith("/placed-orders")) {
      setSelectedKey("2");
      localStorage.setItem("path", "2");
    } else {
      switch (pathname) {
        case "/":
          setSelectedKey("1");
          localStorage.setItem("path", "1");
          break;
        default:
          setSelectedKey("1");
      }
    }
  }, [pathname, path]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider className="font-mulish">
      {contextHolder}
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
        width={256}
      >
        <Link href="/" className="text-black hover:text-black focus:text-black">
          <div className="text-2xl mb-4 flex items-center ml-8 mt-16">
            <Image
              src="/so-wallet-coin.svg"
              width={28}
              height={28}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
            <span
              className="font-mulish"
              style={{
                fontWeight: 800,
                fontSize: "21px",
                lineHeight: "35.6px",
              }}
            >
              Meal Planner
            </span>
          </div>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "80%",
          }}
        >
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[selectedKey]}
            className="my-menu"
            style={{
              height: "58vh",
              borderRight: 0,
              marginTop: "40px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            items={items}
          />
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[selectedKey]}
            className="my-menu"
            style={{
              height: "10vh",
              borderRight: 0,
              marginTop: "30px",
              padding: "10px",
              marginLeft: "22px",
              marginRight: "20px",
            }}
            items={logout}
          />
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
            background: "#F8F8F8",
            marginLeft: "55px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
