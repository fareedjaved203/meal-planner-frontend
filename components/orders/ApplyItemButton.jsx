"use client";
import { postPredefinedApi } from "@/api/predefined/predefinedApi";
import React, { useState } from "react";
const ApplyItemButton = () => {
  const [loading, isLoading] = useState(false);
  const saveItem = async () => {
    isLoading(true);
    const data = localStorage.getItem("rows");
    const pid = localStorage.getItem("pid");
    const orderId = localStorage.getItem("orderId");
    const rows = JSON.parse(data);
    await postPredefinedApi({
      predefined: rows,
      pid,
      orderId,
    });
    localStorage.removeItem("rows");
    isLoading(false);
  };
  return (
    <div className="flex justify-center items-center w-44 bg-indigo-100 text-indigo-700 font-semibold border-indigo-700 cursor-pointer rounded p-1 pt-0 pb-0 h-14 px-2">
      <div
        className="text-purpleText w-full flex justify-center items-center font-inter"
        style={{ fontSize: "17px", paddingvertical: "9px" }}
        onClick={saveItem}
      >
        {loading ? "Saving..." : "Apply"}
      </div>
    </div>
  );
};

export default ApplyItemButton;
