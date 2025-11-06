"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Mastering React State Management in 2025",
    description:
      "Learn how to handle complex state using React hooks, Context API, and modern libraries like Zustand and Jotai.",
    date: "Oct 12, 2025",
    tags: ["React", "State", "Frontend"],
    image: "https://source.unsplash.com/random/800x600?react,code",
  },
  {
    id: 2,
    title: "Building a Scalable API with Node.js and Express",
    description:
      "A step-by-step guide on structuring your Express backend for better scalability, maintainability, and performance.",
    date: "Sep 27, 2025",
    tags: ["Node.js", "Backend", "API"],
    image: "https://source.unsplash.com/random/800x600?nodejs,server",
  },
  {
    id: 3,
    title: "SEO in the Age of AI: What Developers Should Know",
    description:
      "Explore how AI-driven search algorithms affect technical SEO and how developers can adapt for better rankings.",
    date: "Aug 15, 2025",
    tags: ["SEO", "AI", "Web Development"],
    image: "https://source.unsplash.com/random/800x600?seo,ai",
  },
];

const BlogPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* 🧠 Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Latest Blog Posts</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Insights, tutorials, and lessons from real-world development experiences.
        </p>
      </div>

      {/* 📝 Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* 🖼️ Image */}
            <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 📄 Content */}
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>

              <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 🔗 Read More */}
              <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
