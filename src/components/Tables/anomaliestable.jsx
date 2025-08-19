"use client";
import { ArrowUpDown, Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import anomaliesData from "../../data/anomaliesData";
import AnomaliesRecordDetail from "../ui/anomalies-record-details";
import FilterDropdown from "../ui/filterdropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AnomaliesTable() {
  const [openRow, setOpenRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(anomaliesData.length / itemsPerPage);

  const toggleRow = (id) => {
    setOpenRow(openRow === id ? null : id);
  };

  const getBadgeClasses = (type, value) => {
    if (type === "score") {
      if (value >= 80)
        return "bg-[var(--low-alert-bg)] text-[var(--low-alert-text)]";
      if (value >= 50)
        return "bg-[var(--med-alert-bg)] text-[var(--med-alert-text)]";
      return "bg-[var(--high-alert-bg)] text-[var(--high-alert-text)]";
    }

    if (type === "urgency") {
      if (value === "Low")
        return "bg-[var(--low-alert-bg)] text-[var(--low-alert-text)]";
      if (value === "Medium")
        return "bg-[var(--med-alert-bg)] text-[var(--med-alert-text)]";
      return "bg-[var(--high-alert-bg)] text-[var(--high-alert-text)]";
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="anomalies-header flex justify-between items-center">
          <h2 className="text-xl font-semibold">Anomalies</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 w-60"
              />
            </div>
            <FilterDropdown
              options={[
                { label: "Component", value: "component" },
                { label: "Score", value: "score" },
                { label: "Urgency", value: "urgency" },
              ]}
            />
          </div>
        </div>

        <div className="anomalies-table">
          <div className="w-full border rounded-lg ">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]"></TableHead>
                  <TableHead className="font-semibold flex items-center gap-1">
                    Timestamp
                    <ArrowUpDown className="h-4 w-4 text-gray-400" />
                  </TableHead>
                  <TableHead className="font-semibold">
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      Component
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold">
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      Score
                      <ArrowUpDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold">
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      Urgency
                      <ArrowUpDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold">
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      Messages
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {anomaliesData
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .map((record) => (
                    <>
                      <TableRow
                        key={record.id}
                        className={`cursor-pointer hover:bg-muted/40 ${
                          openRow === record.id ? "border-b-0" : ""
                        }`}
                        onClick={() => toggleRow(record.id)}
                      >
                        <TableCell className="text-center">
                          {openRow === record.id ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </TableCell>
                        <TableCell className="py-4">
                          {record.timestamp}
                        </TableCell>
                        <TableCell>{record.component}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-sm text-sm font-medium ${getBadgeClasses(
                              "score",
                              record.score
                            )}`}
                          >
                            {record.score}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-sm text-sm font-medium ${getBadgeClasses(
                              "urgency",
                              record.urgency
                            )}`}
                          >
                            {record.urgency}
                          </span>
                        </TableCell>
                        <TableCell>{record.message}</TableCell>
                      </TableRow>
                      {openRow === record.id && (
                        <TableRow>
                          <TableCell colSpan={6} className="p-0 border-0">
                            <div className="w-full table-fixed">
                              <AnomaliesRecordDetail record={record} />
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  ))}
              </TableBody>
            </Table>

            {/* Pagination controls */}
          </div>
          <div className="flex justify-end items-center gap-2 mt-4 px-4 pb-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="cursor-pointer px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="cursor-pointer px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
