"use client";

import SidebarLayout from "@/components/layout/sidebar/SidebarLayout";
import ModuleData from "./[lessonSlug]/ModuleData";
import {  
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
} from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar className="flex pt-16  flex-col border-r border-gray-200 bg-white">
          <SidebarLayout>
            <ModuleData />
          </SidebarLayout>
        </Sidebar>

        <div className="flex-1 relative overflow-y-auto p-6">
            <SidebarTrigger className="p-2 bg-gray-100 rounded shadow"/>
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
