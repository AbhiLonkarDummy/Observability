"use client";

import GaugeComponent from "react-gauge-component";
import { TrendingUp } from "lucide-react";

export default function GaugeCard({ value, total = 100 }) {
  let level = "";
  let levelColor = "";

  if (value <= 33) {
    level = "Critical";
    levelColor = "text-red-600";
  } else if (value <= 66) {
    level = "Warning";
    levelColor = "text-yellow-600";
  } else {
    level = "Healthy";
    levelColor = "text-green-600";
  }
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Health Score</h2>
          <p className="text-sm text-gray-500">Based on current performance</p>
        </div>
      </div>

      {/* Gauge Chart */}

      <div className="flex flex-col items-center gap-4">
        <div className="guage-container flex flex-col gap-0 items-center">
          <GaugeComponent
            value={value}
            type="semicircle" // ✅ semicircle gauge
            labels={{
              tickLabels: {
                type: "outer",
                ticks: [
                  { value: 0, text: "0%" },
                  { value: 33, text: "33%" },
                  { value: 66, text: "66%" },
                  { value: 100, text: "100%" },
                ],
                defaultTickValueConfig: {
                  style: {
                    fontSize: "12px",
                    fontWeight: "600",
                    fill: "#6b7280", // gray-500
                  },
                },
              },
              valueLabel: {
                hide: true,
                //   style: {
                //     fontSize: "28px",
                //     fontWeight: "700",
                //     fill: "#111827", // gray-900
                //   },
                //   formatTextValue: (val) => `${val}%`,
              },
            }}
            arc={{
              subArcs: [
                { limit: 33, color: "#ef4444" }, // red
                { limit: 66, color: "#facc15" }, // yellow
                { limit: 100, color: "#22c55e" }, // green
              ],
              padding: 0,
              width: 0.35,
              cornerRadius: 0,
            }}
            pointer={{
              color: "#374151",
              length: 0.75,
              width: 8,
              animationDelay: 0,
              elastic: false,
              animationDuration: 1500,
              animationEase: "easeInOutCubic",
            }}
          />
          <div className="text-2xl font-bold ">{value}%</div>
        </div>

        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3"
              style={{ backgroundColor: "#ef4444" }}
            ></div>
            <span className="font-medium text-gray-700">Critical (0–33%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3"
              style={{ backgroundColor: "#facc15" }}
            ></div>
            <span className="font-medium text-gray-700">Warning (34–66%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3"
              style={{ backgroundColor: "#22c55e" }}
            ></div>
            <span className="font-medium text-gray-700">Healthy (67–100%)</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex mt-2 flex-col items-center text-sm text-muted">
        <div className="flex flex-col items-center text-sm">
          <h2 className={`font-bold uppercase ${levelColor}`}>
            Healthscore Level: {level}
          </h2>
          <div className="text-gray-600">Live health score monitoring</div>
        </div>
      </div>
    </div>
  );
}
