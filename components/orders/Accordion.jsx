"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import CompleteOrdersTable from "./CompleteOrdersTable";
import Image from "next/image";

const data = [
  {
    content: "ajksda",
  },
  // Add more items here...
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full bg-gray-100 rounded pl-4 pr-4 ml-4">
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <div
            className="flex justify-between items-center p-5 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <div className="flex justify-between w-full">
              <h2 className="font-semibold ">
                <span className="font-bold">Quantity</span> 2
              </h2>
              <p className="font-semibold ">lorem</p>
              <div>
                <span className="font-bold">Price$</span> 150
              </div>

              <div>
                {activeIndex === index ? (
                  <FaChevronCircleUp className="text-2xl" />
                ) : (
                  <FaChevronCircleDown className="text-2xl" />
                )}
              </div>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ${
              activeIndex === index ? "max-h-60" : "max-h-0"
            }`}
          >
            <div className="w-full flex justify-end pr-4">
              <div className="flex justify-center items-center bg-indigo-200 text-indigo-700 font-semibold border-indigo-700 cursor-pointer rounded px-4 py-2">
                <Image
                  src={"/scan-barcode.png"}
                  width={20}
                  height={20}
                  alt="image"
                />
                <div className="ml-2">Download QR</div>
              </div>
            </div>

            <div className="p-5">
              <CompleteOrdersTable />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
