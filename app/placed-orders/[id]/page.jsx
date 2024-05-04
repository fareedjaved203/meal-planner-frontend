import RootLayout from "../../layout";
import Accordion from "../../../components/orders/Accordion";
import BackButton from "../../../components/shared/BackButton";
import getData from "@/lib/getData";
import ShowCustomTitle from "@/components/orders/ShowCustomTitle";
import ShowPredefinedTitle from "@/components/orders/ShowPredefinedtitle";
import action from "@/app/actions/action";

export const runtime = "edge";

const PlacedOrderId = async () => {
  const data = await getData();
  action("fetchShopifyData");
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton text="Order Details" />
        <div className="bg-white m-4 rounded p-4 pt-1">
          <ShowPredefinedTitle />
          <div className="mr-4 pr-4 mb-4">
            <Accordion orders={data} predefined={true} />
          </div>
          <ShowCustomTitle />
          <div className="mr-4 pr-4 mb-4">
            <Accordion orders={data} predefined={false} />
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrderId;
