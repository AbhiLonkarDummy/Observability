"use client";

import { useState } from "react";
import "./header.css";
import { Plus, Search } from "lucide-react";

import FilterDropdown from "../../ui/filterdropdown";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { DynamicBreadcrumb } from "../../ui/dynamic-breadcrumb";

export default function Header({ onAddApplicationClick }) {
  const [open, setOpen] = useState(false);
  const [appName, setAppName] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("App Name:", appName);
    console.log("Project Link:", projectLink);

    setOpen(false);
    setAppName("");
    setProjectLink("");
  };
  return (
    <div className="flex mt-2 justify-between items-center">
      <DynamicBreadcrumb />
      {/* <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}
      <div className="flex items-center gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-md text-sm 
                  placeholder-gray-500 text-gray-700 
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40 
                  w-60"
          />
        </div>

        {/* Filter Button */}
        <FilterDropdown
          className="bg-white border border-gray-300 rounded-md text-sm shadow-sm 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          options={[
            { label: "Team name", value: "team" },
            { label: "App name", value: "app" },
            { label: "Errors", value: "errors" },
            { label: "Last updated", value: "updated" },
          ]}
        />
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--brand-primary-color)] text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add Application
        </button>
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Application</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-3">
              <Label htmlFor="appName">Application Name</Label>
              <input
                id="appName"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="Analytics Platform Service"
                required
                className="pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md text-sm 
                  placeholder-gray-500 text-gray-700 
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40 "
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="projectLink">Project Link</Label>

              <input
                id="projectLink"
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
                placeholder="https://example.com"
                required
                className="pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md text-sm 
                  placeholder-gray-500 text-gray-700 
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40 
                  "
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[var(--brand-primary-color)] hover:bg-blue-700 transition text-white cursor-pointer"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
    // <header className="w-full flex items-center justify-between py-4 mt-4 ">
    //   {/* Left: Dashboard Title */}
    //   <h1 className="text-lg font-semibold muted-2">Home</h1>

    //   {/* Right: Input + Buttons */}
    //   <div className="flex items-center gap-3">
    //     {/* Search Input */}
    //     <div className="relative">
    //       <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
    //       <input
    //         type="text"
    //         placeholder="Search..."
    //         className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 w-60"
    //       />
    //     </div>

    //     {/* Filter Button */}
    //     <FilterDropdown
    //       options={[
    //         { label: "Team name", value: "team" },
    //         { label: "App name", value: "app" },
    //         { label: "Health", value: "health" },
    //         { label: "Errors", value: "errors" },
    //         { label: "Last updated", value: "updated" },
    //       ]}
    //     />

    //     {/* Add Application Button */}
    //     <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition">
    //       <Plus className="h-4 w-4" />
    //       Add Application
    //     </button>
    //   </div>
    // </header>
  );
}
