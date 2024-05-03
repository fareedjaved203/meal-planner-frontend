import RootLayout from "../layout";
import PlacedOrdersTable from "../../components/orders/PlacedOrdersTable";
import DatePickerButton from "../../components/shared/DatePickerButton";
import getData from "../../lib/getData";
import getOrders from "@/lib/getOrders";

const PlacedOrders = async () => {
  const data = await getData();
  const completedOrders = await getOrders();
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="bg-white m-6 rounded-lg p-4 pt-1 font-mulish">
          <div className="flex justify-between items-center">
            <div
              className="p-4 mt-2 font-mulish"
              style={{ fontSize: "28px", fontWeight: "900" }}
            >
              Orders Placed
            </div>
            <div className="mt-4 mr-4">
              <DatePickerButton />
            </div>
          </div>
          <div className="p-4 pt-0">
            <PlacedOrdersTable data={data} completeOrders={completedOrders} />
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrders;
