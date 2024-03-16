import RootLayout from "../layout";
import ItemsTable from "../../components/items/ItemsTable";
import Image from "next/image";
import DatePickerButton from "../../components/shared/DatePickerButton";
import Link from "next/link";

const Items = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="flex justify-center items-center w-40 bg-lightSky font-semibold cursor-pointer rounded p-1 pt-0 pb-0 h-10 px-2 m-4">
          <Link href="/items/add-item">
            <div className="text-purpleText w-full flex justify-center items-center font-inter">
              Add Item
              <span className="ml-4">
                <Image
                  src={"/message-add.svg"}
                  width={20}
                  height={20}
                  alt="add-item"
                />
              </span>
            </div>
          </Link>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1 font-mulish">
          <div className="flex justify-between items-center pr-4">
            <div
              className="p-4 font-poppins"
              style={{ fontSize: "28px", fontWeight: "700" }}
            >
              Your Items
            </div>
            <div className="mt-4">
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

export default Items;
