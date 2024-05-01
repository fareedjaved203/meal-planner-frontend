"use client";
import React, { useEffect, useState } from "react";

const ShowPredefinedTitle = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    setData(localStorage.getItem("predefined_value"));
    console.log(localStorage.getItem("predefined_value"));
  }, []);
  return (
    <>
      {data != "false" && (
        <div
          className="p-4 font-mulish mt-2 mb-4"
          style={{ fontSize: "28px", fontWeight: "900" }}
        >
          Predefined Order Details
        </div>
      )}
    </>
  );
};

export default ShowPredefinedTitle;
