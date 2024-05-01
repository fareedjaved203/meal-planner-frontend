"use client";
import React, { useEffect, useState } from "react";

const ShowCustomTitle = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    setData(localStorage.getItem("custom_value"));
  }, []);
  return (
    <>
      {data != "false" && (
        <div
          className="p-4 font-mulish mt-2 mb-4"
          style={{ fontSize: "28px", fontWeight: "900" }}
        >
          Custom Order Details
        </div>
      )}
    </>
  );
};

export default ShowCustomTitle;
