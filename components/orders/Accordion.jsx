"use client";
import React, { useEffect, useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import SelectOrdersTable from "../selectItems/SelectOrdersTable";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import CustomOrderTable from "../selectItems/CustomOrderTable";
import { useParams } from "next/navigation";

function Accordion({ predefined = false, orders = [] }) {
  const params = useParams().id;
  const [activeIndex, setActiveIndex] = useState(null);
  const [customOrder, setCustomOrder] = useState([]);
  const [predefinedOrder, setPredefinedOrder] = useState([]);

  const toggleItem = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const data = orders.orders?.filter((order) => {
      return order.id == params;
    });

    if (data && data.length > 0) {
      const lineItems = data[0]?.line_items;
      console.log(lineItems);
      const withProperty = lineItems.filter(
        (item) => item?.properties.length > 0
      );
      const withoutProperty = lineItems.filter(
        (item) => item?.properties?.length == 0
      );
      if (predefined) {
        setPredefinedOrder(withoutProperty);
      } else {
        setCustomOrder(withProperty);
      }
      console.log(withoutProperty);
    }
  }, []);

  return (
    <div
      className="w-full rounded pl-4 pr-4 ml-4 font-poppins"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      {predefinedOrder?.map((item, index) => (
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
              <p style={{ fontSize: "22px" }}>{item?.name}</p>
              <div className="font-poppins ">
                <span style={{ fontWeight: "700", fontSize: "18px" }}>
                  Price $
                </span>
                <span style={{ fontWeight: "400", fontSize: "18px" }}>
                  {item?.price}
                </span>
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
                <div className="flex justify-center items-center w-full bg-removeItem cursor-pointer rounded p-1 pt-0 pb-0 h-10">
                  <div
                    className="text-removeItemText w-full flex justify-center items-center font-inter cursor-pointer w-full whitespace-nowrap"
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

            <div className="p-4">
              <SelectOrdersTable orders={orders?.orders} type="predefined" />
            </div>
          </div>
        </div>
      ))}

      {customOrder?.map((item, index) => (
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
                <span style={{ fontWeight: "400", fontSize: "18px" }}>1</span>
              </div>
              <p style={{ fontSize: "22px" }}>{item?.name}</p>
              <div className="font-poppins ">
                <span style={{ fontWeight: "700", fontSize: "18px" }}>
                  Price $
                </span>
                <span style={{ fontWeight: "400", fontSize: "18px" }}>
                  {item?.price}
                </span>
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
            {!predefined && (
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
              {!predefined && (
                <CustomOrderTable orders={orders?.orders} type="custom" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
