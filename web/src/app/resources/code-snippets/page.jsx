"use client";
import React, { useState } from "react";
import { Code2, Copy, CheckCircle } from "lucide-react";

const CodeSnippetsPage = () => {
  const [copiedId, setCopiedId] = useState(null);

  const snippets = [
    {
      id: 1,
      title: "React useState Example",
      description: "A simple example of using the useState w hook in React to manage component state dynamically.",
      language: "jsx",
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;`,
    },
    {
      id: 2,
      title: "Fetch Data in Next.js",
      description: "Fetching data from an API using getServerSideProps in Next.js for server-side rendering.",
      language: "js",
      code: `export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}`,
    },
  ];

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* 🧠 Header Section */}
      <header className="flex items-center gap-3 mb-10">
        <Code2 className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold tracking-tight">Developer Code Snippets</h1>
      </header>

      <p className="text-gray-600 mb-12">
        Explore helpful, reusable code snippets for React, Next.js, and modern JavaScript.
      </p>

      {/* 🧩 Snippet Cards */}
      <div className="grid gap-10">
        {snippets.map((snippet) => (
          <article
            key={snippet.id}
            className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white p-6"
          >
            <header className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">{snippet.title}</h2>
              <button
                onClick={() => handleCopy(snippet.id, snippet.code)}
                className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                {copiedId === snippet.id ? (
                  <>
                    <CheckCircle size={16} className="text-green-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </button>
            </header>

            <p className="text-gray-600 mb-3">{snippet.description}</p>

            <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm">
              <code>{snippet.code}</code>
            </pre>
          </article>
        ))}
      </div>
    </main>
  );
};

export default CodeSnippetsPage;
