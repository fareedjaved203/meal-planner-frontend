import RootLayout from "../../layout";
import SelectOrdersTable from "../../../components/selectItems/SelectOrdersTable";
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
          <div
            className="font-bold ml-4 mr-4 font-mulish"
            style={{ fontWeight: "900" }}
          >
            Back
          </div>
          <div className="flex items-center w-full pr-4">
            <hr className="flex-grow pr-4 mr-4 w-3/4" />
            <Link href="/placed-orders">
              <div className="flex justify-center items-center w-44 bg-indigo-100 text-indigo-700 font-semibold border-indigo-700 cursor-pointer rounded p-1 pt-0 pb-0 h-14 px-2">
                <div
                  className="text-purpleText w-full flex justify-center items-center font-inter"
                  style={{ fontSize: "17px", paddingvertical: "9px" }}
                >
                  Apply
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1 font-mulish">
          <div className="flex justify-between items-center m-4">
            <div
              className="pb-1 mr-4 font-mulish"
              style={{ fontSize: "28px", fontWeight: "900" }}
            >
              Select Items
            </div>
            <div className="pl-4 flex justify-center items-center rounded-md mt-4 sm:mt-0">
              <div
                className="flex items-center bg-removeItem text-removeItemText p-4 pt-2 pb-2 rounded mr-4 font-inter"
                style={{ fontSize: "12.35px", fontWeight: 600 }}
              >
                Reset
              </div>
              <DatePickerButton />
            </div>
          </div>
          <div className="m-4">
            <SelectOrdersTable />
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrders;
