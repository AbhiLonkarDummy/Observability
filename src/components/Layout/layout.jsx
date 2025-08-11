import { Bell, Plus } from "lucide-react";
import { AppSidebar } from "../ui/app-sidebar";
import Header from "../section/Header/header";
import DarkModeToggle from "../DarkMode/darkmodetoggle";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
export default function MainLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[var(--dashboard-muted-bg)] px-4">
        <header className="flex pt-1 mb-1 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between gap-2">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-4">
              {/* Notification Icon */}
              <div className="nav-icon-container flex gap-1">
                <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
                  <Bell className="h-4.5 w-4.5 text-[var(--primary-icon-color)]" />
                  {/* <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span> */}
                </button>
                <DarkModeToggle />
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-[var(--brand-primary-color)] text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition">
                <Plus className="h-4 w-4" />
                Add Application
              </button>
            </div>
            {/* <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            /> */}
          </div>
        </header>
        {/* Need to change this in order to set a custom path  */}
        <Header />

        {children}
        {/* Sidebar is supposed to be common, so its supposed to be used across the home as well as the observability details page  */}
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
