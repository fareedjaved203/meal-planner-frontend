import RootLayout from "../layout";
import CompleteOrdersTable from "../../components/orders/CompleteOrdersTable";
import DatePickerButton from "../../components/shared/DatePickerButton";
import getOrders from "@/lib/getOrders";

const CompletedOrders = async () => {
  const completedOrders = await getOrders();
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="bg-white m-4 rounded-lg p-4 pt-1 font-mulish">
          <div className="flex justify-between items-center pr-4">
            <div
              className="text-2xl font-bold p-4 mt-4 font-mulish"
              style={{ fontWeight: 900 }}
            >
              Completed Orders
            </div>
            <div className="mt-4">
              <DatePickerButton />
            </div>
          </div>
          <div className="p-4 pt-0">
            <CompleteOrdersTable
              order="completed-orders"
              completedOrders={completedOrders}
            />
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default CompletedOrders;
