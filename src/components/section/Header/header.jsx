import "./header.css";
import { Filter, Plus, Search } from "lucide-react";
import FilterDropdown from "../../ui/filterdropdown";
export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 mt-4 ">
      {/* Left: Dashboard Title */}
      <h1 className="text-lg font-semibold muted-2">Home</h1>

      {/* Right: Input + Buttons */}
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
            { label: "Team name", value: "team" },
            { label: "App name", value: "app" },
            { label: "Health", value: "health" },
            { label: "Errors", value: "errors" },
            { label: "Last updated", value: "updated" },
          ]}
        />

        {/* Add Application Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition">
          <Plus className="h-4 w-4" />
          Add Application
        </button>
      </div>
    </header>
  );
}
