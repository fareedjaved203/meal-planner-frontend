"use client"
import { useState } from 'react';
import Image from 'next/image';
import DatePicker from 'rsuite/DatePicker';
import 'rsuite/DatePicker/styles/index.css';

const DatePickerButton = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to toggle the DatePicker display
  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);

  return (
    <>
      <div className="flex bg-indigo-100 justify-center items-center p-4 pt-1 pb-1 rounded font-mulish">
        <p
          className="text-purpleText font-inter cursor-pointer"
          style={{ fontSize: "12.35px", fontWeight: 600 }}
          onClick={toggleDatePicker}
        >
          Select Date
        </p>
        <span className="ml-2">
          <Image src="/Frame.svg" width={22} height={22} alt="logo icon" />
        </span>
      </div>
      {showDatePicker && (
        <div style={{ position: 'absolute', zIndex: 1000 }}>
          <DatePicker onChange={() => setShowDatePicker(false)} />
        </div>
      )}
    </>
  );
};

export default DatePickerButton;
