"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { onDate } from "../../store/slices/dateSlice";

const DatePickerButton = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const buttonRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);

    const dateObject = date && !isNaN(new Date(date)) ? new Date(date) : null;
    const formattedDate = dateObject
      ? `${dateObject.getFullYear()}-${String(
          dateObject.getMonth() + 1
        ).padStart(2, "0")}-${String(dateObject.getDate()).padStart(2, "0")}`
      : "Select Date";

    dispatch(onDate(formattedDate));
  };

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleReset = () => {
    setSelectedDate(null);
    dispatch(onDate(""));
  };

  const buttonPosition = buttonRef.current
    ? buttonRef.current.getBoundingClientRect()
    : { left: 0, bottom: 0 };

  const calendarTopPosition = buttonPosition.bottom + 40;

  const dateObject =
    selectedDate && !isNaN(new Date(selectedDate))
      ? new Date(selectedDate)
      : null;
  const formattedDate = dateObject
    ? `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(dateObject.getDate()).padStart(2, "0")}`
    : "Select Date";

  return (
    <div style={{ position: "relative" }} className="flex">
      <div>
        {selectedDate && (
          <div
            onClick={handleReset}
            className="flex items-center bg-removeItem text-removeItemText p-4 pt-2 pb-2 rounded mr-4 font-inter cursor-pointer"
            style={{ fontSize: "12.35px", fontWeight: 600 }}
          >
            Reset
          </div>
        )}
      </div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <div
          className="flex justify-center items-center p-4 py-2 rounded font-mulish"
          onClick={handleButtonClick}
          style={{ backgroundColor: "#E4E3FF" }}
        >
          <div
            className="text-purpleText font-inter cursor-pointer"
            style={{ fontSize: "12.35px", fontWeight: 600 }}
          >
            {formattedDate}
          </div>
          <span className="ml-2">
            <Image
              src="/Frame.svg"
              width={18}
              height={18}
              alt="logo icon"
              priority={false}
            />
          </span>
        </div>
        {showDatePicker && (
          <div
            style={{
              position: "absolute",
              zIndex: 9999,
              right: "0",
              top: buttonPosition.bottom,
              top: `${calendarTopPosition}px`,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              borderRadius: "5px",
            }}
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
    </div>
  );
};

export default DatePickerButton;
