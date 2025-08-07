import "./HealthStatusCard.css";
import { Label } from "../ui/label";
import { Clock } from "lucide-react";
import HealthRing from "../ui/healthRing";
import { useNavigate } from "react-router-dom";

export default function HealthStatusCard({ card }) {
  // Extract tool name from the file path for display
  const navigate = useNavigate();
  const toolName =
    card.tool.replace("/", "").replace(".svg", "").charAt(0).toUpperCase() +
    card.tool.replace("/", "").replace(".svg", "").slice(1);

  return (
    <div
      onClick={() => navigate(`/${card.id}`)}
      className="card relative h-[360px] w-[360px] p-5 border rounded-lg mt-4 transition-all duration-500 ease-out
             hover:shadow-lg hover:-translate-y-1 hover:border-gray-300"
    >
      {/* Card Content */}
      <div className="flex flex-col gap-5">
        {/* Health Ring */}
        <div className="healthring flex justify-center">
          <HealthRing percentage={card.percentage} />
        </div>

        {/* Alert Labels */}
        <div className="flex gap-2">
          {card.alerts.map((alert) => (
            <Label
              key={`${card.id}-${alert.name}`}
              name={alert.name}
              icon={alert.icon}
              errCount={alert.errCount}
            />
          ))}
        </div>

        {/* Info */}
        <div className="health-info flex flex-col gap-1.5">
          <span className="card-label muted-2">{card.team_name}</span>
          <h2 className="card-heading">{card.app_name}</h2>
        </div>
      </div>

      {/* ✅ Fixed Footer Section */}
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
        {/* Time */}
        <div className="health-time muted-1 flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <div className="text-sm">{card.mins_ago} mins ago</div>
        </div>

        {/* Tool Pill */}
        <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
          <span className="text-sm font-medium text-gray-700">{toolName}</span>
        </div>
      </div>
    </div>
  );
}
