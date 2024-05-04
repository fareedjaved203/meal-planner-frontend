import React from "react";
import Statistics from "./Statistics";
import Graph from "./Graph";
import getData from "@/lib/getData";

const GraphAndStats = async ({ data, completedOrders }) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-start font-mulish">
        <div className="col-span-3 bg-white rounded-lg">
          <Graph orderData={data} completedOrders={completedOrders} />
        </div>
        <div className="col-span-1 bg-white rounded-lg p-4">
          <Statistics data={data} completedOrders={completedOrders} />
        </div>
      </div>
    </>
  );
};

export default GraphAndStats;
