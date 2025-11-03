import React from "react";
import {
  Trash2,
  Edit3,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  MoreVertical,
  User,
} from "lucide-react";

const PostComment = () => {
  const comments = [
    {
      id: 1,
      user: "John Doe",
      content: "This post was really insightful! Thanks for sharing.",
      date: "Oct 1, 2023",
      status: "approved",
    },
    {
      id: 2,
      user: "Jane Smith",
      content:
        "I love how this was explained so clearly. Great job on this article!",
      date: "Oct 2, 2023",
      status: "pending",
    },
  ];

  const isLoading = false;
  const hasError = false;

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* ===== Header ===== */}
      <header className="flex items-center gap-2 mb-6">
        <MessageSquareText className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-semibold text-gray-800">
          Post Comments
        </h1>
      </header>

      {/* ===== Comments Section ===== */}
      <section className="max-w-2xl mx-auto">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading comments...</p>
        ) : hasError ? (
          <p className="text-center text-red-500">
            Failed to load comments. Try again.
          </p>
        ) : comments.length === 0 ? (
          <p className="text-center text-gray-500">No comments yet.</p>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow transition-all duration-200"
              >
                {/* Avatar */}
                <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-500" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-gray-800">
                      {comment.user}
                    </h3>
                    <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    {comment.content}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{comment.date}</span>
                    {comment.status === "approved" ? (
                      <span className="flex items-center text-green-600 font-medium">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Approved
                      </span>
                    ) : (
                      <span className="flex items-center text-yellow-600 font-medium">
                        <Clock3 className="w-3 h-3 mr-1" /> Pending
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-2 ml-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    aria-label="Edit comment"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    aria-label="Delete comment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-10 text-center text-gray-400 text-xs">
        © 2025 Admin Dashboard
      </footer>
    </main>
  );
};

export default PostComment;
