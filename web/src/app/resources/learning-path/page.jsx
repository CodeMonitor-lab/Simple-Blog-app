import React from "react";
import { BookOpen, CheckCircle2, ChevronRight } from "lucide-react";

const LearningPathPage = () => {
  const paths = [
    {
      id: 1,
      title: "1. HTML & CSS Fundamentals",
      description:
        "Start with the basics of web structure and styling. Learn how to build layouts, use semantic tags, and make responsive designs.",
      topics: ["HTML5 tags", "Flexbox & Grid", "Media Queries", "Forms & Inputs"],
      status: "completed",
    },
    {
      id: 2,
      title: "2. JavaScript Essentials",
      description:
        "Understand the core of web interactivity. Learn about DOM manipulation, ES6 features, and asynchronous programming.",
      topics: ["Variables & Functions", "DOM", "Fetch API", "Promises & Async/Await"],
      status: "completed",
    },
    {
      id: 3,
      title: "3. React Development",
      description:
        "Dive into modern UI development with React. Master components, hooks, props, and state management.",
      topics: ["Components", "useState & useEffect", "Props & Context", "Routing"],
      status: "in-progress",
    },
    {
      id: 4,
      title: "4. Next.js & Full Stack Integration",
      description:
        "Learn how to build production-grade apps with server-side rendering, API routes, and optimized performance using Next.js.",
      topics: ["SSR & SSG", "API Routes", "Dynamic Routing", "Deployment"],
      status: "upcoming",
    },
    {
      id: 5,
      title: "5. Deployment & SEO Optimization",
      description:
        "Learn to deploy your app using Vercel and make it SEO-friendly for better reach and discoverability.",
      topics: ["Vercel Setup", "SEO Tags", "Sitemap & Robots.txt", "Performance Audit"],
      status: "upcoming",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50 border-green-200";
      case "in-progress":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* 🧭 Header */}
      <header className="flex items-center gap-3 mb-10">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold tracking-tight">Learning Path</h1>
      </header>

      <p className="text-gray-600 mb-12">
        Follow this guided path to become a modern full-stack web developer. Each stage builds on the last,
        helping you progress step by step.
      </p>

      {/* 📘 Learning Cards */}
      <div className="space-y-8">
        {paths.map((path) => (
          <article
            key={path.id}
            className={`border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all ${getStatusColor(
              path.status
            )}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">{path.title}</h2>
              {path.status === "completed" && (
                <CheckCircle2 className="text-green-500 w-5 h-5" />
              )}
              {path.status === "in-progress" && (
                <ChevronRight className="text-blue-500 w-5 h-5" />
              )}
            </div>
            <p className="text-gray-700 mb-3">{path.description}</p>
            <ul className="list-disc pl-6 text-gray-600">
              {path.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
};

export default LearningPathPage;
