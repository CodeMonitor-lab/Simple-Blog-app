"use client";
import React, { useState } from "react";
import { Code2 } from "lucide-react";
import { SnippetCard } from "@/components/card";

const CodeSnippetsPage = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="flex items-center gap-3 mb-10">
        <Code2 className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold tracking-tight">
          Developer Code Snippets
        </h1>
      </header>

      <p className="text-gray-600 mb-12">
        Explore helpful, reusable code snippets for React, Next.js, and modern JavaScript.
      </p>

      {/* Snippet Cards */}
      <SnippetCard copiedId={copiedId} handleCopy={handleCopy} />
    </main>
  );
};

export default CodeSnippetsPage;
