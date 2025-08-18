// RCARecordDetail.jsx
import React from "react";

export default function AnomaliesRecordDetail({ record }) {
  return (
    <div className="p-4 bg-white border rounded shadow mt-2">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-700">{record.title}</span>
        <span className="px-2 py-1 rounded-sm text-sm font-medium bg-yellow-100 text-yellow-800">
          Score: {record.score}/10
        </span>
      </div>
      <div className="mb-2">
        <strong>Root Cause:</strong>
        <p className="text-sm text-gray-600 mt-1">{record.rootCause}</p>
      </div>
      <div className="mb-2">
        <strong>Recommended Solution:</strong>
        <p className="text-sm text-gray-600 mt-1">
          {record.recommendedSolution}
        </p>
      </div>
      <div className="mb-2">
        <strong>Affected Logs:</strong>
        {record.affectedLogs.map((log, idx) => (
          <div
            key={idx}
            className="mt-1 p-2 bg-gray-50 rounded border text-sm text-gray-700"
          >
            <span className="font-medium">{log.timestamp}</span> – {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}
