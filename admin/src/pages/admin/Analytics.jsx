import React from "react";
import {
  AnalyticsChart,
  PerformingPages,
  GoogleConsole,
  SeoAnalysis,
  TopKeywords,
  TrackingKeyword,
} from "@/components/custom/Analytics";

const Analytics = () => {
  return (
    <main className="p-6 bg-gray-50 min-h-screen space-y-6 ">
      <section>
        <SeoAnalysis />
        <TrackingKeyword />
        <TopKeywords />
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnalyticsChart />
          <PerformingPages />
        </div>
      </section>

      <section>
        <GoogleConsole />
      </section>
    </main>
  );
};

export default Analytics;
