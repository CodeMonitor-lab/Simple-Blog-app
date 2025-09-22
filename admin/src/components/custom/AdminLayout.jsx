import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/custom/Navbar";
import Sidebar from "@/components/custom/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 h-screen fixed">
        <Sidebar />
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white shadow">
          <Navbar />
        </header>

        {/* Scrollable page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
