"use client";

import React, { useState } from "react";
import { Code2 } from "lucide-react";
import { SnippetCard } from "@/components/card";

const Page = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="flex flex-col items-center text-center gap-4 mb-12">
        <Code2 className="w-12 h-12 text-blue-600" />

        <h1 className="text-3xl font-bold">
          Developer Code Snippets
        </h1>

        <p className="text-gray-600 text-lg max-w-xl">
          Explore helpful, reusable code snippets for React, Next.js, and modern JavaScript.
        </p>
      </header>

      {/* Snippet Listing */}
      <section className="space-y-6">
        <SnippetCard copiedId={copiedId} handleCopy={handleCopy} />
      </section>
    </main>
  );
};

export default Page;
