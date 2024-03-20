"use client";
import React, { useState } from "react";

const MonthDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("monthly");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSelect = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center font-inter w-full shadow-sm bg-lightSky rounded text-sm font-semibold text-purpleText pr-2 pl-2 pt-1 pb-1 mt-2 month-dropdown"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedMonth}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right z-10 absolute right-0 mt-2 sm:w-64 md:w-56 lg:w-48 xl:w-56 2xl:w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto max-h-60">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {months.map((month) => (
              <a
                key={month}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleSelect(month)}
              >
                {month}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthDropDown;
