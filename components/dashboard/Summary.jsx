import getData from "@/lib/getData";
import Image from "next/image";

const Summary = async ({ data, completedOrders }) => {
  const earnings = data.orders.reduce((order, item) => {
    return order + Number(item.total_line_items_price);
  }, 0);

  const earningsParts = earnings.toFixed(2).split(".");
  const wholePart = earningsParts[0];
  const decimalPart = earningsParts[1];

  const totalOrders = data?.orders?.length;

  const totalItems = data.orders.reduce((total, order) => {
    return total + order.line_items.length;
  }, 0);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="flex-1 w-full p-3 rounded-lg flex flex-col items-start bg-white">
          <div
            className="font-poppins text-summaryTextColor mb-1 pb-1"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#A1A0BD",
            }}
          >
            Total Earnings
          </div>
          <div
            className="text-2xl font-bold pb-2 mb-2 font-mulish"
            style={{ fontSize: "32px", fontWeight: 900 }}
          >
            ${wholePart}
            <span style={{ color: "#AFADFE" }}>.{decimalPart}</span>
          </div>
          <div>
            <Image
              src="/Frame 55.svg"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
          </div>
        </div>
        <div className="flex-1 w-full p-3 rounded-lg flex flex-col items-start bg-white">
          <div
            className="font-poppins text-summaryTextColor mb-1 pb-1"
            style={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Total Orders
          </div>
          <div
            className="text-2xl font-bold pb-2 font-mulish mb-2"
            style={{ fontSize: "32px", fontWeight: 900 }}
          >
            {totalOrders}
          </div>
          <div>
            <Image
              src="/Frame 56.svg"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
          </div>
        </div>
        <div className="flex-1 w-full p-3 rounded-lg flex flex-col items-start bg-white">
          <div
            className="font-poppins text-summaryTextColor mb-1 pb-1"
            style={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Total Items
          </div>
          <div
            className="text-2xl font-bold pb-2 font-mulish mb-2"
            style={{ fontSize: "32px", fontWeight: 900 }}
          >
            {totalItems}
          </div>
          <div>
            {" "}
            <Image
              src="/Frame 57.svg"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
          </div>
        </div>
        <div className="flex-1 w-full p-3 rounded-lg flex flex-col items-start bg-white ">
          <div
            className="font-poppins text-summaryTextColor mb-1 pb-1"
            style={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Completed Orders
          </div>
          <div
            className="text-2xl font-bold pb-2 font-mulish mb-2"
            style={{ fontSize: "32px", fontWeight: 900 }}
          >
            {completedOrders?.orders?.length}
          </div>
          <div>
            {" "}
            <Image
              src="/Frame 58.svg"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
