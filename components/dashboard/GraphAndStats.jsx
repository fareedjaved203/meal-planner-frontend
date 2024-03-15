import React from "react";
import Statistics from "./Statistics";
import Graph from "./Graph";

const GraphAndStats = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-start font-mulish">
        <div className="col-span-3 bg-white rounded">
          <Graph />
        </div>
        <div className="col-span-1 bg-white rounded p-4">
          <Statistics />
        </div>
      </div>
    </>
  );
};

export default GraphAndStats;
