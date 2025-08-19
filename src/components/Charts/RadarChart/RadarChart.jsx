"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

const chartData = [
  { name: "Database", value: 82 },
  { name: "API Gateway", value: 67 },
  { name: "Auth", value: 74 },
  { name: "Cache", value: 58 },
  { name: "Storage", value: 91 },
  { name: "Network", value: 63 },
];

// ✅ Compact tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-md px-2 py-1 text-xs shadow-sm">
        <p className="font-semibold">{label}</p>
        <p>{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export function ChartRadarGridCircle() {
  const avgHealth = Math.round(
    chartData.reduce((acc, d) => acc + d.value, 0) / chartData.length
  );
  let level = "";
  let levelColor = "";
  if (avgHealth <= 33) {
    level = "Critical";
    levelColor = "text-red-600";
  } else if (avgHealth <= 66) {
    level = "Warning";
    levelColor = "text-yellow-600";
  } else {
    level = "Healthy";
    levelColor = "text-sky-600";
  }
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
      {/* Header */}
      <div className="text-left">
        <h2 className="text-lg font-semibold">Component Health Assessment</h2>
        <p className="text-sm text-gray-500">
          Health metrics across core infrastructure
        </p>
      </div>

      {/* Chart */}
      <div className="flex flex-col items-center mt-4">
        <RadarChart
          data={chartData}
          width={400} // ✅ increased size
          height={260} // ✅ increased size
          outerRadius="80%" // Increased radius
          margin={{ top: 0, right: 50, bottom: 0, left: 50 }} // Minimal  // ✅ padding for labels
        >
          <PolarGrid gridType="circle" />
          <PolarAngleAxis
            dataKey="name"
            tick={{ fontSize: 12, fontWeight: 600 }}
          />
          <Radar
            dataKey="value"
            stroke="#0EA5E9"
            fill="#0EA5E9"
            fillOpacity={0.6}
            dot={{ r: 3, fillOpacity: 1 }}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </div>

      {/* Footer */}
      {/* Footer */}
      <div className="flex flex-col items-center text-sm gap-1">
        <p className={`text-xl font-bold ${levelColor}`}>
          Avg. Health: {avgHealth}%
        </p>
        <div className="text-gray-600">Live health score monitoring</div>
      </div>
    </div>
  );
}
