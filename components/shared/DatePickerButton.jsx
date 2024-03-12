"use client";
import React from "react";
import Image from "next/image";
import { DatePicker } from "antd";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const DatePickerButton = () => {
  return (
    <>
      <DatePicker onChange={onChange} />
    </>
  );
};

export default DatePickerButton;
