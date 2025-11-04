import React, { useState } from "react";
import { Mail } from "lucide-react";

const NotificationSetting = () => {
  // ✅ Local state for notification preferences
  const [formData, setFormData] = useState({
    notifications: {
      newPost: true,
      newComment: false,
      weeklyDigest: true,
    },
  });

  // ✅ Toggle handler for checkboxes
  const handleNotificationChange = (key) => {
    setFormData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key],
      },
    }));
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="space-y-6">
        {/* ✅ Notification Toggles */}
        <div className="space-y-4">
          {/* New Post */}
          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">New Post Published</h3>
              <p className="text-sm text-gray-600 mt-1">
                Get notified when a new post is published.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.notifications.newPost}
                onChange={() => handleNotificationChange("newPost")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          {/* New Comment */}
          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">New Comment</h3>
              <p className="text-sm text-gray-600 mt-1">
                Get notified when someone comments on your posts.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.notifications.newComment}
                onChange={() => handleNotificationChange("newComment")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          {/* Weekly Digest */}
          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Weekly Digest</h3>
              <p className="text-sm text-gray-600 mt-1">
                Receive a weekly summary of your blog activity.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.notifications.weeklyDigest}
                onChange={() => handleNotificationChange("weeklyDigest")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>
        </div>

        {/* ✉️ Email Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">
                Email Notifications
              </h3>
              <p className="text-sm text-yellow-700 mt-1">
                All notifications will be sent to{" "}
                <span className="font-medium">admin@myblog.com</span>.  
                You can change this in General Settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotificationSetting;
