const moduleAnalysisData = [
  "Here is the module-wise analysis for the given dependency graph:",
  "",
  "Module: app.js",
  "Role: Main application entry point",
  "Dependencies: bootstrap.js, laravel-echo, pusher-js, util",
  "Suggestions for Improvement:",
  "1. Consider removing direct dependencies on laravel-echo and pusher-js and instead access them via bootstrap.js",
  "2. Add comments explaining the overall app structure and flow",
  "Detected Defects/Risks:",
  "1. No defects or risks detected",
  "",
  "Module: bootstrap.js",
  "Role: Application setup and initialization",
  "Dependencies: lodash, axios, pusher-js, laravel-echo",
  "Suggestions for Improvement:",
  "1. Optimize axios instance creation by reusing configurations.",
  "2. Ensure pusher key is stored securely and not exposed in code.",
  "Detected Defects/Risks:",
  "1. Potential issue with multiple axios instances increasing memory usage.",
  "2. Risk of leaking sensitive API keys if environment variables are not configured correctly.",
  "",
  "Module: tailwind.config.js",
  "Role: Tailwind CSS configuration for styling",
  "Dependencies: tailwindcss/defaultTheme, @tailwindcss/ui",
  "Suggestions for Improvement:",
  "1. Group similar utilities together for better readability.",
  "2. Remove unused theme extensions to reduce build size.",
  "Detected Defects/Risks:",
  "1. Slight risk of class conflicts due to multiple theme extensions.",
  "",
  "Module: webpack.mix.js",
  "Role: Asset bundling and compilation setup",
  "Dependencies: laravel-mix",
  "Suggestions for Improvement:",
  "1. Enable versioning in production for better cache management.",
  "2. Add source maps for easier debugging in development.",
  "Detected Defects/Risks:",
  "1. No defects detected, but review build performance for larger projects.",
  "",
  "Module: util.js",
  "Role: Utility functions shared across modules",
  "Dependencies: None",
  "Suggestions for Improvement:",
  "1. Add JSDoc comments to all utility functions for better documentation.",
  "2. Write unit tests to ensure utility functions remain reliable.",
  "Detected Defects/Risks:",
  "1. Low risk of unnoticed function changes affecting multiple components.",
  "",
  "Module: pusher-js",
  "Role: Real-time communication client",
  "Dependencies: External library",
  "Suggestions for Improvement:",
  "1. Ensure the latest stable version is being used to avoid deprecated methods.",
  "2. Monitor for security vulnerabilities periodically.",
  "Detected Defects/Risks:",
  "1. Possible reconnection issues during network instability.",
];

const ModuleAnalysis = () => {
  return (
    <div className="">
      <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-auto max-h-96 border">
        {moduleAnalysisData.map((line, index) => (
          <div key={index} className="py-0.5">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleAnalysis;
