"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";

const showcases = [
  {
    id: 1,
    title: "Next.js Blog Platform",
    description:
      "A clean blogging system with SEO features, Markdown posts, and smooth UI transitions.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "https://source.unsplash.com/random/600x400?code",
  },
  {
    id: 2,
    title: "Admin Dashboard UI",
    description:
      "A modern dashboard featuring content analytics, charts, and role-based management.",
    tech: ["React", "ShadCN UI", "Lucide Icons"],
    image: "https://source.unsplash.com/random/600x400?dashboard",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "An AI-powered writing studio using OpenAI and Next.js App Router with TypeScript.",
    tech: ["Next.js", "OpenAI API", "TypeScript"],
    image: "https://source.unsplash.com/random/600x400?ai,tech",
  },
];

const ShowcasePage = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* 🧠 Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Project Showcase
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore featured web projects that demonstrate clean UI design and
          full-stack functionality.
        </p>
      </div>

      {/* 💻 Showcase Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {showcases.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* 🖼️ Image */}
            <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 📄 Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                {/* 🏷️ Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 🔘 Buttons */}
              <div className="flex items-center justify-between">
                <button className="flex items-center text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition">
                  <ExternalLink className="w-4 h-4 mr-1" /> Preview
                </button>
                <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
                  <Github className="w-4 h-4 mr-1" /> GitHub
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcasePage;
