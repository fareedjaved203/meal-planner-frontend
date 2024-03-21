import Image from "next/image";

const Statistics = () => {
  return (
    <>
      <div
        className="pb-1 font-mulish"
        style={{ fontSize: "28px", fontWeight: "900" }}
      >
        Statistics
      </div>
      <div className="flex flex-col">
        <div className="bg-gray-100 rounded-lg flex flex-row items-center m-1 rounded justify-start p-2 pl-0 pr-0">
          <Image
            src="/Frame 44.svg"
            width={70}
            height={70}
            alt="logo icon"
            className="mt-1"
          />
          <div className="flex flex-col">
            <div className="text-md leading-4 tracking-tighter text-gray-600">
              Top Sold Item
            </div>
            <div
              className="text-lg leading-6 tracking-wider"
              style={{ fontWeight: 400 }}
            >
              Black T Shirt
            </div>
          </div>
        </div>
        <div className="bg-green-200 rounded-lg flex flex-col sm:flex-row m-1 rounded justify-start items-center p-2 pl-0 pr-0">
          <Image
            src="/Frame 44 (1).svg"
            width={70}
            height={70}
            alt="logo icon"
            className="mt-1"
          />
          <div className="flex flex-col">
            <div className="text-md leading-4 tracking-tighter text-gray-600">
              Average Selling Price
            </div>
            <div
              className="text-lg leading-6 tracking-wider"
              style={{ fontWeight: 400 }}
            >
              $35
            </div>
          </div>
        </div>
        <div className="bg-orange-100 rounded-lg flex flex-col sm:flex-row m-1 rounded justify-start items-center p-2 pl-0 pr-0">
          <Image
            src="/Frame 44 (2).svg"
            width={70}
            height={70}
            alt="logo icon"
            className="mt-1"
          />
          <div className="flex flex-col">
            <div className="text-md leading-4 tracking-tighter text-gray-600">
              Completion Rate
            </div>
            <div
              className="text-lg leading-6 tracking-wider"
              style={{ fontWeight: 400 }}
            >
              90%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
