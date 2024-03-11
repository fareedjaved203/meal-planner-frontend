import RootLayout from "../../layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import Accordion from "../../../components/orders/Accordion";

const PlacedOrderId = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="flex items-center justify-start w-full pl-4 mt-4">
          <div>
            <IoIosArrowRoundBack className="text-3xl" />
          </div>
          <div className="font-bold ml-4 mr-4">Order Details</div>
          <div className="flex-grow pr-4 mr-4">
            <hr />
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div className="text-2xl font-bold p-4 mb-4 mt-4">
            Predefined Order Details
          </div>
          <div className="mr-4 pr-4 mb-4">
            <Accordion />
          </div>
          <div className="mr-4 pr-4 mb-4">
            <Accordion />
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div className="text-2xl font-bold p-4 mb-4 mt-4">
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
