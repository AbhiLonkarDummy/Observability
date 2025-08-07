import WidgetGrid from "../../components/section/Overview/overview";
import Anomalies from "../../components/section/Anomalies/anomalies";
export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <WidgetGrid />
        <Anomalies />
      </div>
    </>
  );
}
