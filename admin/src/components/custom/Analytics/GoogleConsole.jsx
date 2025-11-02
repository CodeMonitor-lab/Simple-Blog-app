import React from "react";
import { Shield } from "lucide-react";

const GoogleConsole = () => {
  const topKeywords = [
    { keyword: "react tutorial", impressions: 2400 },
    { keyword: "nextjs vs react", impressions: 1850 },
    { keyword: "tanstack query", impressions: 1320 },
    { keyword: "frontend roadmap", impressions: 960 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Search Console Integration
        </h3>
      </div>
      <div className="p-6">
        {/* Connection Status */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
            <div>
              <h4 className="text-sm font-medium text-blue-800">
                Connected to Google Search Console
              </h4>
              <p className="text-sm text-blue-700 mt-1">
                Your site is connected to Google Search Console. Data is updated daily.
              </p>
            </div>
          </div>
        </div>

        {/* Search Queries + Index Coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search Queries */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Recent Search Queries</h4>
            <div className="space-y-2">
              {topKeywords.map((keyword, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-600">{keyword.keyword}</span>
                  <span className="text-gray-900">
                    {keyword.impressions.toLocaleString()} impressions
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Index Coverage */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Index Coverage</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Valid pages</span>
                <span className="font-medium text-green-600">124</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Excluded pages</span>
                <span className="font-medium text-yellow-600">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Errors</span>
                <span className="font-medium text-red-600">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleConsole;
