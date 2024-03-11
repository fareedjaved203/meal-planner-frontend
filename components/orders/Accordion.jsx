"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const data = [
  { content: "Content goes here..." },
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
            <div className="p-5 border-t border-gray-200">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
