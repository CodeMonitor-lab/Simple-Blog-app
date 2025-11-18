"use client";

import React from "react";
import Link from "next/link";

const SidebarLesson = ({ lessons = [], activeLesson }) => {
  return (
    <div className="mt-3 space-y-1">
      {lessons.map((lesson, index) => {
        const isActive = activeLesson === lesson.slug;

        return (
          <Link
            key={index}
            href={lesson.url}
            className={`block px-3 py-2 rounded-md text-sm transition ${
              isActive
                ? "bg-blue-600 text-white font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            {lesson.title}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLesson;
