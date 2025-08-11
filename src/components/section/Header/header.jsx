import "./header.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import FilterDropdown from "../../ui/filterdropdown";
export default function Header() {
  return (
    <div className="flex mt-2 justify-between items-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-md text-sm 
                 placeholder-gray-500 text-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40 
                 w-60"
          />
        </div>

        {/* Filter Button */}
        <FilterDropdown
          className="bg-white border border-gray-300 rounded-md text-sm shadow-sm 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          options={[
            { label: "Team name", value: "team" },
            { label: "App name", value: "app" },
            { label: "Errors", value: "errors" },
            { label: "Last updated", value: "updated" },
          ]}
        />
      </div>
    </div>
    // <header className="w-full flex items-center justify-between py-4 mt-4 ">
    //   {/* Left: Dashboard Title */}
    //   <h1 className="text-lg font-semibold muted-2">Home</h1>

    //   {/* Right: Input + Buttons */}
    //   <div className="flex items-center gap-3">
    //     {/* Search Input */}
    //     <div className="relative">
    //       <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
    //       <input
    //         type="text"
    //         placeholder="Search..."
    //         className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 w-60"
    //       />
    //     </div>

    //     {/* Filter Button */}
    //     <FilterDropdown
    //       options={[
    //         { label: "Team name", value: "team" },
    //         { label: "App name", value: "app" },
    //         { label: "Health", value: "health" },
    //         { label: "Errors", value: "errors" },
    //         { label: "Last updated", value: "updated" },
    //       ]}
    //     />

    //     {/* Add Application Button */}
    //     <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition">
    //       <Plus className="h-4 w-4" />
    //       Add Application
    //     </button>
    //   </div>
    // </header>
  );
}
