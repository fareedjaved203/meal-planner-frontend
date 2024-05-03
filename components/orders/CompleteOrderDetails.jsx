"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSingleOrderApi } from "@/api/orders/ordersApi";

const CompleteOrderDetails = (singleOrder) => {
  const [data, setData] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const myorder = async () => {
      const data = singleOrder;
      let orderData = data?.singleOrder?.order[0];

      let date = new Date(orderData.date);

      let formattedDate = date.toISOString().slice(0, 10);

      orderData.date = formattedDate;

      setData(orderData);
    };
    myorder();
  }, [id]);
  return (
    <>
      <div className="bg-white m-4 rounded p-4">
        <div
          className="p-4 font-mulish"
          style={{ fontSize: "28px", fontWeight: "900" }}
        >
          Completed Order Details
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full font-mulish">
          <div className="p-4">
            <div
              className="font-mulish pb-4"
              style={{ fontWeight: "900", margin: "1.5%" }}
            >
              PID
            </div>
            <div>
              <input
                type="text"
                value={data?.pid}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
          <div className="p-4">
            <div
              className="font-mulish pb-4"
              style={{ fontWeight: "900", margin: "1.5%" }}
            >
              Date Completed
            </div>
            <div>
              <input
                type="text"
                value={data?.date}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
          <div className="p-4">
            <div className="font-bold pb-4 mb-2">Ordered By</div>
            <div>
              <input
                type="text"
                value={data?.orderby}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="font-bold pb-4 mb-2">Quantity</div>
            <div>
              <input
                type="text"
                value={data?.quantity}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
          <div className="p-4">
            <div className="font-bold pb-4 mb-2">Type</div>
            <div>
              <input
                type="text"
                value={data?.type}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="font-bold pb-4 mb-2">Price</div>
            <div>
              <input
                type="text"
                value={data?.price}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
          <div className="p-4">
            <div className="font-bold pb-4 mb-2">Status</div>
            <div>
              <input
                type="text"
                value="Completed"
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteOrderDetails;
