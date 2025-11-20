"use client"

import React from "react";

const FilterSelect = ({
  label = "Filter",
  options = [],
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* {label && <span className="text-sm font-medium">{label}</span>} */}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 rounded-lg border border-gray-300 bg-white 
                   text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none 
                   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
      >
        <option value="">{label}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
