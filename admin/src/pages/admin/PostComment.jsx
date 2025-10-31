import React from "react";
import { Trash2, Edit3, CheckCircle, XCircle } from "lucide-react";

const PostComment = () => {
  const comments = [
    {
      id: 1,
      user: "John Doe",
      content: "This is a great post! Thanks for sharing.",
      date: "2023-10-01",
      status: "approved",
    },
    {
      id: 2,
      user: "Jane Smith",
      content: "I found this article very helpful.",
      date: "2023-10-02",
      status: "pending",
    },
  ];

  const isLoading = false; // Simulate loading state
  const hasError = false; // Simulate error state

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Manage Post Comments</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {isLoading ? (
          <div className="p-6 text-center text-gray-500">Loading comments...</div>
        ) : hasError ? (
          <div className="p-6 text-center text-red-500">Failed to load comments. Please try again.</div>
        ) : comments.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No comments available.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4 text-sm font-medium">User</th>
                  <th className="p-4 text-sm font-medium">Comment</th>
                  <th className="p-4 text-sm font-medium">Date</th>
                  <th className="p-4 text-sm font-medium">Status</th>
                  <th className="p-4 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment) => (
                  <tr
                    key={comment.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="p-4 text-gray-800">{comment.user}</td>
                    <td className="p-4 text-gray-600">{comment.content}</td>
                    <td className="p-4 text-gray-500">{comment.date}</td>
                    <td className="p-4">
                      {comment.status === "approved" ? (
                        <span className="inline-flex items-center text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Approved
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-yellow-600 font-medium">
                          <XCircle className="w-4 h-4 mr-1" />
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="p-4 flex space-x-4">
                      <button
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        aria-label={`Edit comment by ${comment.user}`}
                      >
                        <Edit3 className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 transition-colors duration-200"
                        aria-label={`Delete comment by ${comment.user}`}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        © 2023 Admin Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default PostComment;