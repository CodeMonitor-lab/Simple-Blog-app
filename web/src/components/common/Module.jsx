"use client";

import React, { useState } from "react";
import Link from "next/link";
import tutorialData from "@/data/tutorialData/tutorial.json";

export default function Sidebar({ currentModule, currentLesson }) {
  const [openModuleId, setOpenModuleId] = useState(null);

  const toggleModule = (id) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <aside className="w-72 h-screen sticky top-0 border-r p-4 overflow-y-auto">
      {tutorialData.map((module) => (
        <div key={module.id} className="mb-2">
          {/* Module title */}
          <button
            className="w-full text-left font-semibold py-2 px-2 hover:bg-gray-100 rounded"
            onClick={() => toggleModule(module.id)}
          >
            {module.title}
          </button>

          {/* Lessons */}
          {openModuleId === module.id && (
            <ul className="pl-4 mt-1 space-y-1">
              {module.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    href={`/tutorial/react/${module.slug}/${lesson.slug}`}
                    className={`block text-sm px-2 py-1 rounded hover:text-blue-500 hover:bg-gray-100 transition
                      ${
                        currentModule === module.slug &&
                        currentLesson === lesson.slug
                          ? "bg-blue-100 font-medium text-blue-600"
                          : ""
                      }`}
                  >
                    {lesson.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
