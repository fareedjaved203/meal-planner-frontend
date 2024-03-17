import RootLayout from "../layout";
import CompleteOrdersTable from "../../components/orders/CompleteOrdersTable";

const PlacedOrders = () => {
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
          </div>
          <div className="p-4 pt-0">
            <CompleteOrdersTable />
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrders;
