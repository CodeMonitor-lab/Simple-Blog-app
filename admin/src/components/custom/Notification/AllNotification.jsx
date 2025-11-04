import React, { useState, useMemo } from "react";
import {
  Bell,
  MessageCircle,
  Heart,
  UserPlus,
  Clock,
  CheckCircle2,
  Trash2,
  ShieldAlert,
  Server,
  RefreshCcw,
  AlertTriangle,
  Activity,
} from "lucide-react";
import notificationsData from "@/components/notification.json";

const AllNotification = ({ filter = "all" }) => {
  const [notifications, setNotifications] = useState(notificationsData);

  // ✅ Filter notifications based on type
  const filteredNotifications = useMemo(() => {
    if (filter === "all") return notifications;
    return notifications.filter((n) => n.type === filter);
  }, [filter, notifications]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case "comment":
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case "like":
        return <Heart className="w-4 h-4 text-red-500" />;
      case "follow":
        return <UserPlus className="w-4 h-4 text-green-500" />;
      case "message":
        return <Bell className="w-4 h-4 text-purple-500" />;
      case "system":
        return <Server className="w-4 h-4 text-teal-500" />;
      case "security":
        return <ShieldAlert className="w-4 h-4 text-orange-500" />;
      case "update":
        return <RefreshCcw className="w-4 h-4 text-indigo-500" />;
      case "seo":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "core":
        return <Activity className="w-4 h-4 text-emerald-600" />;
      default:
        return <Bell className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <main className="rounded-2xl border-t bg-transparent">
      <div className="p-4 h-[600px] overflow-y-auto">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((n) => (
            <div
              key={n.id}
              className="flex items-start gap-3 mb-3 p-3 rounded-lg border-b border-gray-100"
            >
              <div className="mt-1">{getIcon(n.type)}</div>

              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-medium">{n.user}</span> {n.message}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                  <Clock className="w-3 h-3" /> {n.time}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {!n.isRead && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="text-gray-400 hover:text-green-600"
                    title="Mark as read"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(n.id)}
                  className="text-gray-400 hover:text-red-500"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 mt-10 italic">
            No notifications found for “{filter}”.
          </p>
        )}
      </div>
    </main>
  );
};

export default AllNotification;
