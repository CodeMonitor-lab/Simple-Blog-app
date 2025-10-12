import React from "react";
import Navbar from "@/components/custom/Navbar";
import Sidebar from "@/components/custom/SidebarLayout"
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <div>
        <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-40 border-b border-gray-200 shadow-sm">
            <Navbar />
          </header>
          <main className="flex-1 overflow-y-auto p-2 sm:p-6 lg:p-8 bg-gray-50">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
