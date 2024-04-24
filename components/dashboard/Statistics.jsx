import Image from "next/image";

const Statistics = ({ data, completedOrders }) => {
  const totalPrice = data.orders
    .reduce((total, order) => {
      const price = Number(order.total_line_items_price);
      return isNaN(price) ? total : total + price;
    }, 0)
    .toFixed(2);

  const averageSellingPrice = (totalPrice / data.orders.length).toFixed(2);

  const completionRate = (
    (completedOrders.orders.length / data.orders.length) *
    100
  ).toFixed(1);

  let values = data.orders.flatMap((order) =>
    order.line_items.flatMap((item) =>
      item.properties ? item?.properties[0]?.value : []
    )
  );

  let valueCounts = values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  let mostOccurringName = Object.keys(valueCounts).reduce((a, b) =>
    valueCounts[a] > valueCounts[b] ? a : b
  );

  return (
    <>
      <div
        className="pb-1 font-mulish"
        style={{ fontSize: "28px", fontWeight: "900" }}
      >
        Statistics
      </div>
      <div className="flex flex-col">
        <div className="bg-gray-100 rounded-lg flex flex-row items-center m-1 rounded justify-start p-2">
          <Image
            src="/Frame 44.svg"
            width={70}
            height={70}
            alt="logo icon"
            className="mt-1"
            priority={false}
          />
          <div className="flex flex-col w-[65%]">
            <div className="text-md text-gray-600">Top Sold Item</div>
            <div className="text-lg break-words" style={{ fontWeight: 400 }}>
              {mostOccurringName}
            </div>
          </div>
        </div>
        <div className="bg-green-200 rounded-lg flex flex-col sm:flex-row m-1 rounded justify-start items-center p-2">
          <Image
            src="/Frame 44 (1).svg"
            width={70}
            height={70}
            alt="logo icon"
            className="mt-1"
            priority={false}
          />
          <div className="flex flex-col">
            <div className="text-md text-gray-600">Average Selling Price</div>
            <div
              className="text-lg leading-6 tracking-wider"
              style={{ fontWeight: 400 }}
            >
              ${averageSellingPrice}
            </div>
          </div>
        </div>
        <div className="bg-orange-100 rounded-lg flex flex-col sm:flex-row m-1 rounded justify-start items-center p-2">
          <Image
            src="/Frame 44 (2).svg"
            width={70}
            height={70}
            alt="logo icon"
            className="mt-1"
            priority={false}
          />
          <div className="flex flex-col">
            <div className="text-md text-gray-600">Completion Rate</div>
            <div
              className="text-lg leading-6 tracking-wider"
              style={{ fontWeight: 400 }}
            >
              {completionRate}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
