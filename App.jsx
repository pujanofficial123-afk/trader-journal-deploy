import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { date: "2025-07-01", pnl: 500 },
  { date: "2025-07-02", pnl: -200 },
  { date: "2025-07-03", pnl: 1000 },
  { date: "2025-07-04", pnl: 700 },
  { date: "2025-07-05", pnl: -300 }
];

export default function App() {
  return (
    <div className="p-4 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Trade Journal</h1>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pnl" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
