"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const username = "Fareed Javed";
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      const formattedTime = now
        .toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
        .slice(0, 5);
      const meridian = now.getHours() >= 12 ? "PM" : "AM";
      const formattedDate = now.toLocaleDateString("en-UK", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      setCurrentTime(`${formattedTime} ${meridian} ${formattedDate}`);
    }, 1000); // Update time every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  const imageSrc = ({ src }) => {
    return `https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg`;
  };

  return (
    <nav className="flex justify-between items-center bg-white text-black pl-4 pr-2 pt-2 leading-snug font-mulish">
      <div className="flex flex-col items-start justify-start font-poppins">
        <div
          className="font-semibold"
          style={{ color: "#00261C", fontSize: "18px" }}
        >
          Hello {username}
        </div>
        <div
          className="font-poppins"
          style={{ color: "#707EAE", fontSize: "11px" }}
        >
          {currentTime}
        </div>
      </div>
      <div className="flex items-center pr-3">
        <span
          className="mr-4 max-sm:hidden font-bold font-poppins"
          style={{ fontSize: "16px" }}
        >
          {username}
        </span>
        <Image
          src={
            "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
          }
          width={50}
          height={50}
          alt="logo icon"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
