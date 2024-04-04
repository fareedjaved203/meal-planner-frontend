"use client";
import { useState } from "react";
import { Tabs } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
const { TabPane } = Tabs;

const CustomBar = (props) => {
  const borderRadius = 8;
  return (
    <Rectangle
      {...props}
      radius={[borderRadius, borderRadius, borderRadius, borderRadius]}
    />
  );
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dailyData = Array.from({ length: 7 }, (_, i) => ({
  name: dayNames[i],
  uv: Math.floor(Math.random() * 10000),
}));
const monthlyData = Array.from({ length: 12 }, (_, i) => ({
  name: monthNames[i],
  uv: Math.floor(Math.random() * 10000),
}));
const yearlyData = Array.from({ length: 5 }, (_, i) => ({
  name: 2019 + i,
  uv: Math.floor(Math.random() * 10000),
}));

const Graph = () => {
  const [data, setData] = useState(monthlyData);

  const handleTabChange = (key) => {
    switch (key) {
      case "1":
        setData(dailyData);
        break;
      case "2":
        setData(monthlyData);
        break;
      case "3":
        setData(yearlyData);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between p-4 font-mulish">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div
            className="pb-1 mr-4 font-mulish"
            style={{ fontSize: "28px", fontWeight: "900" }}
          >
            Earnings
          </div>
          {/* <MonthDropDown /> */}
          <Tabs defaultActiveKey="2" onChange={handleTabChange}>
            <TabPane tab="Daily" key="1">
              {/* The chart will automatically update when the data state changes */}
            </TabPane>
            <TabPane tab="Monthly" key="2">
              {/* The chart will automatically update when the data state changes */}
            </TabPane>
            <TabPane tab="Yearly" key="3">
              {/* The chart will automatically update when the data state changes */}
            </TabPane>
          </Tabs>
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
              domain={[0, 8000]}
              axisLine={false}
              tickFormatter={(tick) => {
                if (tick === 0) return "0";
                return `${Math.floor(tick / 1000) * 20}k`;
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
