"use client";
import React, { useState, useMemo } from "react";
import { Search, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// 🧩 JavaScript Stack Page
// - Tailwind-first layout
// - Interactive search + filters + responsive grid
// - Built with React, Lucide Icons, and Framer Motion

const STACKS = [
  {
    id: "mern",
    title: "MERN",
    category: "Full Stack",
    summary:
      "MongoDB • Express • React • Node.js — a classic JavaScript full-stack setup.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    docs: "https://www.mongodb.com/mern-stack",
  },
  {
    id: "nextjs",
    title: "Next.js (React)",
    category: "Frontend / SSR",
    summary:
      "Server-side rendering, static generation, and API routes built on top of React.",
    tags: ["React", "SSR", "Static", "Vercel"],
    docs: "https://nextjs.org/",
  },
  {
    id: "vite-react",
    title: "Vite + React",
    category: "Frontend",
    summary:
      "Lightning-fast dev server and optimized build for modern frontend apps.",
    tags: ["Vite", "React", "ESM"],
    docs: "https://vitejs.dev/",
  },
  {
    id: "remix",
    title: "Remix",
    category: "Frontend / SSR",
    summary:
      "A modern framework focused on web fundamentals and great UX for routing/data.",
    tags: ["Remix", "SSR", "Routing"],
    docs: "https://remix.run/",
  },
  {
    id: "sveltekit",
    title: "SvelteKit",
    category: "Frontend",
    summary:
      "Svelte-powered framework for tiny bundle sizes and excellent DX.",
    tags: ["Svelte", "SSR", "Kit"],
    docs: "https://kit.svelte.dev/",
  },
  {
    id: "node-express",
    title: "Node.js + Express",
    category: "Backend",
    summary:
      "Lightweight, unopinionated server layer for APIs and microservices.",
    tags: ["Node.js", "Express", "API"],
    docs: "https://expressjs.com/",
  },
  {
    id: "nest",
    title: "NestJS",
    category: "Backend",
    summary:
      "Opinionated TypeScript-friendly backend framework inspired by Angular.",
    tags: ["NestJS", "TypeScript", "GraphQL"],
    docs: "https://nestjs.com/",
  },
  {
    id: "deno",
    title: "Deno",
    category: "Runtime",
    summary:
      "Secure runtime for JavaScript and TypeScript with built-in tooling.",
    tags: ["Deno", "TypeScript", "Secure"],
    docs: "https://deno.com/",
  },
  {
    id: "prisma",
    title: "Prisma",
    category: "ORM",
    summary:
      "Type-safe database toolkit that works great with TypeScript/Node.js.",
    tags: ["Prisma", "ORM", "TypeScript"],
    docs: "https://www.prisma.io/",
  },
  {
    id: "supabase",
    title: "Supabase",
    category: "Backend-as-a-Service",
    summary:
      "Open-source Firebase alternative — Postgres + realtime + auth.",
    tags: ["Supabase", "Postgres", "Realtime"],
    docs: "https://supabase.com/",
  },
  {
    id: "testing",
    title: "Testing (Jest / Vitest)",
    category: "Testing",
    summary:
      "Unit / integration testing tools widely used in the JS ecosystem.",
    tags: ["Jest", "Vitest", "Testing"],
    docs: "https://jestjs.io/",
  },
  {
    id: "ci",
    title: "CI / CD",
    category: "DevOps",
    summary:
      "GitHub Actions, CircleCI, and Vercel for continuous integration and deployment.",
    tags: ["GitHub Actions", "Vercel", "CI/CD"],
    docs: "https://docs.github.com/en/actions",
  },
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(STACKS.map((s) => s.category)));
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    return STACKS.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const q = query.trim().toLowerCase();
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            JavaScript Stack Explorer
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl">
            Browse common JavaScript stacks, frameworks and tools. Filter by
            category or search by name, tag or summary.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="flex items-center bg-white/60 dark:bg-slate-800/60 border rounded-lg px-3 py-2 shadow-sm w-72">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stacks, tags, docs..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="hidden sm:block">
            <label className="sr-only">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-white/60 dark:bg-slate-800/60 text-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((s) => (
          <article
            key={s.id}
            className="bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {s.category}
                </p>
              </div>
              <div className="text-sm text-gray-400">
                {s.tags.slice(0, 2).join(" • ")}
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {s.summary}
            </p>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {s.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border rounded-full bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={s.docs}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
              >
                Docs <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No results. Try a different search or category.
          </div>
        )}
      </motion.div>

      {/* Footer CTA */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Want a tailored stack?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Tell me about your project and I can suggest a JavaScript stack
              that fits.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() =>
                alert("You clicked: Suggest a Stack — replace with modal/routing")
              }
              className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:opacity-95"
            >
              Suggest a Stack
            </button>
            <button
              onClick={() => setQuery("")}
              className="px-4 py-2 rounded-lg border bg-white/40"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
