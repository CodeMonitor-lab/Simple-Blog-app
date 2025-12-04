"use client";

import SidebarLayout from "@/components/layout/sidebar/SidebarLayout";
import ModuleData from "./ModuleData";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
} from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar className="absolute w-72 border-r">
          <ModuleData />
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Toolbar */}
          <header className="h-14 flex items-center px-14 border-b">
            <SidebarTrigger />
            <h1 className="ml-2 text-lg font-semibold">Element</h1>
          </header>

          {/* Scrollable Content Area */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>

      </div>
    </SidebarProvider>
  );
}
