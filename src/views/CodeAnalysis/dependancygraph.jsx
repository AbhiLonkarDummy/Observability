import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const dependencyData = [
  "[app.js|js|System] --import--> [bootstrap.js|js|User]",
  "[bootstrap.js|js|User] --import--> [lodash|js|System]",
  "[bootstrap.js|js|User] --import--> [axios|js|System]",
  "[bootstrap.js|js|User] --import--> [pusher-js|js|System]",
  "[bootstrap.js|js|User] --import--> [laravel-echo|js|System]",
  "[app.js|js|System] --import--> [laravel-echo|js|System]",
  "[app.js|js|System] --import--> [pusher-js|js|System]",
  "[app.js|js|System] --import--> [util|js|System]",
  "[tailwind.config.js|js|System] --import--> [tailwindcss/defaultTheme|js|System]",
  "[tailwind.config.js|js|System] --import--> [@tailwindcss/ui|js|System]",
  "[webpack.mix.js|js|System] --import--> [laravel-mix|js|System]",

  "[components/Header.jsx|js|User] --import--> [react-icons|js|System]",
  "[components/Header.jsx|js|User] --import--> [utils/helpers.js|js|User]",
  "[components/Footer.jsx|js|User] --import--> [react-icons|js|System]",
  "[components/Dashboard.jsx|js|User] --import--> [charts/BarChart.js|js|User]",
  "[components/Dashboard.jsx|js|User] --import--> [charts/LineChart.js|js|User]",
  "[components/Dashboard.jsx|js|User] --import--> [utils/dataParser.js|js|User]",
  "[components/Sidebar.jsx|js|User] --import--> [utils/navigation.js|js|User]",
  "[pages/Home.jsx|js|User] --import--> [components/Header.jsx|js|User]",
  "[pages/Home.jsx|js|User] --import--> [components/Footer.jsx|js|User]",
  "[pages/Dashboard.jsx|js|User] --import--> [components/Dashboard.jsx|js|User]",
  "[pages/Dashboard.jsx|js|User] --import--> [api/fetchData.js|js|User]",
  "[utils/helpers.js|js|User] --import--> [lodash|js|System]",
  "[utils/dataParser.js|js|User] --import--> [moment|js|System]",
  "[api/fetchData.js|js|User] --import--> [axios|js|System]",
  "[api/fetchData.js|js|User] --import--> [utils/helpers.js|js|User]",
  "[charts/BarChart.js|js|User] --import--> [chart.js|js|System]",
  "[charts/LineChart.js|js|User] --import--> [chart.js|js|System]",
  "[auth/login.js|js|User] --import--> [api/fetchData.js|js|User]",
  "[auth/register.js|js|User] --import--> [api/fetchData.js|js|User]",
  "[middleware/authGuard.js|js|User] --import--> [utils/helpers.js|js|User]",
  "[tests/app.test.js|js|User] --import--> [jest|js|System]",
  "[tests/dashboard.test.js|js|User] --import--> [jest|js|System]",
  "[tests/dashboard.test.js|js|User] --import--> [utils/dataParser.js|js|User]",
  "[scripts/build.js|js|System] --import--> [webpack|js|System]",
  "[scripts/deploy.js|js|System] --import--> [shelljs|js|System]",
];

export default function DependencyGraph() {
  return (
    <div className="">
      <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-auto max-h-96 border">
        {dependencyData.map((line, index) => (
          <div key={index} className="py-0.5">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
