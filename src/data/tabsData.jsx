import Dashboard from "../panels/dashboard/dashboard";
import CodeAnalysis from "../panels/codeanalysis/codeanalysis";
import RootCauseAnalysis from "../panels/rootcauseanalysis/rootcauseanalysis";
import { SearchCheck, LayoutDashboard, CodeXml } from "lucide-react";
export const tabsData = [
  {
    name: "Dashboard",
    value: "dashboard",
    icon: <LayoutDashboard />,
    count: 9,
    component: <Dashboard />,
  },
  {
    name: "RCA",
    value: "rca",
    icon: <SearchCheck />,
    count: 3,
    component: <RootCauseAnalysis />,
  },
  {
    name: "Code",
    value: "code",
    icon: <CodeXml />,
    component: <CodeAnalysis />,
  },
];
