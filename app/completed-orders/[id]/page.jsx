import CompleteOrderDetails from "../../../components/orders/CompleteOrderDetails";
import BackButton from "../../../components/shared/BackButton";
import RootLayout from "../../layout";

const CompletedOrderId = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton />
        <CompleteOrderDetails />
      </>
    </RootLayout>
  );
};

export default CompletedOrderId;
