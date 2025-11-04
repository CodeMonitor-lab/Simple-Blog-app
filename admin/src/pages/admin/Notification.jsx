import React, { useState } from "react";
import {
  AllNotification,
  NotificationSetting,
} from "@/components/custom/Notification";
import { Settings, Filter } from "lucide-react";

const Notification = () => {
  const [showSetting, setShowSetting] = useState(false);
  const [filter, setFilter] = useState("all");

  return (
    <main className="p-6 bg-gradient-to-b  rounded-lg min-h-screen">
      {/* ===== Header with Toggle Button ===== */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {showSetting ? "Notification Settings" : "Notifications"}
        </h2>

        <div className="flex items-center gap-3">
          {/* Show filter only when not in settings */}
          {!showSetting && (
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="text-sm outline-none bg-transparent text-gray-700"
              >
                <option value="all">All</option>
                <option value="comment">Comments</option>
                <option value="like">Likes</option>
                <option value="follow">Follows</option>
                <option value="message">Messages</option>
              </select>
            </div>
          )}

          <button
            onClick={() => setShowSetting(!showSetting)}
            className="flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            <Settings className="w-4 h-4" />
            {showSetting ? "Back" : "Settings"}
          </button>
        </div>
      </div>

      {/* ===== Toggle Between Notification List & Settings ===== */}
      {!showSetting ? <AllNotification filter={filter} /> : <NotificationSetting />}
    </main>
  );
};

export default Notification;