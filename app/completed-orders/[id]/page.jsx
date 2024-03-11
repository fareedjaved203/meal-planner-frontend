import RootLayout from "../../layout";
import { IoIosArrowRoundBack } from "react-icons/io";

const CompletedOrderId = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="flex items-center justify-start w-full pl-4 mt-4">
          <div>
            <IoIosArrowRoundBack className="text-3xl" />
          </div>
          <div className="font-bold ml-4 mr-4">Back</div>
          <div className="flex-grow pr-4 mr-4">
            <hr />
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div className="text-2xl font-bold p-4 mt-4">
            Completed Order Details
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold pb-4">PID</div>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold pb-4">Date Completed</div>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold pb-4">Ordered By</div>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold pb-4">Quantity</div>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold pb-4">Type</div>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold pb-4">Price</div>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold pb-4">Status</div>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
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
