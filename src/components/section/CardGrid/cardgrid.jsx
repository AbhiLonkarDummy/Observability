import { cardsData } from "../../../data/cardsData";
import HealthStatusCard from "../../HealthStatusCard/HealthStatusCard";
import './cardgrid.css'

export default function HealthCardGrid() {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-1 pb-10">
      {cardsData.map((card) => (
        <HealthStatusCard key={card.id} card={card} />
      ))}
    </div>
  );
}
