import { Clock } from "lucide-react";
export default function GeneralInfo({ data }) {
  if (!data) return null;
  console.log(data);
  return (
    <div className="w-full pt-8 pb-4">
      <div className="health-info flex flex-col gap-1.5">
        <h2 className="card-heading">{data.app_name}</h2>
        <span className="card-label muted-2">{data.team_name}</span>

      </div>
      <div className="flex items-center mt-2 gap-4">
        {/* Time */}
        <div className="health-time muted-1 flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <div className="text-sm">{data.mins_ago} mins ago</div>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
          <span className="text-sm font-medium text-gray-700">{data.tool}</span>
        </div>
        {/* Tool Pill */}
      </div>
    </div>
  );
}
