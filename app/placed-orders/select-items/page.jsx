import RootLayout from "../../layout";
import CompleteOrdersTable from "../../../components/orders/CompleteOrdersTable";
import { IoIosArrowRoundBack } from "react-icons/io";
import DatePickerButton from "../../../components/shared/DatePickerButton";
import Link from "next/link";

const PlacedOrders = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="flex items-center justify-start w-full pl-4 mt-4 font-mulish">
          <div>
            <IoIosArrowRoundBack className="text-3xl" />
          </div>
          <div className="font-bold ml-4 mr-4">Back</div>
          <div className="flex items-center w-full pr-4">
            <hr className="flex-grow pr-4 mr-4 w-3/4" />
            <div className="flex justify-center items-center w-40 bg-indigo-200 text-indigo-700 font-semibold border-indigo-700 cursor-pointer rounded p-1 pt-0 pb-0 h-10 px-2">
              <div className="text-purpleText w-full flex justify-center items-center">
                Apply
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1 font-mulish">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold p-4 mt-4">Select Items</div>
            <div className="pl-4 pr-4 flex justify-center items-center rounded-md mt-4 sm:mt-0">
              <div className="flex items-center bg-removeItem text-removeItemText p-4 pt-1 pb-1 mr-4">
                Reset
              </div>
              <DatePickerButton />
            </div>
          </div>
          <CompleteOrdersTable />
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrders;
