"use client";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ImportAnalysis() {
  const importAnalysisData = [
    // Existing entries
    {
      id: 1,
      filePath: "tailwind.config.js",
      import: "tailwindcss/defaultTheme",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 2,
      filePath: "tailwind.config.js",
      import: "@tailwindcss/ui",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 3,
      filePath: "webpack.mix.js",
      import: "laravel-mix",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 4,
      filePath: "webpack.mix.js",
      import: "postcss-import",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 5,
      filePath: "app.js",
      import: "bootstrap.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/bootstrap.js",
    },
    {
      id: 6,
      filePath: "app.js",
      import: "util.js",
      count: 2,
      type: "Local",
      userModulePath: "resources/js/utils/util.js",
    },
    {
      id: 7,
      filePath: "bootstrap.js",
      import: "axios",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 8,
      filePath: "bootstrap.js",
      import: "lodash",
      count: 1,
      type: "System",
      userModulePath: "",
    },

    // New mock entries
    {
      id: 9,
      filePath: "components/Button.js",
      import: "react",
      count: 3,
      type: "System",
      userModulePath: "",
    },
    {
      id: 10,
      filePath: "components/Button.js",
      import: "clsx",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 11,
      filePath: "components/Card.js",
      import: "prop-types",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 12,
      filePath: "components/Card.js",
      import: "./CardHeader.js",
      count: 2,
      type: "Local",
      userModulePath: "resources/js/components/CardHeader.js",
    },
    {
      id: 13,
      filePath: "components/Modal.js",
      import: "react-dom",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 14,
      filePath: "components/Modal.js",
      import: "./ModalFooter.js",
      count: 2,
      type: "Local",
      userModulePath: "resources/js/components/ModalFooter.js",
    },
    {
      id: 15,
      filePath: "hooks/useAuth.js",
      import: "react",
      count: 2,
      type: "System",
      userModulePath: "",
    },
    {
      id: 16,
      filePath: "hooks/useAuth.js",
      import: "../utils/api.js",
      count: 3,
      type: "Local",
      userModulePath: "resources/js/utils/api.js",
    },
    {
      id: 17,
      filePath: "pages/Dashboard.js",
      import: "react-router-dom",
      count: 2,
      type: "System",
      userModulePath: "",
    },
    {
      id: 18,
      filePath: "pages/Dashboard.js",
      import: "../components/Chart.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/components/Chart.js",
    },
    {
      id: 19,
      filePath: "pages/Dashboard.js",
      import: "../hooks/useAuth.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/hooks/useAuth.js",
    },
    {
      id: 20,
      filePath: "utils/api.js",
      import: "axios",
      count: 4,
      type: "System",
      userModulePath: "",
    },
    {
      id: 21,
      filePath: "utils/api.js",
      import: "./logger.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/utils/logger.js",
    },
    {
      id: 22,
      filePath: "utils/logger.js",
      import: "dayjs",
      count: 2,
      type: "System",
      userModulePath: "",
    },
    {
      id: 23,
      filePath: "utils/logger.js",
      import: "chalk",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 24,
      filePath: "utils/logger.js",
      import: "./constants.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/utils/constants.js",
    },
    {
      id: 25,
      filePath: "utils/constants.js",
      import: "",
      count: 0,
      type: "Local",
      userModulePath: "resources/js/utils/constants.js",
    },
    {
      id: 26,
      filePath: "store/index.js",
      import: "@reduxjs/toolkit",
      count: 2,
      type: "System",
      userModulePath: "",
    },
    {
      id: 27,
      filePath: "store/index.js",
      import: "./slices/userSlice.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/store/slices/userSlice.js",
    },
    {
      id: 28,
      filePath: "store/slices/userSlice.js",
      import: "@reduxjs/toolkit",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 29,
      filePath: "store/slices/userSlice.js",
      import: "../utils/api.js",
      count: 2,
      type: "Local",
      userModulePath: "resources/js/utils/api.js",
    },
    {
      id: 30,
      filePath: "App.js",
      import: "react-router-dom",
      count: 3,
      type: "System",
      userModulePath: "",
    },
    {
      id: 31,
      filePath: "App.js",
      import: "./pages/Dashboard.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/pages/Dashboard.js",
    },
    {
      id: 32,
      filePath: "App.js",
      import: "./pages/Login.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/pages/Login.js",
    },
    {
      id: 33,
      filePath: "Login.js",
      import: "formik",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 34,
      filePath: "Login.js",
      import: "yup",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 35,
      filePath: "Login.js",
      import: "../utils/api.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/utils/api.js",
    },
    {
      id: 36,
      filePath: "Dashboard.js",
      import: "chart.js",
      count: 2,
      type: "System",
      userModulePath: "",
    },
    {
      id: 37,
      filePath: "Dashboard.js",
      import: "../components/ChartCard.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/components/ChartCard.js",
    },
    {
      id: 38,
      filePath: "Dashboard.js",
      import: "../hooks/useFetch.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/hooks/useFetch.js",
    },
    {
      id: 39,
      filePath: "hooks/useFetch.js",
      import: "react",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 40,
      filePath: "hooks/useFetch.js",
      import: "swr",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 41,
      filePath: "hooks/useFetch.js",
      import: "../utils/api.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/utils/api.js",
    },
    {
      id: 42,
      filePath: "utils/helpers.js",
      import: "lodash",
      count: 2,
      type: "System",
      userModulePath: "",
    },
    {
      id: 43,
      filePath: "utils/helpers.js",
      import: "uuid",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 44,
      filePath: "utils/helpers.js",
      import: "./constants.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/utils/constants.js",
    },
    {
      id: 45,
      filePath: "components/ChartCard.js",
      import: "react-chartjs-2",
      count: 2,
      type: "System",
      userModulePath: "",
    },
    {
      id: 46,
      filePath: "components/ChartCard.js",
      import: "../utils/helpers.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/utils/helpers.js",
    },
    {
      id: 47,
      filePath: "components/NavBar.js",
      import: "react-icons",
      count: 3,
      type: "System",
      userModulePath: "",
    },
    {
      id: 48,
      filePath: "components/NavBar.js",
      import: "./Logo.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/components/Logo.js",
    },
    {
      id: 49,
      filePath: "components/Footer.js",
      import: "dayjs",
      count: 1,
      type: "System",
      userModulePath: "",
    },
    {
      id: 50,
      filePath: "components/Footer.js",
      import: "../utils/helpers.js",
      count: 1,
      type: "Local",
      userModulePath: "resources/js/utils/helpers.js",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(importAnalysisData.length / itemsPerPage);

  return (
    <div className="flex flex-col gap-4">
      {/* Table */}
      <div className="w-full border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold flex items-center gap-1 pl-6">
                File Path
              </TableHead>
              <TableHead className="font-semibold">Import</TableHead>
              <TableHead className="font-semibold">Count</TableHead>
              <TableHead className="font-semibold">Type</TableHead>
              <TableHead className="font-semibold">User Module Path</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {importAnalysisData
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((record) => (
                <TableRow
                  key={record.id}
                  className="hover:bg-muted/40 cursor-pointer"
                >
                  <TableCell className="py-4 pl-6">{record.filePath}</TableCell>
                  <TableCell className="py-4">{record.import}</TableCell>
                  <TableCell className="py-4">{record.count}</TableCell>
                  <TableCell className="py-4">{record.type}</TableCell>
                  <TableCell className="py-4">
                    {record.userModulePath || "-"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
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
  );
}
