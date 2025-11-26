"use client";
import SidebarHeader from "./compo/SidebarHeader";
import SidebarFooter from "./compo/SidebarFooter";
import Link from "next/link";

export default function SidebarLayout({ children, title, lessons }) {
  return (
    <main className="flex">
      <aside className="w-64 border-r p-4">
        <SidebarHeader  />

        <ul className="space-y-2 mt-4">
      
        </ul>

        <SidebarFooter />
      </aside>

      <section className="flex-1 p-6">{children}</section>
    </main>
  );
}
