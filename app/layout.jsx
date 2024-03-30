import React from "react";
import { Mulish, Inter, Poppins } from "next/font/google";
import "./globals.css";
import "@fontsource/mulish";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainLayout from "../components/shared/MainLayout";
import PropTypes from "prop-types";
import { Toaster } from "react-hot-toast";
import store from "../store/store";
import { StoreProvider } from "../store/StoreProvider";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Meal Planner - Admin Dashboard",
  description: "Splenify",
};

const RootLayout = ({ children, showNavbar = false }) => {
  return (
    <html
      lang="en"
      className={`${mulish.className} ${inter.className} ${poppins.className}`}
    >
      <body>
        <AntdRegistry>
          <StoreProvider>
            {showNavbar ? (
              <MainLayout>{children} </MainLayout>
            ) : (
              <>{children}</>
            )}
            <Toaster />
          </StoreProvider>
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
