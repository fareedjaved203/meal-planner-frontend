"use client";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const BackButton = ({ text = "Back" }) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-start w-full pl-4 mt-4 font-poppins cursor-pointer"
      onClick={() => router.back()}
    >
      <div>
        <IoIosArrowRoundBack className="text-3xl" />
      </div>
      <div
        className="ml-4 mr-4"
        style={{ fontWeight: "800", fontSize: "17px" }}
      >
        {text}
      </div>
      <div className="flex-grow pr-4 mr-4">
        <hr />
      </div>
    </div>
  );
};

export default BackButton;
