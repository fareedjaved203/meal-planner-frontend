import getSingleOrder from "@/lib/getSingleOrder";
import CompleteOrderDetails from "../../../components/orders/CompleteOrderDetails";
import BackButton from "../../../components/shared/BackButton";
import RootLayout from "../../layout";
import action from "@/app/actions/action";

export const runtime = "edge";

const CompletedOrderId = async (props) => {
  const params = props.params;
  const data = await getSingleOrder(params.id);
  action("fetchOrderData");
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
