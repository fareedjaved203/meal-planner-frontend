"use client";
import { postPredefinedApi } from "@/api/predefined/predefinedApi";
import React, { useState } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";

const ApplyItemButton = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, isLoading] = useState(false);

  const saveItem = async () => {
    isLoading(true);
    const data = localStorage.getItem("rows");
    const pid = localStorage.getItem("pid");
    const orderId = localStorage.getItem("orderId");
    const rows = JSON.parse(data);
    const postItem = await postPredefinedApi({
      predefined: rows,
      pid,
      orderId,
    });
    if (postItem?.success) {
      localStorage.removeItem("rows");
      isLoading(false);
      messageApi.success(postItem?.message);
      setTimeout(() => {
        router.back();
      }, 1000);
    } else {
      isLoading(false);
      messageApi.error(postItem?.message);
    }
  };
  return (
    <div className="flex justify-center items-center w-44 bg-indigo-100 text-indigo-700 font-semibold border-indigo-700 cursor-pointer rounded p-1 pt-0 pb-0 h-14 px-2">
      {contextHolder}
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
