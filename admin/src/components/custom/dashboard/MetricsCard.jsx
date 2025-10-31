import React from "react";
import { Users, TrendingUp, Eye, Target } from "lucide-react"; // ✅ Import your icons

const MetricCard = ({ title, value, change, icon: Icon, isPercentage = false }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">
          {value}
          {isPercentage && "%"}
        </p>

        {change !== undefined && (
          <div className="flex items-center mt-2">
            <span
              className={`text-sm font-medium ${
                change >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {change >= 0 ? "+" : ""}
              {change.toFixed(2)}%
            </span>
            <span className="text-sm text-gray-500 ml-2">vs last period</span>
          </div>
        )}
      </div>

      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
  </div>
);

const MetricsCard = () => {
  // Mock data
  const seoMetrics = {
    overallScore: 87,
    traffic: { current: 12450, previous: 10200, change: 22.06 },
    rankings: { current: 156, previous: 134, change: 16.42 },
    impressions: { current: 89200, previous: 76500, change: 16.6 },
    ctr: { current: 4.2, previous: 3.8, change: 10.53 },
  };

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Organic Traffic"
          value={seoMetrics.traffic.current.toLocaleString()}
          change={seoMetrics.traffic.change}
          icon={Users}
        />
        <MetricCard
          title="Keyword Rankings"
          value={seoMetrics.rankings.current}
          change={seoMetrics.rankings.change}
          icon={TrendingUp}
        />
        <MetricCard
          title="Impressions"
          value={seoMetrics.impressions.current.toLocaleString()}
          change={seoMetrics.impressions.change}
          icon={Eye}
        />
        <MetricCard
          title="Click-Through Rate"
          value={seoMetrics.ctr.current}
          change={seoMetrics.ctr.change}
          icon={Target}
          isPercentage
        />
      </div>
    </main>
  );
};

export default MetricsCard;
