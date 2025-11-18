"use client";

import React, { useState, useMemo } from "react";
import backendData from "@/data/node-backendData.json";
import { Search as SearchIcon } from "lucide-react";
import { Filter, Search } from "@/components/common";
import { HeroBanner } from "@/components/ui";
import { NodeJsBackendCard } from "@/components/card/NodeJsBackendCard";

export default function Page() {
  const BACKEND_STACKS = backendData.BACKEND_STACKS;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BACKEND_STACKS.map((s) => s.category)));
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return BACKEND_STACKS.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery =
        q === "" ||
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.tags.join(" ").toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <HeroBanner 
        title="Node.js & Backend Stack Explorer"
        description="Explore backend frameworks, databases, and tools. Filter by category or search by name, tag, or feature."
        align="text-left"
      />

      {/* Search + Filter */}
      <div className="flex flex-wrap items-center gap-4 my-8">
        {/* Search */}
        <div className="flex items-center bg-white/60 dark:bg-slate-800/60 border rounded-lg px-3 py-2 shadow-sm w-72">
          <SearchIcon className="w-4 h-4 text-gray-500 mr-2" />
          <Search query={query} setQuery={setQuery} />
        </div>

        {/* Filter */}
        <Filter 
          categories={categories} 
          category={category} 
          setCategory={setCategory} 
        />
      </div>

      {/* Cards */}
      <NodeJsBackendCard filtered={filtered} />
    </div>
  );
}
