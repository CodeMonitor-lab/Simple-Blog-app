import React from "react";

const TopKeywords = () => {
  const topKeywords = [
    { keyword: "react dashboard", position: 1, impressions: 12400, ctr: 8.5 },
    { keyword: "seo optimization", position: 2, impressions: 9800, ctr: 6.9 },
    { keyword: "node js api", position: 3, impressions: 7600, ctr: 5.3 },
    { keyword: "mern stack project", position: 4, impressions: 5400, ctr: 4.8 },
    { keyword: "admin panel react", position: 5, impressions: 3200, ctr: 3.1 },
  ];

  return (
    <main className="p-4 sm:p-6 bg-gray-50 min-h-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Top Performing Keywords
          </h3>
        </div>

        {/* Keyword List */}
        <div className="p-4 sm:p-6">
          <div className="space-y-4">
            {topKeywords.map((keyword, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border border-transparent hover:border-gray-200 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {/* Left Section */}
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {keyword.keyword}
                    </p>
                    <p className="text-sm text-gray-500">
                      Position: {keyword.position}
                    </p>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 text-sm">
                  <span className="text-gray-600">
                    {keyword.impressions.toLocaleString()} impressions
                  </span>
                  <span className="text-gray-600">{keyword.ctr}% CTR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TopKeywords;
