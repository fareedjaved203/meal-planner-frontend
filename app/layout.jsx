import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/mulish";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meal Planner - Admin Dashboard",
  description: "Splenify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
