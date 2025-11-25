"use client";
import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded">
      
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-3 flex justify-between items-center font-semibold text-left border-b"
      >
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      {/* Body */}
      {open && (
        <div className="p-3 text-sm text-gray-700">
          {children}
        </div>
      )}
      
    </div>
  );
};

export default Accordion;
