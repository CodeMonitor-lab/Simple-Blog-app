"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarModules = ({ modules }) => {
  const [openModule, setOpenModule] = useState(null);
  const pathname = usePathname();

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {modules.map((module) => {
        const isOpen = openModule === module.id;

        return (
          <section key={module.id} className="border-b pb-2">
            
            {/* MODULE TITLE */}
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full text-left flex justify-between items-center py-2 font-semibold text-gray-800 dark:text-gray-200"
            >
              <span>{module.title}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>

            {/* LESSONS INSIDE MODULE */}
            {isOpen && (
              <div className="ml-4 mt-2 space-y-1">
                {module.lessons.map((lesson) => {
                  const isActive =
                    pathname === `/tutorials/${module.slug}/${lesson.slug}`;

                  return (
                    <Link
                      key={lesson.slug}
                      href={`/tutorials/${module.slug}/${lesson.slug}`}
                      className={`block text-sm px-2 py-1 rounded ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                      }`}
                    >
                      {lesson.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default SidebarModules;
