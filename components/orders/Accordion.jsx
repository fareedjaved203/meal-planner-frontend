"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import SelectOrdersTable from "../select _items/selectOrdersTable";
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
    <div
      className="w-full rounded pl-4 pr-4 ml-4 font-poppins"
      style={{ backgroundColor: "#F8F8F8" }}
    >
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
              <p style={{ fontSize: "18px" }}>Lorem Ipsum</p>
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
              <div className="flex justify-between pr-4 pt-4">
                <div className="flex pl-4 w-1/4 justify-center items-center">
                  <div className="flex justify-center items-center w-full bg-lightSky text-purpleText cursor-pointer rounded p-1 pt-0 pb-0 h-10 px-2">
                    <Link href="/placed-orders/select-items">
                      <div
                        className="text-purpleText w-full flex justify-center items-center font-inter"
                        style={{ fontWeight: "600", fontSize: "13px" }}
                      >
                        Add Item
                      </div>
                    </Link>
                  </div>

                  <div className="ml-4" />
                  <div className="flex justify-center items-center w-full bg-removeItem cursor-pointer rounded p-1 pt-0 pb-0 h-10 px-2">
                    <div
                      className="text-removeItemText w-full flex justify-center items-center font-inter"
                      style={{ fontWeight: "600", fontSize: "13px" }}
                    >
                      Remove Item
                    </div>
                  </div>
                </div>

                <div className="inline-flex p-2 pt-1 pb-1 justify-center items-center bg-lightSky text-purpleText cursor-pointer rounded">
                  <Image
                    src={"/scan-barcode.png"}
                    width={20}
                    height={20}
                    alt="image"
                  />
                  <div
                    className="ml-2 font-inter"
                    style={{ fontWeight: "600", fontSize: "13px" }}
                  >
                    Download QR
                  </div>
                </div>
              </div>
            )}

            <div className="p-5">
              <SelectOrdersTable />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
