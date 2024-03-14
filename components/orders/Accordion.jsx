"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import CompleteOrdersTable from "./CompleteOrdersTable";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    content: "ajksda",
  },
  // Add more items here...
];

function Accordion({ predefined = false }) {
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
            {predefined && (
              <div className="flex justify-between pr-4">
                <div className="flex pl-4 w-1/4 justify-center items-center">
                  <div className="flex justify-center items-center w-full bg-indigo-200 text-indigo-700 font-semibold border-indigo-700 cursor-pointer rounded p-1 pt-0 pb-0 h-10 px-2">
                    <Link href="/placed-orders/select-items">
                      <div className="text-purpleText w-full flex justify-center items-center">
                        Add Item
                      </div>
                    </Link>
                  </div>

                  <div className="ml-4" />
                  <div className="flex justify-center items-center w-full bg-removeItem text-indigo-700 font-semibold border-indigo-700 cursor-pointer rounded p-1 pt-0 pb-0 h-10 px-2">
                    <div className="text-removeItemText w-full flex justify-center items-center">
                      Remove Item
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-indigo-200 text-indigo-700 font-semibold border-indigo-700 cursor-pointer rounded p-1 pt-0 pb-0 w-auto h-10 px-2">
                  <Image
                    src="/scan-barcode.png"
                    width={20}
                    height={20}
                    alt="image"
                  />
                  <div className="ml-2 text-purpleText">Download QR</div>
                </div>
              </div>
            )}

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
