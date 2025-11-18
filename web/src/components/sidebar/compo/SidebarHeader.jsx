"use client";
import React from "react";
import { BookOpen } from "lucide-react";

const SidebarHeader = ({ completedLessons, totalLessons, progress }) => {
  return (
    <div className="pb-4 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-3 text-gray-900 dark:text-gray-100">
        <BookOpen size={20} />
        Tutorial Progress
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {completedLessons} / {totalLessons} lessons completed
      </p>

      <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full mt-2 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SidebarHeader;
