import Image from "next/image";

const DatePickerButton = () => {
  return (
    <>
      <div className="flex bg-indigo-100 justify-center items-center p-4 pt-1 pb-1 rounded">
        <p className="text-purpleText">Select Date </p>
        <span>
          <Image src="/svg-date.png" width={25} height={25} alt="logo icon" />
        </span>
      </div>{" "}
    </>
  );
};

export default DatePickerButton;
