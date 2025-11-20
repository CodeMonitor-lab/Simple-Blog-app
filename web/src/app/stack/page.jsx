"use client";
import React, { useState, useMemo } from "react";
import { JsStackCard } from "@/components/card";
import { FilterSelect, Search } from "@/components/common";
import { HeroBanner } from "@/components/ui";
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

  // Reusable filter logic
  const filteredStacks = useFilteredStacks(stacks, category, query);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div>
        <HeroBanner
          title="JavaScript Stack Explorer"
          description={`Browse common JavaScript stacks, frameworks, and tools.
Filter by category or search by name, tag, or summary.`}
          // buttonText="Explore Stacks"
          align="text-left"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <FilterSelect
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
