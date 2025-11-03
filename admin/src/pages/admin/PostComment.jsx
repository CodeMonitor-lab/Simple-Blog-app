import React from "react";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  CheckCircle2,
  Clock3,
  Trash2,
  User,
} from "lucide-react";
import comments from "@/components/comment.json";

const PostComment = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      {/* ===== Header ===== */}
      <header className="text-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <MessageCircle className="w-6 h-6 text-indigo-600" />
          Blog Comments Overview
        </h1>
        <p className="text-gray-500 text-sm">
          Review comments and see which posts they belong to.
        </p>
      </header>

      {/* ===== Comments Section ===== */}
      <section className="max-w-2xl mx-auto px-4">
        <div className="space-y-6">
          {comments.map((comment) => {
            // ✅ create a clean URL-friendly slug from title
            const postSlug = comment.post.title
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");

            return (
              <div
                key={comment.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-5"
              >
                {/* ===== Post Header ===== */}
                <div className="flex items-center gap-3 mb-4">
                  <a href={`/posts/${postSlug}`}>
                    <img
                      src={comment.post.image}
                      alt={comment.post.title}
                      className="w-14 h-14 rounded-xl object-cover border border-gray-100"
                    />
                  </a>
                  <div className="flex-1">
                    <a
                      href={`/posts/${postSlug}`}
                      className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition"
                    >
                      {comment.post.title}
                    </a>
                    <p className="text-xs text-gray-500">
                      Commented by{" "}
                      <span className="font-medium">{comment.user}</span>
                    </p>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>

                {/* ===== Comment Body ===== */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {comment.content}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
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

                    {/* ===== Actions ===== */}
                    <div className="flex items-center gap-4 mt-3 border-t border-gray-100 pt-3">
                      <button className="text-gray-500 hover:text-red-500 flex items-center gap-1 text-sm transition">
                        <Heart className="w-4 h-4" /> {comment.likes}
                      </button>
                      <button className="text-gray-500 hover:text-blue-600 text-sm transition">
                        Reply
                      </button>
                      <button className="text-gray-400 hover:text-red-600 text-sm transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-16 text-center text-gray-400 text-xs">
        © 2025 Blog Admin · Comments Management
      </footer>
    </main>
  );
};

export default PostComment;
