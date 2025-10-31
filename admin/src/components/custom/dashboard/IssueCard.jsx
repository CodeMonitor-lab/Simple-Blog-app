import React from "react";
import { XCircle, AlertTriangle, CheckCircle } from "lucide-react";

const IssueCard = () => {
  // Mock issues data
  const issues = [
    {
      id: 1,
      type: "error",
      title: "Missing Meta Description",
      affected: "Homepage",
      count: 1,
    },
    {
      id: 2,
      type: "warning",
      title: "Slow Page Load",
      affected: "Product Pages",
      count: 4,
    },
    {
      id: 3,
      type: "passed",
      title: "Optimized Alt Texts",
      affected: "All Images",
      count: 25,
    },
  ];

  // Helper: pick the right icon based on issue type
  const getIssueIcon = (type) => {
    switch (type) {
      case "error":
        return <XCircle className="w-5 h-5 text-red-600" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "passed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  const renderIssues = () => (
    <div className="space-y-6">
      {/* --- Summary Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center">
            <XCircle className="w-6 h-6 text-red-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-red-900">2</p>
              <p className="text-sm text-red-700">Critical Issues</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-yellow-900">3</p>
              <p className="text-sm text-yellow-700">Warnings</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-green-900">12</p>
              <p className="text-sm text-green-700">Best Practices</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEO Issues --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            SEO Issues & Recommendations
          </h3>
        </div>
        <div className="p-6 space-y-4">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getIssueIcon(issue.type)}
                  <div>
                    <h4 className="font-medium text-gray-900">{issue.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Affects {issue.affected} • {issue.count}{" "}
                      {issue.count === 1 ? "item" : "items"}
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Fix Issue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return <main className="p-6">{renderIssues()}</main>;
};

export default IssueCard;
