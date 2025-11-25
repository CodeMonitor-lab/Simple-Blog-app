"use client";
import React from "react";
import { BookOpen } from "lucide-react";

const SidebarHeader = ({ completedLessons = 0, totalLessons = 0 }) => {
  // Calculate progress safely
  const progress =
    totalLessons > 0 ? Math.min(100, (completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="py-4 px-6 border-b border-gray-200 dark:border-gray-800">
      {/* Stats Row */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <BookOpen size={18} />
        <span>
          {completedLessons} / {totalLessons} Completed
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full mt-3 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
