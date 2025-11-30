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
    <div>
      <div className="flex gap-2 overflow-x-auto py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-3 py-1 text-sm border rounded-md"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
