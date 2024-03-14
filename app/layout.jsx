import { Mulish } from "next/font/google";
import React from "react";
import "./globals.css";
import "@fontsource/mulish";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainLayout from "../components/shared/MainLayout";
import PropTypes from "prop-types";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Meal Planner - Admin Dashboard",
  description: "Splenify",
};

const RootLayout = ({ children, showNavbar = false }) => {
  return (
    <html lang="en" className={mulish.className}>
      <body className="font-mulish">
        <AntdRegistry>
          {showNavbar ? <MainLayout>{children}</MainLayout> : <>{children}</>}
        </AntdRegistry>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showNavbar: PropTypes.bool,
};

export default RootLayout;
