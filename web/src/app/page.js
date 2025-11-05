"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

// Sample Blog Data (replace with your real data or fetch from API)
const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks in 2025",
    author: "John Doe",
    date: "Nov 1, 2025",
    image:
      "https://plus.unsplash.com/premium_photo-1661766717882-65c84cf12a8e?w=800",
    description:
      "Learn how to use React Hooks efficiently with examples and best practices for modern web development.",
    category: "React",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    author: "Jane Smith",
    date: "Oct 28, 2025",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800",
    description:
      "Discover how to design and build robust, scalable APIs using Node.js, Express, and MongoDB.",
    category: "Backend",
  },
  {
    id: 3,
    title: "SEO Optimization Tips for Next.js Applications",
    author: "Alex Carter",
    date: "Oct 20, 2025",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800",
    description:
      "Boost your Next.js website ranking with technical SEO best practices and tools that actually work.",
    category: "SEO",
  },
];

const BlogHomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      {/* 🔥 Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to DevChronicles 🧠
        </h1>
        <p className="text-gray-600">
          Insights, tutorials, and tips on React, SEO, and Full Stack Development.
        </p>
      </section>

      {/* 🔍 Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>
      </div>

      {/* 📝 Blog Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-xs text-blue-600 font-semibold uppercase mb-1">
                {post.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No posts found matching “{searchTerm}”.
        </p>
      )}
    </main>
  );
};

export default BlogHomePage;
