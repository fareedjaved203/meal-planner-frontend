import RootLayout from "../../layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import Accordion from "../../../components/orders/Accordion";
import BackButton from "../../../components/shared/BackButton";
import getData from "@/lib/getData";

const PlacedOrderId = async() => {
  const data = await getData();
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton text="Order Details" />
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div
            className="p-4 font-mulish mt-2 mb-4"
            style={{ fontSize: "28px", fontWeight: "900" }}
          >
            Predefined Order Details
          </div>
          <div className="mr-4 pr-4 mb-4">
            <Accordion predefined={true}/>
          </div>
          <div
            className="p-4 font-mulish mt-2 mb-4"
            style={{ fontSize: "28px", fontWeight: "900" }}
          >
            Custom Order Details
          </div>
          <div className="mr-4 pr-4 mb-4">
            <Accordion orders={data}/>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrderId;
