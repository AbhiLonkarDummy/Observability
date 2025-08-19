// components/ui/rca-record-details.js
import React from "react";

export default function RcaRecordDetail({ record }) {
  const getScoreColors = (score) => {
    if (score >= 80) {
      return { bg: "#e6f4fa", text: "#0369a1" };
    } else if (score >= 50) {
      return { bg: "#fff4e5", text: "#b45309" };
    } else {
      return { bg: "#fee2e2", text: "#b91c1c" };
    }
  };

  const getSeverityColors = (severity) => {
    switch (severity?.toLowerCase()) {
      case "high":
      case "critical":
        return { bg: "#fee2e2", text: "#b91c1c" };
      case "medium":
        return { bg: "#fff4e5", text: "#b45309" };
      case "low":
        return { bg: "#e6f4fa", text: "#0369a1" };
      default:
        return { bg: "#f3f4f6", text: "#6b7280" };
    }
  };

  const scoreColors = getScoreColors(record.score);
  const severityColors = getSeverityColors(record.severity);

  return (
    <div className="w-full overflow-hidden">
      <div className="p-4 bg-white ">
        {/* Header Section */}
        <div className="flex justify-between items-start gap-3 mb-4 pb-3 border-b border-gray-200">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-800 mb-1 break-words">
              {record.title}
            </h3>
            <p className="text-sm text-gray-600 break-words">
              {record.description}
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <span
              className="px-2 py-1 rounded-sm text-sm font-medium"
              style={{
                backgroundColor: scoreColors.bg,
                color: scoreColors.text,
              }}
            >
              Score: {record.score}/100
            </span>
            <span
              className="px-2 py-1 rounded-sm text-sm font-medium"
              style={{
                backgroundColor: severityColors.bg,
                color: severityColors.text,
              }}
            >
              {record.severity}
            </span>
          </div>
        </div>

        {/* Root Cause Section */}
        <div className="mb-6">
          <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Root Cause
          </h4>
          <div className="pl-4 border-l-2 border-red-100 w-full overflow-hidden">
            <p className="text-sm text-gray-700 break-words whitespace-normal leading-relaxed">
              {record.rootCause}
            </p>
          </div>
        </div>

        {/* Affected Logs Section */}
        <div className="mb-6">
          <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Affected Logs
          </h4>
          <div className="space-y-2">
            {record.affectedLogs?.map((log, idx) => (
              <div
                key={idx}
                className="p-3 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors w-full overflow-hidden"
              >
                <div className="break-words">
                  <span className="font-mono text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded mr-2">
                    {log.timestamp}
                  </span>
                  <span className="text-sm text-gray-700 break-words whitespace-normal">
                    {log.message}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Solution Section */}
        <div className="mb-6">
          <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Recommended Solution
          </h4>
          <div className="pl-4 border-l-2 border-green-100 w-full overflow-hidden">
            <p className="text-sm text-gray-700 break-words whitespace-normal leading-relaxed">
              {record.recommendedSolution}
            </p>
          </div>
        </div>

        {/* Action Items Section */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Action Items
          </h4>
          <div className="space-y-2">
            {record.actionItems?.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <span className="text-sm text-gray-700">{item.title}</span>
                <div className="flex gap-2">
                  <span className="text-xs text-gray-500">{item.assignee}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
