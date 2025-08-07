"use client";
import { ArrowUpDown, Plus, Search } from "lucide-react";
import { useState } from "react";
import anomaliesData from "../../../data/anomaliesData";
import FilterDropdown from "../../ui/filterdropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandableTable() {
  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (id) => {
    setOpenRow(openRow === id ? null : id);
  };

  // Function for colored badges
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
        <div className="anomalies-header flex justify-between">
          <h2>Anomalies</h2>
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 w-60"
              />
            </div>

            {/* Filter Button */}
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
              <TableHeader className="bg-gray= hover:bg-transparent">
                <TableRow className="">
                  <TableHead className="w-[40px]"></TableHead>
                  <TableHead className="font-semibold flex items-center gap-1">
                    Timestamp
                    <ArrowUpDown className="h-4 w-4 text-gray-400" />
                  </TableHead>

                  <TableHead className="font-semibold">
                    <div className="flex items-center  gap-1.5 whitespace-nowrap">
                      Component
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold ">
                    <div className="flex items-center  gap-1.5 whitespace-nowrap">
                      Score
                      <ArrowUpDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold ">
                    <div className="flex items-center  gap-1.5 whitespace-nowrap">
                      Urgency
                      <ArrowUpDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold">
                    <div className="flex items-center  gap-1.5 whitespace-nowrap">
                      Messages
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {anomaliesData.map((record) => (
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
                      <TableCell className="py-4">{record.timestamp}</TableCell>
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
                      <TableRow className="bg-muted/20">
                        <TableCell></TableCell>
                        <TableCell
                          colSpan={5}
                          className="text-sm text-muted-foreground"
                        >
                          {record.details}
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
