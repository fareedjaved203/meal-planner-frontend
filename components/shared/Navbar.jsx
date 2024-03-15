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
      const formattedDate = now.toLocaleDateString("en-US", {
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
      <div className="flex flex-col items-start justify-start">
        <div
          className="font-semibold text-lg leading-7 tracking-wider"
          style={{ color: "#00261C" }}
        >
          Hello {username}
        </div>
        <div
          className="font-normal text-xs leading-4 tracking-tighter"
          style={{ color: "#707EAE" }}
        >
          {currentTime}
        </div>
      </div>
      <div className="flex items-center pr-3">
        <span className="mr-4 max-sm:hidden font-bold">{username}</span>
        <Image
          src={
            "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
          }
          width={40}
          height={40}
          alt="logo icon"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
