import { useState } from "react";
import { BarChart2, Search, Code } from "lucide-react";

const tabs = [
  { id: "analytics", label: "Analytics", icon: BarChart2 },
  { id: "rootCause", label: "Root Cause Analysis", icon: Search },
  { id: "code", label: "Code Analysis", icon: Code },
];

export default function Tabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("analytics");

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (onTabChange) onTabChange(id);
  };

  return (
    <div className="w-full">
      {/* Tabs Row */}
      <div className="flex border-b border-gray-300">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleTabClick(id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border-b-2
              ${
                activeTab === id
                  ? "border-[#2563eb] text-[#2563eb]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
