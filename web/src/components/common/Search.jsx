"use client";
import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ placeholder = "Search...", onChange }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onChange?.(value);
  };

  return (
    <div className="relative w-full sm:w-80">
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-xl neon-border pointer-events-none" />

      <div className="flex items-center bg-black/40 backdrop-blur-md 
          border border-cyan-500/40 rounded-xl px-3 py-2 text-cyan-300">
        <SearchIcon className="w-4 h-4 text-cyan-400" />
        <input
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="bg-transparent outline-none ml-2 w-full text-sm text-cyan-300"
        />
      </div>
    </div>
  );
};

export default Search;
