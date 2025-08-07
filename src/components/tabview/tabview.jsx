import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, LayoutDashboard, SearchCheck, Code2 } from "lucide-react";

const tabs = [
  {
    name: "Dashboard",
    value: "dashboard",
    content: "This is the dashboard tab",
    icon: <LayoutDashboard />,
  },
  {
    name: "Root Cause Analysis",
    value: "rca",
    content: "This is the root cause analysis tab",
    icon: <SearchCheck />,
  },
  {
    name: "Code Analysis",
    value: "code",
    content: "This is the code analysis tab",
    icon: <Code2 />,
  },
];

export default function TabsIconDemo() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);

  return (
    <div className="max-w-xs w-full space-y-4">
      <Tabs
        defaultValue={tabs[0].value}
        className="w-full"
        onValueChange={(val) => {
          const selected = tabs.find((tab) => tab.value === val);
          if (selected) setSelectedTab(selected.name);
        }}
      >
        <TabsList className="p-1 w-full flex justify-between">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-2.5 sm:px-3 flex-1"
            >
              <code className="flex items-center justify-center gap-1 text-[13px] [&>svg]:h-4 [&>svg]:w-4">
                {tab.icon} {tab.name}
              </code>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="h-10 flex items-center justify-between border gap-2 rounded-md pl-3 pr-1.5">
              <code className="text-[13px]">{tab.content}</code>
              <Button size="icon" variant="secondary" className="h-7 w-7">
                <Copy className="!h-3.5 !w-3.5" />
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Selected label below */}
      <div className="text-center text-sm text-muted-foreground font-medium">
        Selected: {selectedTab}
      </div>
    </div>
  );
}
