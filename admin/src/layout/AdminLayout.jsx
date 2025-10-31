import React from "react";
import { SidebarLayout, Navbar } from "./index";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:block">
          <SidebarLayout />
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <header className="sticky top-0 z-40 border-b border-gray-200 shadow-sm bg-white">
            <Navbar />
          </header>

          {/* Main scrollable area */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
