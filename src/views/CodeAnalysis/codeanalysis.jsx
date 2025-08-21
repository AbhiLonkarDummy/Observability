import { useState } from "react";
import { FolderTree, Import, GitBranch, FileCode } from "lucide-react";
import DirectoryTree from "./directorytree";
import ImportAnalyis from "./importanalysis";
import DependencyGraph from "./dependancygraph";
import ModuleAnalysis from "./moduleanalysis";
export default function CodeAnalysisView() {
  // Tab config
  const analysisTabs = [
    { id: "directory", label: "Directory Structure", icon: FolderTree },
    { id: "imports", label: "Import Analysis", icon: Import },
    { id: "dependencies", label: "Dependency Graph", icon: GitBranch },
    { id: "modules", label: "Module Analysis", icon: FileCode },
  ];

  // State for active tab
  const [activeAnalysisTab, setActiveAnalysisTab] = useState("directory");

  return (
    <div className="bg-white mt-6 border border-gray-200 p-8 rounded-md flex flex-col gap-6 w-full">
      <h2 className="text-xl font-semibold">Code Analysis</h2>

      {/* Tabs Row */}
      <div className="flex border-b border-gray-300">
        {analysisTabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveAnalysisTab(id)}
            className={`flex items-center gap-2 cursor-pointer px-4 py-2 text-sm font-medium transition-colors border-b-2
              ${
                activeAnalysisTab === id
                  ? "border-[#2563eb] text-[#2563eb]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-1 text-gray-700 text-sm">
        {activeAnalysisTab === "directory" && (
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Directory Structure</h1>
            <DirectoryTree />
          </div>
        )}
        {activeAnalysisTab === "imports" && (
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Import Analysis</h1>
            <ImportAnalyis />
          </div>
        )}
        {activeAnalysisTab === "dependencies" && (
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Dependancy Graph</h1>
            <DependencyGraph />
          </div>
        )}
        {activeAnalysisTab === "modules" && (
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Module Analysis</h1>
            <ModuleAnalysis />
          </div>
        )}
      </div>
    </div>
  );
}
