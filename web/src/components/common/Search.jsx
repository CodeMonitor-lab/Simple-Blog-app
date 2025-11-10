"use client";
import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react"; // ✅ correct import

const Search = ({ placeholder = "Search stacks, tags, docs...", onChange }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onChange) onChange(value); // ✅ optional callback to parent
  };

  return (
    <div className="flex items-center bg-white/60 dark:bg-slate-800/60 border rounded-lg px-3 py-2 shadow-sm w-72">
      <SearchIcon className="w-4 h-4 text-gray-500 mr-2" />
      <input
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  );
};

export default Search;
