"use client";
import React, { useState, useMemo } from "react";
import { JsStackCard } from "@/components/card";
import { OptionModel, Search } from "@/components/common";
import stacksData from "@/data/stacks.json";
import { useFilteredStacks } from "@/hooks/useFilteredStacks";

const Page = () => {
  const stacks = stacksData.STACKS || [];

  const categories = useMemo(
    () => ["All", ...new Set(stacks.map((s) => s.category))],
    [stacks]
  );

  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  // ✅ Reusable filter logic
  const filteredStacks = useFilteredStacks(stacks, category, query);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          JavaScript Stack Explorer
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl">
          Browse common JavaScript stacks, frameworks, and tools. Filter by
          category or search by name, tag, or summary.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <OptionModel
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
        <Search query={query} setQuery={setQuery} />
      </div>

      {/* Cards */}
      <JsStackCard filtered={filteredStacks} />
    </main>
  );
};

export default Page;
