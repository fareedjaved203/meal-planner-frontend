import RootLayout from "../layout";
import CompleteOrdersTable from "../../components/orders/CompleteOrdersTable";
import Image from "next/image";

const PlacedOrders = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold p-4 mt-4">Orders Placed</div>
            <div className="bg-indigo-100 pl-4 pr-4 flex justify-center items-center rounded-md mt-4 sm:mt-0">
              <p className="text-indigo-700">Select Date </p>
              <span className="p-2 pr-0">
                <Image
                  src="/svg-date.png"
                  width={25}
                  height={25}
                  alt="logo icon"
                />
              </span>
            </div>
          </div>
          <CompleteOrdersTable />
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrders;
