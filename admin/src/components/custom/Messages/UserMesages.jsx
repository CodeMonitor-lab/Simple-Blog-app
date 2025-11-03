import React, { useState, useMemo } from "react";
import {
  Search,
  MessageSquare,
  Briefcase,
  HelpCircle,
  Heart,
  Filter,
  Trash2,
  Reply,
  CheckCircle,
} from "lucide-react";

const AdminMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const messages = [
    {
      id: 1,
      type: "support",
      sender: "John Doe",
      content: "Need help with my account. I can’t log in since last update.",
      date: "2025-11-03",
      status: "unread",
    },
    {
      id: 2,
      type: "business",
      sender: "Acme Corp",
      content: "We’d like to discuss a potential sponsorship for your blog.",
      date: "2025-11-02",
      status: "read",
    },
    {
      id: 3,
      type: "general",
      sender: "Jane Smith",
      content: "Your latest React tutorial was amazing — thank you!",
      date: "2025-10-30",
      status: "unread",
    },
  ];

  const typeIcons = {
    support: <HelpCircle className="w-4 h-4 text-blue-500" />,
    business: <Briefcase className="w-4 h-4 text-purple-500" />,
    general: <Heart className="w-4 h-4 text-pink-500" />,
  };

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      const matchesFilter = filter === "all" || msg.type === filter;
      const matchesSearch =
        msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [messages, filter, searchTerm]);

  return (
    <main className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-500" />
          Admin Messages
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search messages..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-64 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              className="text-sm border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="support">Support</option>
              <option value="business">Business</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>
      </div>

      {/* Message Cards */}
      <div className="space-y-4">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start justify-between p-4 rounded-xl border transition-all ${
                msg.status === "unread"
                  ? "bg-blue-50 border-blue-200"
                  : "bg-gray-50 border-gray-200"
              } hover:shadow-sm`}
            >
              {/* Message info */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {typeIcons[msg.type]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{msg.sender}</h3>
                    <span className="text-xs text-gray-500">{msg.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-1">{msg.content}</p>
                  <div className="mt-2">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full capitalize ${
                        msg.type === "support"
                          ? "bg-blue-100 text-blue-700"
                          : msg.type === "business"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-pink-100 text-pink-700"
                      }`}
                    >
                      {typeIcons[msg.type]}
                      {msg.type}
                    </span>
                    {msg.status === "unread" && (
                      <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 ml-4">
                <button
                  className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition"
                  title="Reply"
                >
                  <Reply className="w-4 h-4" />
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-green-100 text-green-600 transition"
                  title="Mark as read"
                >
                  <CheckCircle className="w-4 h-4" />
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic py-6">
            No messages found.
          </p>
        )}
      </div>
    </main>
  );
};

export default AdminMessages;
