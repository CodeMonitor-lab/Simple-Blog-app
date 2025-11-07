"use client";
import React, { useState, useMemo } from "react";
import {
  Github,
  Search,
  Filter,
  Copy,
  ExternalLink,
  PlusCircle,
  Star,
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    name: "NextBlog CMS",
    description:
      "An open-source blogging platform built with Next.js, Tailwind CSS, and Prisma.",
    tags: ["Next.js", "Tailwind", "Prisma"],
    stars: 210,
    repo: "https://github.com/example/nextblog-cms",
  },
  {
    id: 2,
    name: "React Dashboard",
    description:
      "A sleek admin dashboard template with charts, analytics, and dark mode.",
    tags: ["React", "Recharts", "Dashboard"],
    stars: 185,
    repo: "https://github.com/example/react-dashboard",
  },
  {
    id: 3,
    name: "Markdown Blog Engine",
    description:
      "A static blog engine powered by Markdown and MDX with built-in SEO.",
    tags: ["MDX", "Next.js", "SEO"],
    stars: 134,
    repo: "https://github.com/example/markdown-blog",
  },
  {
    id: 4,
    name: "Portfolio Starter Kit",
    description:
      "An elegant portfolio template with animations and dark mode.",
    tags: ["Framer Motion", "Tailwind", "Next.js"],
    stars: 256,
    repo: "https://github.com/example/portfolio-kit",
  },
];

const OpenSourcePage = () => {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter =
        filter === "All" || project.tags.includes(filter);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const handleCopy = (repo) => {
    navigator.clipboard.writeText(`git clone ${repo}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <Github className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold">Open Source Projects</h1>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl w-full sm:w-1/2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl w-full sm:w-1/2">
          <Filter size={18} className="text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
          >
            <option>All</option>
            <option>Next.js</option>
            <option>React</option>
            <option>Tailwind</option>
            <option>Prisma</option>
            <option>Dashboard</option>
          </select>
        </div>
      </div>

      {/* Project List */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border rounded-2xl shadow-sm hover:shadow-md transition-all bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <button
                  onClick={() => handleCopy(project.repo)}
                  className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-600" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                >
                  <ExternalLink size={14} /> View Repo
                </a>

                <div className="flex items-center gap-1 text-yellow-600">
                  <Star size={14} />
                  <span className="text-sm">{project.stars}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No projects found.
          </p>
        )}
      </div>

      {/* Add Project CTA */}
      <div className="text-center mt-16">
        <PlusCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
        <h3 className="text-xl font-semibold mb-2">
          Contribute Your Open Source Project
        </h3>
        <p className="text-gray-600 mb-4">
          Have a great project? Add it to our open-source list!
        </p>
        <a
          href="https://github.com/example/open-source"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          <Github size={16} />
          Add Your Project
        </a>
      </div>
    </section>
  );
};

export default OpenSourcePage;
