import RootLayout from "../../layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import Accordion from "../../../components/orders/Accordion";

const PlacedOrderId = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="flex items-center justify-start w-full pl-4 mt-4 font-mulish">
          <div>
            <IoIosArrowRoundBack className="text-3xl" />
          </div>
          <div className="font-bold ml-4 mr-4 font-poppins">Order Details</div>
          <div className="flex-grow pr-4 mr-4">
            <hr />
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div
            className="p-4 font-poppins mt-2 mb-4"
            style={{ fontSize: "28px", fontWeight: "700" }}
          >
            Predefined Order Details
          </div>
          <div className="mr-4 pr-4 mb-4">
            <Accordion predefined={true} />
          </div>
          <div className="mr-4 pr-4 mb-4">
            <Accordion predefined={true} />
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1 font-mulish">
          <div
            className="p-4 font-poppins mt-2 mb-4"
            style={{ fontSize: "28px", fontWeight: "700" }}
          >
            Custom Order Details
          </div>
          <div className="mr-4 pr-4 mb-4">
            <Accordion />
          </div>
          <div className="mr-4 pr-4 mb-4">
            <Accordion />
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default PlacedOrderId;
