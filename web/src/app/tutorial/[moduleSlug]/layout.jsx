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
      <Sidebar className="absolute mt-16">
        <SidebarLayout>
          <ModuleData />
        </SidebarLayout>
      </Sidebar>

      <section className="flex-1 overflow-y-auto">
      <div className="bg-white shadow flex border px-4 py-2 mb-4 " >
        <SidebarTrigger />
      </div>
        {children}
      </section>

    </SidebarProvider>
  );
}
