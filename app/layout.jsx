import React from "react";
import { Mulish, Inter, Poppins } from "next/font/google";
import "./globals.css";
import "@fontsource/mulish";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainLayout from "../components/shared/MainLayout";
import PropTypes from "prop-types";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "../store/StoreProvider";
import LoginProtectedRoute from "../hooks/LoginProtectedRoute";
import { cookies } from "next/headers";

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
  const cookieStore = cookies();
  const user = cookieStore.get("user");
  // if (user) {
  //   redirect("/");
  //   return;
  // }
  return (
    <html
      lang="en"
      className={`${mulish.className} ${inter.className} ${poppins.className}`}
    >
      <body>
        <StoreProvider>
          <AntdRegistry>
            {showNavbar ? (
              <MainLayout>{children} </MainLayout>
            ) : (
              <>{children}</>
            )}
            <Toaster />
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showNavbar: PropTypes.bool,
};

export default RootLayout;
