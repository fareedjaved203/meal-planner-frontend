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
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2000 },
  { name: "Sep", uv: 2780 },
  { name: "Oct", uv: 1890 },
  { name: "Nov", uv: 2390 },
  { name: "Dec", uv: 3490 },
];

const CustomBar = (props) => {
  const borderRadius = 8;
  return <Rectangle {...props} radius={[borderRadius, borderRadius, 0, 0]} />;
};

const Graph = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between p-4 font-mulish">
        <div className="flex flex-col sm:flex-row">
          <div className="text-2xl font-bold pb-1 mr-4">Earnings</div>
          <MonthDropDown />
        </div>
        <div className="bg-graphDate pl-4 pr-4 flex justify-center items-center rounded-md mt-4 sm:mt-0">
          <p className="text-graphDateText">9 Dec 2022 - 7 Jan 2023 </p>
          <span className="p-2 pr-0">
            <Image src="/svg.png" width={20} height={20} alt="logo icon" />
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, "dataMax + 1000"]} />
            <Tooltip />
            <Legend />
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
