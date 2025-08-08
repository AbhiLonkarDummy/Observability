import { useParams } from "react-router-dom";
import { cardsData } from "../../data/cardsData";
import TabView from "../../components/tabview/tabview";
import GeneralInfo from "../../components/section/GeneralInfo/generalinfo";
export default function ObservabilityDetails() {
  const { id } = useParams();
  const card = cardsData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <div className="p-6">No data found for this service.</div>;
  }

  return (
    <>
      <div className="flex flex-col ">
        <GeneralInfo data={card} />
        <TabView className="mt-4" />
      </div>
    </>
  );
}
