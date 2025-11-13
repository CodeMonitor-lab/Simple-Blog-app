"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import blogData from "@/data/blogs.json";

const BlogCard = () => {
  const { blogs } = blogData;

  return (
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
  );
};

export default BlogCard