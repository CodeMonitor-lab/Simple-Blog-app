"use client";

import React from "react";
import SidebarHeader from "./compo/SidebarHeader";
import SidebarFooter from "./compo/SidebarFooter";

const SidebarLayout = ({ children }) => {
  return (
    <div>
      <SidebarHeader />
      <main className="flex-1 overflow-y-auto px-3 py-4" >
        {children}
      </main>
      <SidebarFooter />
    </div>
  );
};

export default SidebarLayout;
