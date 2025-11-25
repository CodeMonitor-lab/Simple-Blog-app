"use client"

import React from "react";
import tutorials from "@/data/tutorialModules/tutorial-module.json";
import { SidebarLayout } from "@/components/layout";


export default function Layout({ children }) {
  return (
    <div className="flex">

      {/* SIDEBAR */}
      
      <aside className="w-72 h-screen border-r p-5 overflow-y-auto bg-white dark:bg-gray-900">
        <SidebarLayout
        data={tutorials}
        />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
