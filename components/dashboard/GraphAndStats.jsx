import React from "react";
import Image from "next/image";

const GraphAndStats = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-4 text-start">
        <div className="col-span-3 bg-white rounded">
          <p>This div takes up 75% of the space.</p>
        </div>
        <div className="col-span-1 bg-white rounded p-4">
          <div className="text-2xl font-bold pb-1">Statistics</div>
          <div className="flex flex-col">
            <div className="bg-gray-300 flex m-1 ml-0 rounded justify-start items-center">
              <Image
                src="/Frame 44.png"
                width={60}
                height={60}
                alt="logo icon"
              />
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Top Sold Item</p>
                <p>Black T-Shirt</p>
              </div>
            </div>
            <div className="bg-green-300 flex m-1 ml-0 rounded justify-start items-center">
              <Image
                src="/Frame 44 (1).png"
                width={60}
                height={60}
                alt="logo icon"
              />
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Average Selling Price</p>
                <p>$ 35</p>
              </div>
            </div>
            <div className="bg-red-300 flex m-1 ml-0 rounded justify-start items-center">
              <Image
                src="/Frame 44 (2).png"
                width={60}
                height={60}
                alt="logo icon"
              />
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Completion Rate</p>
                <p>90%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphAndStats;
