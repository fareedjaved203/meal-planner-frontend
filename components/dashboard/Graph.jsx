"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
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
import { getOrdersApi } from "@/api/orders/ordersApi";
import { groupBy, sumBy } from "lodash";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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

const Graph = ({ orderData, completedOrders }) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = () => {
      const data = completedOrders;
      data.orders.forEach((order) => {
        let date = new Date(order.createdAt);
        order.createdAt = date.toISOString().split("T")[0];
      });
      setOrders(data.orders);
    };
    getOrders();
  }, []);

  const dailyData = useMemo(() => {
    let daily = dayNames.map((day) => ({ name: day, uv: 0 }));

    Object.entries(groupBy(orders, "createdAt")).forEach(([date, orders]) => {
      let dayName = dayNames[new Date(date).getDay()];
      let dayData = daily.find((d) => d.name === dayName);
      if (dayData) {
        dayData.uv = sumBy(orders, (order) => parseFloat(order.price));
      }
    });

    return daily;
  }, [orders]);

  const monthlyData = useMemo(() => {
    let monthly = monthNames.map((month) => ({ name: month, uv: 0 }));

    Object.entries(
      groupBy(orders, (order) => new Date(order.createdAt).getMonth())
    ).forEach(([month, orders]) => {
      let monthName = monthNames[month];
      let monthData = monthly.find((m) => m.name === monthName);
      if (monthData) {
        monthData.uv = sumBy(orders, (order) => parseFloat(order.price));
      }
    });

    return monthly;
  }, [orders]);

  const yearlyData = useMemo(() => {
    return Object.entries(
      groupBy(orders, (order) => new Date(order.createdAt).getFullYear())
    ).map(([year, orders]) => ({
      name: year,
      uv: sumBy(orders, (order) => parseFloat(order.price)),
    }));
  }, [orders]);

  useEffect(() => {
    setData(monthlyData);
  }, [monthlyData]);

  const handleTabChange = useCallback(
    (key) => {
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
    },
    [dailyData, monthlyData, yearlyData]
  );

  const maxUV = Math.max(...data.map((item) => item.uv));

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
          <Tabs defaultActiveKey="2" onChange={handleTabChange}>
            <TabPane tab="Daily" key="1"></TabPane>
            <TabPane tab="Monthly" key="2"></TabPane>
            <TabPane tab="Yearly" key="3"></TabPane>
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
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              type="number"
              domain={[0, maxUV]}
              axisLine={false}
              tickFormatter={(tick) => {
                if (tick === 0) return "0";
                if (tick < 1000) return tick && tick?.toString();
                return `${Math.floor(tick / 1000)}k`;
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
