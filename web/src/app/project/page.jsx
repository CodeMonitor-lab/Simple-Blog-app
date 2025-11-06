import React from "react";

// Sample project data — includes optional preview link
const projects = [
  {
    id: 1,
    title: "React Food Ordering App",
    description:
      "A full-stack food delivery web app built with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/CodeMonitor-lab/food-ordering-app",
    preview: "https://food-ordering-app.vercel.app", // 👈 add preview
  },
  {
    id: 2,
    title: "SEO Audit Dashboard",
    description:
      "Technical SEO audit tool for websites with Lighthouse integration and report export.",
    tech: ["Next.js", "Tailwind CSS", "Vercel Analytics"],
    link: "https://github.com/CodeMonitor-lab/seo-audit-dashboard",
    preview: "https://seo-audit-dashboard.vercel.app",
  },
  {
    id: 3,
    title: "AI Blog Content Generator",
    description:
      "An AI-powered blog post generator using OpenAI API and Next.js 15 App Router.",
    tech: ["Next.js", "OpenAI API", "TypeScript"],
    link: "https://github.com/CodeMonitor-lab/ai-blog-generator",
    preview: "https://ai-blog-generator.vercel.app",
  },
];

const ProjectsPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* 🧠 Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Featured Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore a collection of full-stack projects built with modern web technologies.
        </p>
      </div>

      {/* 💻 Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 🔘 Action Buttons */}
            <div className="flex items-center justify-between mt-auto">
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition"
              >
                Preview
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
