"use client";
import React from "react";
import { Cpu, Code2, Globe, Layers } from "lucide-react";

const TechStackGuidesPage = () => {
  const guides = [
    {
      id: 1,
      title: "MERN Stack",
      icon: <Layers className="w-6 h-6 text-green-600" />,
      description:
        "A full-stack JavaScript solution combining MongoDB, Express, React, and Node.js. Ideal for dynamic web apps.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Next.js Full Stack",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      description:
        "A React framework for server-side rendering, static generation, and building SEO-optimized web apps.",
      technologies: ["Next.js", "React", "TailwindCSS", "Prisma", "Vercel"],
    },
    {
      id: 3,
      title: "JAMstack",
      icon: <Code2 className="w-6 h-6 text-purple-600" />,
      description:
        "Modern web architecture using JavaScript, APIs, and Markup. Great for fast, secure static websites.",
      technologies: ["Gatsby", "Next.js", "Contentful", "Netlify"],
    },
    {
      id: 4,
      title: "MEAN Stack",
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      description:
        "A powerful stack for enterprise apps using Angular on the frontend and Node.js on the backend.",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <Cpu className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold tracking-tight">Tech Stack Guides</h1>
      </div>

      <p className="text-gray-600 mb-10 max-w-2xl">
        Learn about popular web development stacks and how to choose the right
        one for your project. Each stack includes frontend, backend, and
        deployment technologies.
      </p>

      {/* Guides Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="border rounded-2xl shadow-sm hover:shadow-md transition bg-white p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              {guide.icon}
              <h2 className="text-xl font-semibold">{guide.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{guide.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {guide.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="mt-20 bg-gray-50 rounded-2xl p-10 border text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Build Your Perfect Stack
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Choose your preferred stack and start building production-ready apps.
          Explore guides, tutorials, and best practices to level up your skills.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Explore Stack Tutorials
        </a>
      </section>
    </section>
  );
};

export default TechStackGuidesPage;
