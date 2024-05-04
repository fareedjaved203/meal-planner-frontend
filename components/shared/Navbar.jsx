"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { getUser } from "@/app/actions/cookies";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const username = user?.name;
  const [currentTime, setCurrentTime] = useState(
    format(new Date(), "h:mm aa d MMM yyyy")
  );

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
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-white text-black pl-4 pr-2 pt-1 pb-2 ml-16 leading-snug font-mulish">
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
          className="mr-4 max-sm:hidden  font-poppins"
          style={{ fontSize: "16px", fontWeight: 600, paddingRight: "5px" }}
        >
          {username}
        </span>
        <Image
          src={"/Rectangle 338.svg"}
          width={65}
          height={65}
          alt="logo icon"
          className="w-12 h-12 rounded-lg p-1"
          priority={false}
        />
      </div>
    </nav>
  );
};

export default Navbar;
