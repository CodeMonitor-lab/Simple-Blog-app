import React from "react";

const TrackingKeyword = () => {
  const trackedKeywords = [
    { keyword: "react admin dashboard", position: 3, volume: 2400, difficulty: "Medium", status: "Tracking" },
    { keyword: "seo dashboard react", position: 8, volume: 1200, difficulty: "Easy", status: "Tracking" },
    { keyword: "blog seo optimization", position: 12, volume: 3600, difficulty: "Hard", status: "Opportunity" },
    { keyword: "react seo components", position: 15, volume: 890, difficulty: "Medium", status: "Tracking" },
    { keyword: "admin panel seo", position: 22, volume: 1500, difficulty: "Hard", status: "Opportunity" },
  ];

  const keywordOpportunities = [
    { keyword: "nextjs seo dashboard", volume: 1800, difficulty: "Medium", potential: "High" },
    { keyword: "react seo analytics", volume: 950, difficulty: "Easy", potential: "High" },
    { keyword: "blog seo tools", volume: 4200, difficulty: "Hard", potential: "Medium" },
  ];

  const getDifficultyColor = (level) => {
    switch (level) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="p-4 sm:p-6 bg-gray-50 min-h-screen space-y-6">
      {/* ✅ Keyword Research & Tracking Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Keyword Research & Tracking
          </h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Add Keywords
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Keyword</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Position</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Volume</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Difficulty</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {trackedKeywords.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-medium">
                    {item.keyword}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      #{item.position}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {item.volume.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(
                        item.difficulty
                      )}`}
                    >
                      {item.difficulty}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {item.status}
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Keyword Opportunities Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Keyword Opportunities</h3>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keywordOpportunities.map((opp, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{opp.keyword}</h4>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {opp.potential} Potential
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Volume:</span>
                    <span>{opp.volume.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span>{opp.difficulty}</span>
                  </div>
                </div>
                <button className="mt-3 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Track Keyword
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrackingKeyword;
