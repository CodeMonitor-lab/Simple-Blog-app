"use client";
import React, { useState, useMemo } from "react";
import { Search, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// 🧠 Node & Backend Stack Explorer
// Interactive, responsive, Tailwind-first layout

const BACKEND_STACKS = [
  {
    id: "node",
    title: "Node.js",
    category: "Runtime",
    summary:
      "JavaScript runtime built on Chrome’s V8 engine — ideal for scalable network applications.",
    tags: ["JavaScript", "V8", "Runtime"],
    docs: "https://nodejs.org/",
  },
  {
    id: "express",
    title: "Express.js",
    category: "Framework",
    summary:
      "Minimal and flexible Node.js web application framework for building APIs and servers.",
    tags: ["Express", "Routing", "Middleware"],
    docs: "https://expressjs.com/",
  },
  {
    id: "nest",
    title: "NestJS",
    category: "Framework",
    summary:
      "A progressive Node.js framework leveraging TypeScript and modular architecture.",
    tags: ["NestJS", "TypeScript", "GraphQL"],
    docs: "https://nestjs.com/",
  },
  {
    id: "fastify",
    title: "Fastify",
    category: "Framework",
    summary:
      "Fast and low-overhead web framework for Node.js — built for performance.",
    tags: ["Fastify", "Performance", "API"],
    docs: "https://fastify.dev/",
  },
  {
    id: "hapi",
    title: "Hapi.js",
    category: "Framework",
    summary:
      "Rich framework for building scalable and maintainable server applications.",
    tags: ["Hapi", "API", "Plugins"],
    docs: "https://hapi.dev/",
  },
  {
    id: "prisma",
    title: "Prisma ORM",
    category: "Database",
    summary:
      "Next-generation ORM for Node.js and TypeScript with type-safe database access.",
    tags: ["Prisma", "ORM", "TypeScript"],
    docs: "https://www.prisma.io/",
  },
  {
    id: "mongoose",
    title: "Mongoose",
    category: "Database",
    summary:
      "Elegant MongoDB object modeling tool for Node.js with schema validation.",
    tags: ["MongoDB", "ODM", "Validation"],
    docs: "https://mongoosejs.com/",
  },
  {
    id: "supabase",
    title: "Supabase",
    category: "Backend-as-a-Service",
    summary:
      "Open-source Firebase alternative with Postgres, Auth, and Realtime APIs.",
    tags: ["Postgres", "Auth", "Realtime"],
    docs: "https://supabase.com/",
  },
  {
    id: "firebase",
    title: "Firebase",
    category: "Backend-as-a-Service",
    summary:
      "Google’s serverless backend for authentication, storage, and real-time data.",
    tags: ["Firebase", "Serverless", "Google"],
    docs: "https://firebase.google.com/",
  },
  {
    id: "graphql",
    title: "GraphQL",
    category: "API Layer",
    summary:
      "API query language and runtime for flexible data fetching from multiple sources.",
    tags: ["GraphQL", "API", "Schema"],
    docs: "https://graphql.org/",
  },
  {
    id: "socketio",
    title: "Socket.IO",
    category: "Realtime",
    summary:
      "Real-time, bidirectional, event-based communication for web applications.",
    tags: ["WebSockets", "Realtime", "Events"],
    docs: "https://socket.io/",
  },
  {
    id: "docker",
    title: "Docker",
    category: "DevOps",
    summary:
      "Container platform for building, shipping, and running backend apps anywhere.",
    tags: ["Containers", "DevOps", "Deployment"],
    docs: "https://www.docker.com/",
  },
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BACKEND_STACKS.map((s) => s.category)));
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    return BACKEND_STACKS.filter((s) => {
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
            Node.js & Backend Stack Explorer
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl">
            Explore backend frameworks, databases, and tools. Filter by category
            or search by name, tag, or feature.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center bg-white/60 dark:bg-slate-800/60 border rounded-lg px-3 py-2 shadow-sm w-72">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search frameworks, tags, docs..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Filter */}
          <div className="hidden sm:block">
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

      {/* Cards */}
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
            No results found.
          </div>
        )}
      </motion.div>

      {/* Footer CTA */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Need backend stack advice?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Share your use case, and get personalized backend stack suggestions.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => alert('Show suggestion modal here')}
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
