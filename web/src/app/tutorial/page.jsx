"use client";

import React from "react";
import Link from "next/link";

const HomePage = () => {
  const tutorialRoute = [
    { path: "/tutorial/react", name: "React" },
    { path: "/tutorial/next-js", name: "NextJS" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Choose Tutorial</h1>

      <div className="space-y-3">
        {tutorialRoute.map((tutorial, index) => (
          <Link
            key={index}
            href={tutorial.path}
            className="block border p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <p className="text-lg font-medium">{tutorial.name}</p>
            <span className="text-blue-500 text-sm">Start Learning →</span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
