import React from "react";
import { Activity } from "lucide-react";

const TrafficTrends = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Trends</h3>
      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Traffic chart would appear here</p>
        </div>
      </div>
    </div>
  );
};

export default TrafficTrends;
