import React from "react";

const PreviewPost = ({ post }) => {
  if (!post || !post.title) {
    return (
      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
        📰 Fill out the form to see your post preview here.
      </div>
    );
  }

  return (
    <div className="border rounded-xl p-6 bg-white shadow-sm">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      )}

      <h2 className="text-2xl font-bold text-slate-800 mb-2">{post.title}</h2>
      {post.category && (
        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium rounded-full mb-3">
          {post.category}
        </span>
      )}

      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line mb-4">
        {post.content}
      </p>

      <div className="text-xs text-gray-500 space-x-2">
        {post.author && <span>✍️ {post.author}</span>}
        <span>📅 {new Date().toLocaleDateString()}</span>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreviewPost;
