import { useState } from "react";
import { Folder, FolderOpen, File } from "lucide-react";

const TreeNode = ({ node }) => {
  // Expand by default if there are children
  const [isOpen, setIsOpen] = useState(
    node.children && node.children.length > 0
  );
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ml-4">
      {/* Folder or file line */}
      <div
        className="flex items-center gap-2 cursor-pointer text-gray-800 hover:text-blue-600"
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren ? (
          isOpen ? (
            <FolderOpen size={16} />
          ) : (
            <Folder size={16} />
          )
        ) : (
          <File size={16} />
        )}
        <span className="text-sm">{node.name}</span>
      </div>

      {/* Children */}
      {hasChildren && isOpen && (
        <div className="ml-4 border-l border-gray-300 pl-2">
          {node.children.map((child, idx) => (
            <TreeNode key={idx} node={child} />
          ))}
        </div>
      )}
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
            { name: "favicon.ico" },
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
    <div className="bg-white  font-mono text-sm">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default DirectoryTree;
