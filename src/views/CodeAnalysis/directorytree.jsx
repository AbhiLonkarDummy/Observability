import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FolderOpen,
  FileCode,
  FileJson,
  FileText,
  FileSpreadsheet,
  FileType,
  Star,
} from "lucide-react";

// Function to return a color-coded icon for files
const getFileIcon = (name) => {
  const lowerName = name.toLowerCase();
  const ext = lowerName.split(".").pop();

  // Special icon for favicon
  if (lowerName === "favicon.ico") {
    return <Star className="text-yellow-400" size={18} />;
  }

  switch (ext) {
    case "js":
    case "jsx":
      return <FileCode className="text-green-500" size={18} />;
    case "json":
      return <FileJson className="text-orange-500" size={18} />;
    case "html":
    case "css":
      return <FileText className="text-blue-400" size={18} />;
    case "md":
      return <FileText className="text-purple-500" size={18} />;
    case "test":
    case "test.js":
      return <FileSpreadsheet className="text-pink-400" size={18} />;
    default:
      return <FileType className="text-gray-500" size={18} />;
  }
};

const TreeNode = ({ node }) => {
  const hasChildren = node.children && node.children.length > 0;
  const [isOpen, setIsOpen] = useState(hasChildren);

  return (
    <div className="ml-4">
      <div
        className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-1 rounded transition-colors"
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {/* Folder or file */}
        {hasChildren ? (
          isOpen ? (
            <FolderOpen className="text-yellow-500" size={18} />
          ) : (
            <Folder className="text-yellow-500" size={18} />
          )
        ) : (
          getFileIcon(node.name)
        )}
        <span className="text-sm">{node.name}</span>
      </div>

      {/* Animated children */}
      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-4 border-l border-gray-300 pl-2"
          >
            {node.children.map((child, idx) => (
              <TreeNode key={idx} node={child} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DirectoryTree = () => {
  const data = [
    {
      name: "project-root",
      children: [
        { name: ".gitignore" },
        { name: "package.json" },
        { name: "README.md" },
        {
          name: "public",
          children: [
            { name: "index.html" },
            { name: "favicon.ico" }, // Special icon applied here
            { name: "robots.txt" },
          ],
        },
        {
          name: "src",
          children: [
            {
              name: "components",
              children: [
                { name: "Header.jsx" },
                { name: "Footer.jsx" },
                { name: "Sidebar.jsx" },
                { name: "Button.jsx" },
                { name: "Table.jsx" },
              ],
            },
            {
              name: "pages",
              children: [
                { name: "Home.jsx" },
                { name: "Login.jsx" },
                { name: "Register.jsx" },
                { name: "Dashboard.jsx" },
                { name: "Profile.jsx" },
              ],
            },
            {
              name: "utils",
              children: [
                { name: "constants.js" },
                { name: "helpers.js" },
                { name: "validators.js" },
              ],
            },
            {
              name: "context",
              children: [
                { name: "AuthContext.jsx" },
                { name: "ThemeContext.jsx" },
              ],
            },
            { name: "App.jsx" },
            { name: "index.js" },
            { name: "styles.css" },
          ],
        },
        {
          name: "tests",
          children: [{ name: "App.test.js" }, { name: "Header.test.js" }],
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-auto border">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default DirectoryTree;
