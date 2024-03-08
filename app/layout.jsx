import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/mulish";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout from "../components/shared/MainLayout";
import MainLayout from "../components/shared/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meal Planner - Admin Dashboard",
  description: "Splenify",
};

export default function RootLayout({ children, showNavbar = false }) {
  return (
    <html lang="en">
      <body>
        {showNavbar && (
          <>
            <MainLayout />
          </>
        )}
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
