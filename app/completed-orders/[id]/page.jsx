import getSingleOrder from "@/lib/getSingleOrder";
import CompleteOrderDetails from "../../../components/orders/CompleteOrderDetails";
import BackButton from "../../../components/shared/BackButton";
import RootLayout from "../../layout";

const CompletedOrderId = async (props) => {
  const params = props.params;
  const data = await getSingleOrder(params.id);
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton />
        <CompleteOrderDetails singleOrder={data} />
      </>
    </RootLayout>
  );
};

export default CompletedOrderId;
