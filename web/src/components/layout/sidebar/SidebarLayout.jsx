"use client";

import React from "react";
import SidebarHeader from "./compo/SidebarHeader";
import SidebarFooter from "./compo/SidebarFooter";
import { Sidebar } from "@/components/ui/sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <section className="flex flex-col h-full pb-10 " >
        <SidebarHeader/>
        <main className="flex-1 overflow-y-auto px-3 py-4">{children}</main>
        <SidebarFooter />
    </section>
  );
};

export default SidebarLayout;
