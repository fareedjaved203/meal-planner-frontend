"use client";
import { getSingleItemApi } from "@/api/items/itemsApi";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ReceiptData = () => {
  const params = useParams().id;
  const [receipt, setReceipt] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getSingleItemApi(params);
      const date = new Date(data?.item?.createdAt);
      data.item.createdAt = date.toISOString().split("T")[0];
      setReceipt(data.item);
    };
    getData();
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex justify-between mb-4">
          <div className="text-sm text-gray-600">ID: {receipt?._id}</div>
          <div className="text-sm text-gray-600">
            Date: {receipt?.createdAt}
          </div>
        </div>
        <div className="text-xl font-semibold mb-2">{receipt?.nameLine1}</div>
        <div className="text-lg mb-2">{receipt?.nameLine2}</div>
        <div className="flex mb-2">
          <div className="mr-4">
            <span className="font-semibold">Spiciness:</span>{" "}
            {receipt?.spiciness}
          </div>
          <div className="mr-4">
            <span className="font-semibold">Diet:</span> {receipt?.diet}
          </div>
          <div className="mr-4">
            <span className="font-semibold">Origin:</span> {receipt?.origin}
          </div>
          <div>
            <span className="font-semibold">Preparation Time:</span>{" "}
            {receipt?.preparationTime}
          </div>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Difficulty:</span>{" "}
          {receipt?.difficulty}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Ingredients:</span>
          <ul className="list-disc ml-6">
            {receipt?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient?.value}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-semibold">Steps:</span>
          <ol className="list-decimal ml-6">
            {receipt?.steps?.map((step, index) => (
              <li key={index}>{step?.value}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ReceiptData;
