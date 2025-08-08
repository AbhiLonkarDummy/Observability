import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsData } from "../../data/tabsData";
import RootCauseAnalysis from "../../panels/rootcauseanalysis/rootcauseanalysis";
import CodeAnalysis from "../../panels/codeanalysis/codeanalysis";
import Dashboard from "../../panels/dashboard/dashboard";
export default function TabsIconDemo() {
  return (
    <div className="mb-8">
      <Tabs defaultValue={tabsData[0].value} className="w-full ">
        <TabsList className="p-1 bg-blue-50">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-2.5 sm:px-3 transition-all duration-200 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
            >
              <p className="flex items-center gap-1 text-[13px] [&>svg]:h-4 [&>svg]:w-4">
                {tab.icon} {tab.name}
              </p>
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
