"use client";
import MonthDropDown from "./MonthDropDown";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 70000 },
  { name: "Feb", uv: 30000 },
  { name: "Mar", uv: 50000 },
  { name: "Apr", uv: 37800 },
  { name: "May", uv: 48900 },
  { name: "Jun", uv: 73900 },
  { name: "Jul", uv: 54900 },
  { name: "Aug", uv: 40000 },
  { name: "Sep", uv: 77800 },
  { name: "Oct", uv: 68900 },
  { name: "Nov", uv: 53900 },
  { name: "Dec", uv: 64900 },
];

const CustomBar = (props) => {
  const borderRadius = 8;
  return (
    <Rectangle
      {...props}
      radius={[borderRadius, borderRadius, borderRadius, borderRadius]}
    />
  );
};

const Graph = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between p-4 font-mulish">
        <div className="flex flex-col sm:flex-row">
          <div
            className="pb-1 mr-4 font-mulish"
            style={{ fontSize: "28px", fontWeight: "900" }}
          >
            Earnings
          </div>
          <MonthDropDown />
        </div>
        <div className="bg-graphDate pl-4 pr-4 flex justify-center items-center rounded-md mt-4 sm:mt-0">
          <p
            className="text-graphDateText font-inter"
            style={{ fontWeight: "600" }}
          >
            9 Dec 2022 - 7 Jan 2023{" "}
          </p>
          <span className="p-2 pr-0">
            <Image src="/svg.svg" width={25} height={25} alt="logo icon" />
          </span>
        </div>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "black" }}
              padding={{ left: 0, right: 0 }} // Add padding here
            />
            <YAxis
              type="number"
              domain={[0, 80000]}
              axisLine={false}
              tickFormatter={(tick) => {
                if (tick === 0) return "0";
                return `${Math.floor(tick / 10000) * 20}k`;
              }}
              tickLine={false}
              tick={{ fill: "black" }}
              padding={{ top: 10, bottom: 10 }} // And here
            />
            <Tooltip />
            <Bar
              dataKey="uv"
              fill="#4C49ED"
              barSize={12}
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Graph;
