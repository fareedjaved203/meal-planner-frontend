import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/mulish";
import Navbar from "../components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meal Planner - Admin Dashboard",
  description: "Splenify",
};

export default function RootLayout({ children, showNavbar = false }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
