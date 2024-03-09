import MonthDropDown from "./MonthDropDown";
import Image from "next/image";

const Graph = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between p-4">
        <div className="flex flex-col sm:flex-row">
          <div className="text-2xl font-bold pb-1 mr-4">Earnings</div>
          <MonthDropDown />
        </div>
        <div className="bg-gray-100 pl-4 pr-4 flex justify-center items-center rounded-md mt-4 sm:mt-0">
          <p className="text-gray-600">9 Dec 2022 - 7 Jan 2023 </p>
          <span className="p-2 pr-0">
            <Image src="/svg.png" width={20} height={20} alt="logo icon" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Graph;
