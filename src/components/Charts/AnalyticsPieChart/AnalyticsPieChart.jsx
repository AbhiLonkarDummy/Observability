"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Cell, Tooltip } from "recharts";

export default function AnalyticsPieChart({ low, medium, high }) {
  const chartData = [
    {
      name: "Low",
      value: low,
      fill: "#22c55e", // soft mint green
      textColor: "#FFFFFF", // dark emerald
    },
    {
      name: "Medium",
      value: medium,
      fill: "#facc15", // soft warm yellow
      textColor: "#FFFFFF", // deep amber
    },
    {
      name: "High",
      value: high,
      fill: "#ef4444", // soft coral red
      textColor: "#FFFFFF", // deep red
    },
  ];

  const totalErrors = low + medium + high;

  // ✅ Custom label renderer (show value inside slice)
  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const slice = chartData[index];
    if (!slice || slice.value === 0 || percent === 0) return null;

    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill={slice.textColor}
        textAnchor="middle"
        dominantBaseline="central"
        fontWeight="600"
        fontSize="18"
      >
        {slice.value}
      </text>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Alerts Distribution</h2>
          <p className="text-sm text-gray-500">Based on current severity</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold muted-2">Total Errors</p>
          <p className="text-2xl font-bold muted-1">{totalErrors}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="flex flex-col items-center gap-4">
        <PieChart width={220} height={220}>
          <Tooltip />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius="100%"
            label={renderCustomLabel}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>

        {/* ✅ Legends */}
        <div className="flex gap-6 text-sm">
          {chartData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.fill }}
              ></div>
              <span className="font-medium text-gray-700">
                {item.name} ({item.value})
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center text-sm text-gray-600">
        <div className="flex items-center gap-2 font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div>Showing live alert distribution</div>
      </div>
    </div>
  );
}
