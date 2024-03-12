import RootLayout from "../layout";
import CompleteOrdersTable from "../../components/orders/completeOrdersTable";
import Image from "next/image";

const PlacedOrders = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold p-4 mt-4">Orders Placed</div>
            <div>
              <Image
                src="/block.png"
                width={110}
                height={110}
                alt="logo icon"
              />
            </div>
          </div>
          <CompleteOrdersTable />
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrders;
