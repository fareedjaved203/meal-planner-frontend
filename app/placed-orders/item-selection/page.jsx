import RootLayout from "../../layout";
import SelectOrdersTable from "../../../components/selectItems/SelectOrdersTable";
import { IoIosArrowRoundBack } from "react-icons/io";
import DatePickerButton from "../../../components/shared/DatePickerButton";
import BackButton from "../../../components/shared/BackButton";
import Link from "next/link";
import ApplyItemButton from "@/components/orders/ApplyItemButton";
import getItems from "@/lib/getItems";
import action from "@/app/actions/action";

const PlacedOrders = async () => {
  const itemsData = await getItems();
  action("fetchItemsData");
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="flex items-center justify-start w-full pl-4 mt-4 font-mulish">
          <BackButton text={"Back"} />
          <div className="flex items-center w-full pr-4">
            <hr className="flex-grow pr-4 mr-4 w-3/4" />
            <ApplyItemButton />
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
              <DatePickerButton />
            </div>
          </div>
          <div className="m-4">
            <SelectOrdersTable itemsData={itemsData} />
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrders;
