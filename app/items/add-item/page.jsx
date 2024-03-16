import RootLayout from "../../layout";
import ItemsTable from "../../../components/items/ItemsTable";
import Image from "next/image";
import DatePickerButton from "../../../components/shared/DatePickerButton";

const AddItems = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="flex justify-center items-center w-40 bg-lightSky font-semibold cursor-pointer rounded p-1 pt-0 pb-0 h-10 px-2 m-4">
          <div className="text-purpleText w-full flex justify-center items-center">
            Add Item{" "}
            <span className="ml-4">
              <Image
                src={"/message-add.svg"}
                width={20}
                height={20}
                alt="add-item"
              />
            </span>
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1 font-mulish">
          <div className="flex justify-between items-center pr-4">
            <div
              className="p-4 font-poppins"
              style={{ fontSize: "28px", fontWeight: "700" }}
            >
              Your Items
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
          <div className="p-4 pt-0">
            <ItemsTable />
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default AddItems;
