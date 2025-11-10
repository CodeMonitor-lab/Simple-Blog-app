"use client";
import { useMemo } from "react";

export function useFilteredStacks(stacks = [], category = "All", query = "") {
  const filteredStacks = useMemo(() => {
    return stacks.filter((s) => {
      const matchCategory =
        category === "All" || s.category === category;

      const matchQuery =
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.summary.toLowerCase().includes(query.toLowerCase()) ||
        (s.tags || []).some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        );

      return matchCategory && matchQuery;
    });
  }, [stacks, category, query]);

  return filteredStacks;
}
