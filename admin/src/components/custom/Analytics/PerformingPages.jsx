import React from "react";

const PerformingPages = () => {
  const posts = [
    { title: "How to Learn React in 2025", traffic: 12000 },
    { title: "Top 10 JavaScript Tips", traffic: 9500 },
    { title: "Next.js vs React — Which to Choose?", traffic: 8700 },
    { title: "Understanding TanStack Query", traffic: 7200 },
    { title: "Optimizing React Apps", traffic: 6800 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Pages</h3>
      <div className="space-y-3">
        {posts.slice(0, 5).map((post, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
          >
            <div className="font-medium text-gray-900 truncate max-w-xs">
              {post.title}
            </div>
            <div className="text-sm text-gray-600">
              {post.traffic.toLocaleString()} views
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformingPages;
