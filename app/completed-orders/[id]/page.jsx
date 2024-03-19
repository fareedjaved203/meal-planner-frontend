import BackButton from "../../../components/shared/BackButton";
import RootLayout from "../../layout";
import { IoIosArrowRoundBack } from "react-icons/io";

const CompletedOrderId = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton />
        <div className="bg-white m-4 rounded p-4">
          <div
            className="p-4 font-mulish"
            style={{ fontSize: "28px", fontWeight: "900" }}
          >
            Completed Order Details
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full font-mulish">
            <div className="p-4">
              <div
                className="font-mulish pb-4"
                style={{ fontWeight: "900", margin: "1.5%" }}
              >
                PID
              </div>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
            <div className="p-4">
              <div
                className="font-mulish pb-4"
                style={{ fontWeight: "900", margin: "1.5%" }}
              >
                Date Completed
              </div>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold pb-4 mb-2">Ordered By</div>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold pb-4 mb-2">Quantity</div>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold pb-4 mb-2">Type</div>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold pb-4 mb-2">Price</div>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold pb-4 mb-2">Status</div>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default CompletedOrderId;
