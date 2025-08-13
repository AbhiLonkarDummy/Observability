import "./HealthStatusCard.css";
import { Label } from "../Label/label";
import { Clock } from "lucide-react";
import HealthRing from "../ui/healthRing";
import { useNavigate } from "react-router-dom";
import LearnMore from "../ui/learn-more";
// Need to put this to make the navigatable -
export default function HealthStatusCard({ card }) {
  // Extract tool name from the file path for display
  const navigate = useNavigate();
  const toolName =
    card.tool.replace("/", "").replace(".svg", "").charAt(0).toUpperCase() +
    card.tool.replace("/", "").replace(".svg", "").slice(1);

  return (
    <div
      onClick={() => navigate(`/details/${card.id}`)}
      className="card relative h-[268px] p-2.5 border rounded-lg mt-4 transition-all duration-500 ease-out
             hover:shadow-lg hover:-translate-y-1 hover:border-gray-300"
    >
      <div className="w-full absolute top-2 left-2 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-gray-700">{toolName}</span>
        </div>
        {/* Need to implement the favoriting functionality over here */}
        {/* <FavoriteStar /> */}
      </div>
      {/* Card Content */}
      <div className="flex flex-col gap-3 mt-4">
        {/* Health Ring */}
        <div className="healthring flex justify-center">
          <HealthRing percentage={card.percentage} />
        </div>

        {/* Alert Labels */}
        <div className="flex gap-1">
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
        <div className="health-info flex flex-col gap-1">
          <span className="card-label muted-2">{card.team_name}</span>
          <h2 className="card-heading line-clamp-2">{card.app_name}</h2>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-2">
        {/* Time */}
        <div className="health-time muted-1 flex items-center gap-2">
          <Clock className="h-3 w-3" />
          <div className="text-xs">{card.mins_ago} mins ago</div>
        </div>
      </div>
    </div>
  );
}
