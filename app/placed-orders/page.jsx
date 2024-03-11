import RootLayout from "../layout";
import CompleteOrdersTable from "../../components/orders/completeOrdersTable";

const PlacedOrders = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <CompleteOrdersTable />
      </>
    </RootLayout>
  );
};

export default PlacedOrders;
