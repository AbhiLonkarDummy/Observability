"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function AddApplicationModal() {
  const [open, setOpen] = useState(false);
  const [appName, setAppName] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("App Name:", appName);
    console.log("Project Link:", projectLink);

    // Close modal after submit
    setOpen(false);
    // Reset form
    setAppName("");
    setProjectLink("");
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-[var(--brand-primary-color)] text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition cursor-pointer"
      >
        <Plus className="h-4 w-4" />
        Add Application
      </button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Application</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-3">
              <Label htmlFor="appName">Application Name</Label>
              <Input
                id="appName"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="Enter application name"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="projectLink">Project Link</Label>
              <Input
                id="projectLink"
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
                placeholder="https://example.com"
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
