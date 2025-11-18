"use client";
import React from "react";

const Filter = ({ categories = [], category, setCategory }) => {
  return (
    <div className="relative w-full sm:w-60">
      {/* Glow */}
      <div className="absolute inset-0 rounded-xl neon-border pointer-events-none" />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full bg-black/40 backdrop-blur-md border 
        border-pink-500/40 rounded-xl px-3 py-2 text-sm 
        text-pink-300 focus:outline-none"
      >
        {categories.map((c) => (
          <option key={c} className="bg-black text-pink-300">
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
