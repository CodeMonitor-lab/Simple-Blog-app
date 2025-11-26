"use client";

import React from "react";

const categories = [
  "Showcase",
  "Frontend",
  "Backend",
  "Full-Stack",
  "UI/UX",
  "Mobile",
  "DevOps",
  "E-Commerce",
  "Open Source",
  "Templates",
  "Tools",
];

export default function CategoryToolbar() {
  return (
    <div className="w-full border-b bg-white/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 flex gap-3 overflow-x-auto no-scrollbar py-3">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium whitespace-nowrap transition-all"
          >
            {cat}
          </button>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
