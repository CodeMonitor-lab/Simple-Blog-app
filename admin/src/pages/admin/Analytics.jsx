import React, { useState } from "react";
import {
  GoogleConsole,
  SeoAnalysis,
  TechnicalSEOAudit,
  TopKeywords,
  TrackingKeyword,
} from "@/components/custom/Analytics";

const Analytics = () => {
  const [dateRange, setDateRange] = useState("Last 7 Days");

  const handleRangeChange = (e) => {
    setDateRange(e.target.value);
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen space-y-8">
      {/* Analytical Header */}
      <header
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-xl shadow-md text-white backdrop-blur-md"
        style={{
          background: "linear-gradient(135deg, rgba(37,99,235,0.9) 0%, rgba(79,70,229,0.9) 50%, rgba(6,182,212,0.9) 100%)",
        }}
      >
        <div>
          <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
          <p className="text-sm opacity-90 mt-1">
            Overview of your website’s SEO performance and Google Console insights
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={handleRangeChange}
            className="px-3 py-2 rounded-lg text-sm bg-white/20 border border-white/30 text-white placeholder-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 backdrop-blur-sm"
          >
            <option className="text-black">Today</option>
            <option className="text-black">Last 7 Days</option>
            <option className="text-black">Last 30 Days</option>
            <option className="text-black">Last 90 Days</option>
            <option className="text-black">Custom Range</option>
          </select>

          <button className="px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
            Refresh
          </button>
        </div>
      </header>

      {/* Analytics Components */}
      <SeoAnalysis />
      <TrackingKeyword />
      <TechnicalSEOAudit />
      <TopKeywords />
      <GoogleConsole />
    </main>
  );
};

export default Analytics;
