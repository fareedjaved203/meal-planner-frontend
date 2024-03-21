"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerButton = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const buttonRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const buttonPosition = buttonRef.current
    ? buttonRef.current.getBoundingClientRect()
    : { left: 0, bottom: 0 };

  const calendarTopPosition = buttonPosition.bottom + 40;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        className="flex justify-center items-center p-4 py-2 rounded-md font-mulish"
        onClick={handleButtonClick}
        style={{ backgroundColor: "#E4E3FF" }}
      >
        <p
          className="text-purpleText font-inter cursor-pointer"
          style={{ fontSize: "12.35px", fontWeight: 600 }}
        >
          Select Date
        </p>
        <span className="ml-2">
          <Image src="/Frame.svg" width={22} height={22} alt="logo icon" />
        </span>
      </div>
      {showDatePicker && (
        <div
          style={{
            position: "absolute",
            zIndex: 1000,
            right: "0",
            top: buttonPosition.bottom,
            top: `${calendarTopPosition}px`,
          }}
          className="custom-calendar"
        >
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            calendarClassName="custom-calendar"
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerButton;
