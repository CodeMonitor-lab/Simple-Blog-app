"use client";

import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "Getting Started with React 19",
    description:
      "Learn the fundamentals of React 19, including hooks, components, and the new server actions.",
    category: "Frontend",
    level: "Beginner",
    image: "https://source.unsplash.com/random/800x600?react,frontend",
  },
  {
    id: 2,
    title: "Building APIs with Node.js & Express",
    description:
      "Step-by-step guide to create a REST API using Node.js and Express, with MongoDB integration.",
    category: "Backend",
    level: "Intermediate",
    image: "https://source.unsplash.com/random/800x600?nodejs,backend",
  },
  {
    id: 3,
    title: "Mastering On-Page SEO in 2025",
    description:
      "Understand modern on-page SEO techniques to boost your website’s search engine visibility.",
    category: "SEO",
    level: "Advanced",
    image: "https://source.unsplash.com/random/800x600?seo,analytics",
  },
  {
    id: 4,
    title: "Building Modern UI with Tailwind CSS",
    description:
      "Learn how to rapidly build responsive and beautiful interfaces using Tailwind CSS.",
    category: "Design",
    level: "Beginner",
    image: "https://source.unsplash.com/random/800x600?tailwindcss,design",
  },
  {
    id: 5,
    title: "Deploying Apps with Vercel",
    description:
      "A complete guide on deploying React and Next.js projects using Vercel — free, fast, and easy.",
    category: "DevOps",
    level: "Beginner",
    image: "https://source.unsplash.com/random/800x600?vercel,cloud",
  },
];

const TutorialsPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* 🧠 Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Tutorials & Guides</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Practical coding tutorials covering frontend, backend, SEO, and deployment workflows.
        </p>
      </div>

      {/* 📚 Tutorials Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tutorials.map((item) => (
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
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                    {item.category}
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                    {item.level}
                  </span>
                </div>
              </div>

              {/* 🔗 Button */}
              <button className="mt-6 flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                <BookOpen className="w-4 h-4 mr-1" /> Read Tutorial
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TutorialsPage;
