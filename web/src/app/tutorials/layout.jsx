import React from "react";
import { SidebarHeader, SidebarModules, SidebarFooter } from "@/components/sidebar";
import tutorials from "@/data/tutorial.json";

export default function Layout({ children }) {
  return (
    <div className="flex">

      {/* SIDEBAR */}
      <aside className="w-72 h-screen border-r p-5 overflow-y-auto bg-white dark:bg-gray-900">
        <SidebarHeader />
        <SidebarModules modules={tutorials} />
        <SidebarFooter />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
