/** @format */
"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar
} from "recharts";

type Props = {};

const initialData = [
  {
    name: "Jan",
    total: 3000
  },
  {
    name: "Feb",
    total: 4500
  },
  {
    name: "Mar",
    total: 5200
  },
  {
    name: "Apr",
    total: 5000
  },
  {
    name: "May",
    total: 6000
  },
  {
    name: "Jun",
    total: 4500
  },
  {
    name: "Jul",
    total: 2000
  },
  {
    name: "Aug",
    total: 2200
  },
  {
    name: "Sep",
    total: 1500
  },
  {
    name: "Oct",
    total: 5200
  },
  {
    name: "Nov",
    total: 1500
  },
  {
    name: "Dec",
    total: 4500
  }
];

export default function BarChart({}: Props) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Generate new random data only after the component mounts
    const newData = initialData.map(month => ({
      ...month,
      total: Math.floor(Math.random() * 5000) + 1000
    }));
    setData(newData);
  }, []);

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}