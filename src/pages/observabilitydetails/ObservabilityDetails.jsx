import { useParams } from "react-router-dom";
import { useState } from "react";
import { cardsData } from "../../data/cardsData";
import GeneralInfo from "../../components/section/GeneralInfo/generalinfo";
import MainLayout from "../../components/Layout/layout";
// Need to implement dynamic breadcrumb logic
import { DynamicBreadcrumb } from "../../components/ui/dynamic-breadcrumb";

// Tabs view import starts from here
import Tabs from "../../components/Tabs/Tabs";
import AnalyticsView from "../../views/Analytics/analytics";
import RootCauseView from "../../views/RootCause/rootcause";
import AnomaliesView from "../../views/Anomalies/Anomalies";
import CodeAnalysisView from "../../views/CodeAnalysis/codeanalysis";

export default function ObservabilityDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("analytics");

  const renderTabsContent = () => {
    switch (activeTab) {
      case "analytics":
        return <AnalyticsView />;
      case "rootCause":
        return <RootCauseView />;
      case "code":
        return <CodeAnalysisView />;
      case "anomalies":
        return <AnomaliesView />;
      default:
        return null;
    }
  };

  const card = cardsData.find((item) => item.id === parseInt(id));
  if (!card) {
    return <div className="p-6">No data found for this service.</div>;
  }

  return (
    <>
      <MainLayout>
        <div className="flex flex-col gap-4">
          <GeneralInfo data={card} />
          <div className="tabs-container flex flex-col">
            <Tabs onTabChange={setActiveTab} />
            <div className="">{renderTabsContent()}</div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
