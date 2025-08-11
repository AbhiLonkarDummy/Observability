import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsData } from "../../data/tabsData";
import RootCauseAnalysis from "../../panels/rootcauseanalysis/rootcauseanalysis";
import CodeAnalysis from "../../panels/codeanalysis/codeanalysis";
import Dashboard from "../../panels/dashboard/dashboard";
export default function TabsIconDemo() {
  return (
    <div className="mb-8 relative">
      <Tabs defaultValue={tabsData[0].value} className="!gap-0 flex flex-col">
        <TabsList className="w-full p-0 bg-background justify-start border-b rounded-none">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-none bg-background h-full data-[state=active]:shadow-none border border-transparent border-b-border data-[state=active]:border-border data-[state=active]:border-b-background -mb-[2px] rounded-t-md"
            >
              <p>{tab.name}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="dashboard">
          <Dashboard />
        </TabsContent>

        <TabsContent value="rca">
          <RootCauseAnalysis />
        </TabsContent>

        <TabsContent value="code">
          <CodeAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
}
