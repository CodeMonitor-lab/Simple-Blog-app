import React, { useState, useMemo, useCallback } from "react";
import {
  Search,
  Mail,
  User,
  Calendar,
  Clock,
  Star,
  Trash2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- Mock Data (moved outside component) ---
const MESSAGES = [
  {
    id: 1,
    sender: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    subject: "Guest Post Proposal",
    content:
      "Hi there! I love your blog and would like to contribute a guest post about sustainable living practices...",
    date: "2024-01-15",
    time: "14:30",
    read: false,
    starred: true,
    category: "collaboration",
  },
  {
    id: 2,
    sender: "Michael Chen",
    email: "michael.chen@example.com",
    subject: "Technical Issue Report",
    content:
      "I noticed a bug on your contact form - when submitting with special characters, it returns an error.",
    date: "2024-01-14",
    time: "09:15",
    read: true,
    starred: false,
    category: "support",
  },
  {
    id: 3,
    sender: "Emma Rodriguez",
    email: "emma.r@example.com",
    subject: "Newsletter Subscription",
    content:
      "Hello! I just subscribed to your newsletter and wanted to say how much I appreciate your content...",
    date: "2024-01-13",
    time: "16:45",
    read: false,
    starred: false,
    category: "general",
  },
  {
    id: 4,
    sender: "David Kim",
    email: "david.kim@example.com",
    subject: "Partnership Opportunity",
    content:
      "I represent a tech startup that would love to collaborate with your blog...",
    date: "2024-01-12",
    time: "11:20",
    read: true,
    starred: true,
    category: "collaboration",
  },
  {
    id: 5,
    sender: "Lisa Thompson",
    email: "lisa.t@example.com",
    subject: "Content Feedback",
    content:
      "Your recent article on CSS Grid was fantastic! I implemented your suggestions...",
    date: "2024-01-11",
    time: "13:50",
    read: true,
    starred: false,
    category: "general",
  },
  {
    id: 6,
    sender: "Alex Morgan",
    email: "alex.m@example.com",
    subject: "Sponsorship Inquiry",
    content:
      "We're interested in sponsoring your blog for our upcoming product launch...",
    date: "2024-01-10",
    time: "10:05",
    read: false,
    starred: true,
    category: "business",
  },
];

// --- Utility function (outside component) ---
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

// --- Message List Item Component ---
const MessageItem = ({ message, isSelected, onSelect }) => (
  <div
    onClick={() => onSelect(message)}
    className={`p-4 border-b border-gray-100 cursor-pointer transition-colors 
      ${isSelected ? "bg-blue-50 border-l-4 border-l-blue-500" : ""}
      ${!message.read ? "bg-gray-50 font-medium" : "hover:bg-gray-50"}
    `}
  >
    <div className="flex items-start justify-between">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-gray-900 truncate">
            {message.sender}
          </span>
          {message.starred && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
        </div>
        <p className="text-sm text-gray-600 truncate mb-1">{message.subject}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{message.content}</p>
      </div>
      <div className="flex flex-col items-end ml-2">
        <span className="text-xs text-gray-500">{formatDate(message.date)}</span>
        <span className="text-xs text-gray-400 mt-1">{message.time}</span>
      </div>
    </div>
  </div>
);

// --- Message Detail Component ---
const MessageDetail = ({ message }) => (
  <div className="h-full flex flex-col">
    <div className="bg-white border-b border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {message.subject}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> <span>{message.sender}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> <span>{message.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> <span>{message.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> <span>{message.time}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-600 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg">
            <Star
              className={`w-5 h-5 ${message.starred ? "fill-current text-yellow-500" : ""}`}
            />
          </button>
          <button className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg">
            <Trash2 className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <div className="flex-1 p-6 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Reply
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 border rounded-lg hover:bg-gray-50">
          Forward
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 border rounded-lg hover:bg-gray-50">
          Archive
        </button>
      </div>
    </div>
  </div>
);

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // --- useMemo for performance ---
  const filteredMessages = useMemo(() => {
    return MESSAGES.filter(
      (msg) =>
        (msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
          msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          msg.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filter === "all" || msg.category === filter)
    );
  }, [searchTerm, filter]);

  const totalPages = Math.ceil(filteredMessages.length / 5);
  const paginatedMessages = useMemo(() => {
    const start = (currentPage - 1) * 5;
    return filteredMessages.slice(start, start + 5);
  }, [filteredMessages, currentPage]);

  const handlePageChange = useCallback(
    (page) => setCurrentPage(Math.max(1, Math.min(page, totalPages))),
    [totalPages]
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar List */}
      <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">
              {filteredMessages.length} messages
            </span>
            <select
              className="text-sm border rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="collaboration">Collaboration</option>
              <option value="support">Support</option>
              <option value="general">General</option>
              <option value="business">Business</option>
            </select>
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {paginatedMessages.map((msg) => (
            <MessageItem
              key={msg.id}
              message={msg}
              isSelected={selectedMessage?.id === msg.id}
              onSelect={setSelectedMessage}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Message Detail */}
      <div className="flex-1 bg-gray-50">
        {selectedMessage ? (
          <MessageDetail message={selectedMessage} />
        ) : (
          <div className="h-full flex items-center justify-center text-center">
            <div>
              <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">
                No message selected
              </h3>
              <p className="text-gray-600">
                Choose a message from the list to view its details.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
