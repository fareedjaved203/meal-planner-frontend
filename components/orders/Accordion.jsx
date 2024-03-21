"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import SelectOrdersTable from "../selectItems/SelectOrdersTable";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
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
        <div key={index} className="border-b border-gray-200 rounded-lg">
          <div
            className="flex justify-between items-center pl-6 pr-6 cursor-pointer rounded-lg"
            style={{ height: "93px" }}
            onClick={() => toggleItem(index)}
          >
            <div className="flex justify-between items-center w-full">
              <div className="font-poppins ">
                <span style={{ fontWeight: "700", fontSize: "18px" }}>
                  Quantity
                </span>{" "}
                <span style={{ fontWeight: "400", fontSize: "18px" }}>2</span>
              </div>
              <p style={{ fontSize: "22px" }}>Lorem Ipsum Set 1</p>
              <div className="font-poppins ">
                <span style={{ fontWeight: "700", fontSize: "18px" }}>
                  Price $
                </span>{" "}
                <span style={{ fontWeight: "400", fontSize: "18px" }}>150</span>
              </div>

              <div>
                {activeIndex === index ? (
                  <IoIosArrowDropupCircle style={{ fontSize: "25px" }} />
                ) : (
                  <IoIosArrowDropdownCircle style={{ fontSize: "25px" }} />
                )}
              </div>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ${
              activeIndex === index ? "max-h-100" : "max-h-0"
            }`}
          >
            {predefined ? (
              <div className="flex justify-between pr-4 pt-4">
                <div className="flex pl-4 w-1/4 justify-center items-center">
                  <div className="flex justify-center items-center w-full bg-lightSky text-purpleText cursor-pointer rounded p-1 pt-0 pb-0 h-10 px-2">
                    <Link href="/placed-orders/item-selection">
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
                      className="text-removeItemText w-full flex justify-center items-center font-inter cursor-pointer"
                      style={{ fontWeight: "600", fontSize: "13px" }}
                    >
                      Remove Item
                    </div>
                  </div>
                </div>

                <div className="inline-flex pl-2 pr-2 justify-center items-center bg-lightSky text-purpleText cursor-pointer rounded">
                  <Image
                    src={"/scan-barcode.svg"}
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
            ) : (
              <div className="flex justify-end pr-4 pt-4">
                <div className="inline-flex p-2 pt-2 pb-2 justify-center items-center bg-lightSky text-purpleText cursor-pointer rounded">
                  <Image
                    src={"/scan-barcode.svg"}
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

            <div className="p-4">
              <SelectOrdersTable />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
