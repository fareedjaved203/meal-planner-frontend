"use client";
import { postPredefinedApi } from "@/api/predefined/predefinedApi";
import React, { useState } from "react";
const ApplyItemButton = () => {
  const [loading, isLoading] = useState(false);
  const saveItem = async () => {
    isLoading(true);
    const data = localStorage.getItem("rows");
    const pid = localStorage.getItem("pid");
    const rows = JSON.parse(data);
    console.log(rows);
    const formData = new FormData();
    formData.append("predefined", rows);
    formData.append("pid", pid);
    const saveData = await postPredefinedApi({ predefined: rows, pid });
    console.log(saveData);
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
