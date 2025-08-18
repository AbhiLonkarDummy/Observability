import Widget from "../../ui/widget";
import { useParams } from "react-router-dom";
import { allWidgetData } from "../../../data/allWidgetData";

export default function WidgetGrid() {
  const { id } = useParams();
  const numericId = parseInt(id);

  // Find the widget object with matching ID
  const matchedData = allWidgetData.find((entry) => entry.id === numericId);
  const widgetData = matchedData?.widgets || [];

  return (
      <div className="grid grid-cols-4 gap-4">
        {widgetData.map((widget, index) => (
          <Widget
            key={index}
            title={widget.title}
            value={widget.value}
            percentage={widget.percentage}
            isPositive={widget.isPositive}
            icon={widget.icon}
          />
        ))}
      </div>
  );
}
