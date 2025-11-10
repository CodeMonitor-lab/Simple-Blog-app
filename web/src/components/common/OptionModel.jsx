"use client";
import React from "react";

const OptionModel = ({ categories = [], category, setCategory, label = "Category" }) => {
  return (
    <div className="hidden sm:block">
      <label htmlFor="category" className="sr-only">
        {label}
      </label>

      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 border rounded-lg bg-white/60 dark:bg-slate-800/60 text-sm"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionModel;
