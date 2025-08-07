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
    <div className="widget-container border border-[#e4e4e4] rounded-md p-4 flex flex-col gap-4">
      <h2 className="">Quick Overview</h2>
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
    </div>
  );
}
