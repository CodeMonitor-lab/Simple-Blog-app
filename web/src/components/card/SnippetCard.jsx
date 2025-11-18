import React from "react";
import snippetsData from "@/data/code-snippets.json";
import { Copy, CheckCircle } from "lucide-react";

const SnippetCard = ({ copiedId, handleCopy }) => {
  const { snippets } = snippetsData;

  return (
    <main className="space-y-10">
      {snippets.map((snippet) => (
        <article key={snippet.id} className="space-y-4">

          {/* Header Card */}
          <div className="border border-gray-200 rounded-2xl shadow-sm bg-white p-6">
            <h2 className="text-xl font-semibold">{snippet.title}</h2>
            <p className="text-gray-600 mt-1">{snippet.description}</p>
          </div>

          {/* Code Container */}
          <div className="relative group">

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(snippet.id, snippet.code)}
              className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 
                text-xs bg-gray-900 text-white rounded-md opacity-70 
                hover:opacity-100 transition duration-200"
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
            <pre className="bg-[#0f0d4e] text-gray-100 rounded-xl p-4 overflow-x-auto text-sm hide-scrollbar">
              <code>{snippet.code}</code>
            </pre>
          </div>
        </article>
      ))}
    </main>
  );
};

export default SnippetCard;
