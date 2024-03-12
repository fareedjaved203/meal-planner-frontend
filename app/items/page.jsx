import RootLayout from "../layout";
import ItemsTable from "../../components/items/ItemsTable";
import Image from "next/image";

const Items = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold p-4 mt-4">Your Items</div>
            <div>
              <Image
                src="/block.png"
                width={110}
                height={110}
                alt="logo icon"
              />
            </div>
          </div>
          <ItemsTable />
        </div>
      </>
    </RootLayout>
  );
};

export default Items;
