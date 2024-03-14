import RootLayout from "../layout";
import CompleteOrdersTable from "../../components/orders/CompleteOrdersTable";
import DatePickerButton from "../../components/shared/DatePickerButton";
import Image from "next/image";

const CompletedOrders = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold p-4 mt-4">Completed Orders</div>
            <DatePickerButton />
          </div>
          <CompleteOrdersTable />
        </div>
      </>
    </RootLayout>
  );
};

export default CompletedOrders;
