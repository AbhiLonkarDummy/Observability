import { useParams } from "react-router-dom";
import { cardsData } from "../../data/cardsData";
import WidgetGrid from "../../components/section/Overview/overview";
import Anomalies from "../../components/section/Anomalies/anomalies";
export default function ObservabilityDetails() {
  const { id } = useParams();
  const card = cardsData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <div className="p-6">No data found for this service.</div>;
  }

  return (
    <>
      <WidgetGrid />
      <Anomalies />
    </>
  );
}
