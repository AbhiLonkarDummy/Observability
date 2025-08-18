"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnomalyAreaChart({ data }) {
  // ✅ fallback dummy data
  const totalErrors = 80;
  const chartData = data || [
    { time: "00:00", high: 20, medium: 40, low: 60 },
    { time: "00:30", high: 18, medium: 42, low: 65 },
    { time: "01:00", high: 25, medium: 38, low: 55 },
    { time: "01:30", high: 22, medium: 35, low: 58 },
    { time: "02:00", high: 28, medium: 30, low: 50 },
    { time: "02:30", high: 30, medium: 28, low: 48 },
    { time: "03:00", high: 32, medium: 26, low: 45 },
    { time: "03:30", high: 35, medium: 25, low: 42 },
    { time: "04:00", high: 38, medium: 20, low: 40 },
    { time: "04:30", high: 40, medium: 22, low: 38 },
    { time: "05:00", high: 42, medium: 25, low: 35 },
    { time: "05:30", high: 45, medium: 20, low: 30 },
    { time: "06:00", high: 38, medium: 30, low: 45 },
    { time: "06:30", high: 35, medium: 28, low: 50 },
    { time: "07:00", high: 32, medium: 25, low: 52 },
    { time: "07:30", high: 28, medium: 30, low: 55 },
    { time: "08:00", high: 25, medium: 35, low: 55 },
    { time: "08:30", high: 22, medium: 38, low: 60 },
    { time: "09:00", high: 20, medium: 42, low: 62 },
    { time: "09:30", high: 18, medium: 40, low: 65 },
    { time: "10:00", high: 25, medium: 35, low: 55 },
    { time: "11:00", high: 30, medium: 30, low: 50 },
    { time: "12:00", high: 40, medium: 20, low: 30 },
    { time: "13:00", high: 42, medium: 25, low: 33 },
    { time: "14:00", high: 38, medium: 30, low: 40 },
    { time: "15:00", high: 35, medium: 32, low: 45 },
    { time: "16:00", high: 30, medium: 35, low: 50 },
    { time: "17:00", high: 28, medium: 38, low: 55 },
    { time: "18:00", high: 25, medium: 40, low: 60 },
    { time: "19:00", high: 22, medium: 38, low: 65 },
    { time: "20:00", high: 45, medium: 20, low: 25 },
    { time: "20:30", high: 42, medium: 22, low: 30 },
    { time: "21:00", high: 38, medium: 28, low: 35 },
    { time: "21:30", high: 32, medium: 30, low: 40 },
    { time: "22:00", high: 28, medium: 32, low: 45 },
    { time: "22:30", high: 25, medium: 35, low: 50 },
    { time: "23:00", high: 22, medium: 38, low: 55 },
    { time: "23:30", high: 20, medium: 40, low: 58 },
    { time: "23:59", high: 18, medium: 42, low: 60 },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-8">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Alerts Distribution</h2>
          <p className="text-sm text-gray-500">Based on current severity</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-gray-500">Total Errors</p>
          <p className="text-2xl font-bold text-gray-800">80</p>
        </div>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
          >
            <defs>
              {/* 🔴 Red Gradient (High) */}
              <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>

              {/* 🟡 Yellow Gradient (Medium) */}
              <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#facc15" stopOpacity={0.1} />
              </linearGradient>

              {/* 🟢 Green Gradient (Low) */}
              <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />

            {/* ⏱️ X Axis with Label */}
            <XAxis
              dataKey="time"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              label={{
                value: "Time",
                position: "bottom", // ✅ place outside instead of inside
                offset: 10, // ✅ spacing between ticks and label
                style: { fontSize: 16, fill: "#374151", fontWeight: 600 },
              }}
            />

            {/* 📊 Y Axis with Label */}
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              label={{
                value: "Error Count",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fontSize: 16, fill: "#374151", fontWeight: 600 },
              }}
            />

            <Tooltip />

            {/* Stacked Areas */}
            <Area
              type="monotone"
              dataKey="low"
              stackId="1"
              stroke="#22c55e"
              fill="url(#colorLow)"
            />
            <Area
              type="monotone"
              dataKey="medium"
              stackId="1"
              stroke="#facc15"
              fill="url(#colorMedium)"
            />
            <Area
              type="monotone"
              dataKey="high"
              stackId="1"
              stroke="#ef4444"
              fill="url(#colorHigh)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
