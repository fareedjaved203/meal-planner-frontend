import Image from "next/image";

const Summary = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="flex-1 w-full p-3 rounded flex flex-col items-start bg-white">
          <p className="text-gray-400 font-bold text-sm pb-1">Total Earnings</p>
          <div className="text-2xl font-bold pb-1">$ 1000</div>
          <div>
            <Image
              src="/Frame 55.png"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
            />
          </div>
        </div>
        <div className="flex-1 w-full p-3 rounded flex flex-col items-start bg-white">
          <p className="text-gray-400 font-bold text-sm pb-1">Total Orders</p>
          <div className="text-2xl font-bold pb-1">540</div>
          <div>
            <Image
              src="/Frame 56.png"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
            />
          </div>
        </div>
        <div className="flex-1 w-full p-3 rounded flex flex-col items-start bg-white">
          <p className="text-gray-400 font-bold text-sm pb-1">Total Items</p>
          <div className="text-2xl font-bold pb-1">180</div>
          <div>
            {" "}
            <Image
              src="/Frame 57.png"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
            />
          </div>
        </div>
        <div className="flex-1 w-full p-3 rounded flex flex-col items-start bg-white ">
          <p className="text-gray-400 font-bold text-sm pb-1">
            Completed Orders
          </p>
          <div className="text-2xl font-bold pb-1">140</div>
          <div>
            {" "}
            <Image
              src="/Frame 58.png"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
