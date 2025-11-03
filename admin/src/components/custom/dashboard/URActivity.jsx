import React from "react";
import { FilePlus2, Edit3, Trash2, Clock } from "lucide-react";

const URActivity = () => {
  const activities = [
    { id: 1, user: "John Doe", action: "Created a new post", timestamp: "2023-10-01 10:00 AM", type: "create" },
    { id: 2, user: "Jane Smith", action: "Edited a post", timestamp: "2023-10-01 11:30 AM", type: "edit" },
    { id: 3, user: "Alice Johnson", action: "Deleted a comment", timestamp: "2023-10-01 01:15 PM", type: "delete" },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "create":
        return <FilePlus2 className="w-5 h-5 text-green-500" />;
      case "edit":
        return <Edit3 className="w-5 h-5 text-blue-500" />;
      case "delete":
        return <Trash2 className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-gray-500" />
        Recent Activity
      </h2>

      <ul className="space-y-3">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              {getIcon(activity.type)}
              <div>
                <p className="text-sm text-gray-800 font-medium">{activity.action}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {activity.user} — {activity.timestamp}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default URActivity;
