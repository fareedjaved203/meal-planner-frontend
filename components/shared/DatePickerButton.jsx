import Image from "next/image";

const DatePickerButton = () => {
  return (
    <>
      <div className="flex bg-indigo-100 justify-center items-center p-4 pt-1 pb-1 rounded font-mulish">
        <p
          className="text-purpleText font-inter"
          style={{ fontSize: "12.35px", fontWeight: 600 }}
        >
          Select Date{" "}
        </p>
        <span className="ml-2">
          <Image src="/Frame.svg" width={22} height={22} alt="logo icon" />
        </span>
      </div>{" "}
    </>
  );
};

export default DatePickerButton;
