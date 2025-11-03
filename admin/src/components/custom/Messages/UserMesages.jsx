import React, { useState, useMemo } from "react";
import {
  Search,
  MessageCircle,
  Send,
  MoreVertical,
  Reply,
  Trash2,
  CheckCircle,
} from "lucide-react";

const AdminMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

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

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      const matchesFilter = filter === "all" || msg.type === filter;
      const matchesSearch =
        msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [messages, filter, searchTerm]);

  const handleReply = (id) => {
    if (replyText.trim() === "") return;
    console.log(`Reply to message ${id}:`, replyText);
    alert(`Replied to ${id}: "${replyText}"`);
    setReplyingTo(null);
    setReplyText("");
  };

  return (
    <main className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          Admin Inbox
        </h2>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 w-48 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Message area */}
      <div className="h-[600px] overflow-y-auto p-4 bg-gray-50">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-6 ${
                msg.sender === "Admin"
                  ? "text-right flex flex-col items-end"
                  : "text-left flex flex-col items-start"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-gray-700">
                  {msg.sender}
                </span>
                <span className="text-xs text-gray-400">{msg.date}</span>
              </div>

              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
                  msg.sender === "Admin"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 border rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() =>
                    setReplyingTo(replyingTo === msg.id ? null : msg.id)
                  }
                  className="text-gray-500 hover:text-blue-500 text-xs flex items-center gap-1"
                >
                  <Reply className="w-3 h-3" /> Reply
                </button>
                <button className="text-gray-400 hover:text-green-500 text-xs flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Mark read
                </button>
                <button className="text-gray-400 hover:text-red-500 text-xs flex items-center gap-1">
                  <Trash2 className="w-3 h-3" /> Delete
                </button>
                <button className="text-gray-400 hover:text-gray-700 text-xs">
                  <MoreVertical className="w-3 h-3" />
                </button>
              </div>

              {replyingTo === msg.id && (
                <div className="mt-3 flex items-center gap-2 w-full max-w-[75%]">
                  <input
                    type="text"
                    placeholder="Write a reply..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-400 bg-white"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button
                    onClick={() => handleReply(msg.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 mt-10 italic">
            No messages found.
          </p>
        )}
      </div>
    </main>
  );
};

export default AdminMessages;
