import WidgetGrid from "../WidgetGrid/widgetgrid";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
export default function GeneralInfo({ data }) {
  if (!data) return null;
  return (
    <div className="bg-white border border-gray-200 p-8 rounded-md flex flex-col gap-4">
      {/* Top Row: App info + Tool pill */}
      <div className="flex justify-between items-start">
        {/* Left: App + Team */}
        <div className="flex flex-col gap-1">
          <h1 className="">{data.app_name}</h1>
          <span className="text-md font-medium text-[var(--text-muted-2)]">
            {data.team_name}
          </span>
        </div>

        {/* Right: Tool Pill */}
        <div className="flex flex-row flex-wrap items-center gap-2">
          {(data.tools ?? []).map((tool, index) => (
            <div
              key={`${data.id}-tool-${index}`}
              className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-3 py-1"
            >
              <span className="text-md font-medium text-gray-700">{tool}</span>
            </div>
          ))}
        </div>
      </div>
      <Separator className="my-2" />
      {/* Second Section: Quick Overview + Add Widget */}
      <div className="flex flex-col gap-6">
        {/* Title Row */}
        <div className="flex justify-between items-center">
          <h2 className="">Quick Overview</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--brand-primary-color)] text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition cursor-pointer">
            <Plus className="h-4 w-4" />
            Add Widget
          </button>
        </div>

        {/* Widget Grid */}
        <WidgetGrid />
      </div>
    </div>
  );
}
