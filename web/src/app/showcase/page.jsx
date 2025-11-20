"use client";
import React, { useState, useMemo } from "react";
import { ShowcaseProjectCard } from "@/components/card";
import { FilterSelect, Search } from "@/components/common";
import projects from "@/data/showcase.json";

const Page = () => {
  const categories = ["All", "Frontend", "Backend", "Full Stack", "AI"];

  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  // 🔍 Filter logic (reusable pattern)
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = category === "All" || p.category === category;
      const matchQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchCategory && matchQuery;
    });
  }, [projects, category, query]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      {/* 🔹 Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Project Showcase
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore featured web projects that demonstrate clean UI design and
          full-stack functionality.
        </p>
      </div>

      {/* 🔹 Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <FilterSelect
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <Search query={query} setQuery={setQuery} />
      </div>

      {/* 🔹 Cards */}
      <ShowcaseProjectCard projects={filteredProjects} />
    </main>
  );
};

export default Page;
