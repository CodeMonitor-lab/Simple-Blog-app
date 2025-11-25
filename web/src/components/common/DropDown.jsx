"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ label = "Select", options = [], onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setOpen(false);
    if (onSelect) onSelect(item);
  };

  return (
    <div ref={dropdownRef} className="relative w-full max-w-xs">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
      >
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute mt-2 w-full border rounded-lg bg-white dark:bg-gray-900 shadow-lg z-10">
          {options.length > 0 ? (
            options.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelect(item)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {item.label}
              </button>
            ))
          ) : (
            <p className="px-4 py-2 text-sm text-gray-500">No options</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
