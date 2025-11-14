import React from "react";
import snippetsData from "@/data/code-snippets.json";
import { Copy, CheckCircle } from "lucide-react";

const SnippetCard = ({ copiedId, handleCopy }) => {
  const { snippets } = snippetsData;

  return (
    <div className="space-y-10">
      {snippets.map((snippet) => (
        <article
          key={snippet.id}
          className="border border-gray-200 rounded-2xl shadow-sm bg-white p-6"
        >
          <header className="mb-4">
            <h2 className="text-xl font-semibold">{snippet.title}</h2>
            <p className="text-gray-600 mt-1">{snippet.description}</p>
          </header>

          {/* ChatGPT-style code container */}
          <div className="relative">
            {/* Copy Button */}
            <button
              onClick={() => handleCopy(snippet.id, snippet.code)}
              className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 
                         text-xs bg-gray-800 text-white rounded-md opacity-70 
                         hover:opacity-100 transition"
            >
              {copiedId === snippet.id ? (
                <>
                  <CheckCircle size={14} className="text-green-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy
                </>
              )}
            </button>

            {/* Code Block */}
            <pre className="bg-[#0d0d0d] text-gray-100 rounded-xl p-4 overflow-x-auto text-sm hide-scrollbar">
              <code>{snippet.code}</code>
            </pre>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SnippetCard;
