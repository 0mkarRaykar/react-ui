import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const RevenueLineChart = ({ data, height = 300 }) => {
  const chartData = data.map((d) => ({
    ...d,
    monthLabel: `${d.month} 25`,
    revenue: d.revenue,
    profit: d.profit,
  }));

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="monthLabel"
            interval={0}
            angle={-30}
            textAnchor="end"
          />
          <YAxis tickFormatter={(val) => `${val}M`} />
          <Tooltip formatter={(value, name) => [`${value}M`, name]} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#1E90FF"
            strokeWidth={2}
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#32CD32"
            strokeWidth={2}
            name="Profit"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
