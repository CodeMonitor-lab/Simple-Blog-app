"use client";

import Link from "next/link";
import sidebarData from "@/data/foundation/sidebar.json";

export default function FoundationSidebar() {
  const { meta, sidebar } = sidebarData;

  return (
    <aside className="w-72 border-r h-screen overflow-y-auto p-4">
      {sidebar
        .sort((a, b) => a.order - b.order)
        .map((section) => (
          <div key={section.slug} className="mb-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">
              {section.section}
            </h3>

            <ul className="space-y-1">
              {section.items
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`${meta.basePath}/${section.slug}/${item.slug}`}
                      className="block text-sm px-2 py-1 rounded hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </aside>
  );
}
