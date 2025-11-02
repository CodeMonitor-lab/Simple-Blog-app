import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import SeoOptimizationModal from "./SeoOptimizationModal";

const SeoAnalysis = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "How to Build React Admin Dashboard",
      status: "Published",
      seoScore: 92,
      traffic: 12500,
      keywords: "react, dashboard, admin",
      lastUpdated: "Oct 28, 2025",
    },
    {
      id: 2,
      title: "Optimizing SEO for React Apps",
      status: "Draft",
      seoScore: 78,
      traffic: 3400,
      keywords: "seo, react, optimization",
      lastUpdated: "Oct 25, 2025",
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      case "Scheduled":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="p-4 sm:p-6 bg-gray-50 min-h-auto">
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Header Section */}
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Content SEO Analysis
            </h3>

            <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-auto">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Scheduled</option>
              </select>

              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium w-full sm:w-auto">
                New Post
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-900">
                  <th className="py-3 px-4 font-medium">Title</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium">SEO Score</th>
                  <th className="py-3 px-4 font-medium">Traffic</th>
                  <th className="py-3 px-4 font-medium">Keywords</th>
                  <th className="py-3 px-4 font-medium">Last Updated</th>
                  <th className="py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{post.title}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          post.status
                        )}`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            post.seoScore >= 90
                              ? "bg-green-100 text-green-800"
                              : post.seoScore >= 80
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {post.seoScore}
                        </div>
                        {post.seoScore >= 90 && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {post.traffic.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {post.keywords}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {post.lastUpdated}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Optimize
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Optimization Modal */}
        <SeoOptimizationModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      </div>
    </main>
  );
};

export default SeoAnalysis;
