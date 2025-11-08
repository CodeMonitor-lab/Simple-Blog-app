"use client";
import React from "react";
import {
  Code2,
  Rocket,
  Globe,
  Wrench,
  BarChart2,
  Cpu,
  Chrome,
  Github,
  Search,
  Layers,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const SeaAndGrowthPage = () => {
  return (
    <article className="max-w-5xl mx-auto px-6 py-16 prose dark:prose-invert">
      {/* HEADER */}
      <header className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Rocket className="w-14 h-14 mx-auto text-sky-500 mb-4" />
          <h1 className="text-4xl font-bold mb-3">
            Building Websites That Work — Fast, Scalable & SEO-Ready
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Hi, I’m <strong>Johny Since</strong> — a full-stack developer who
            builds all kinds of websites that help brands grow through clean
            code, great design, and smart SEO.
          </p>
        </motion.div>
      </header>

      {/* TECH STACK */}
      <section className="space-y-10 mb-16">
        <h2 className="text-3xl font-semibold flex items-center gap-2">
          <Code2 className="w-6 h-6 text-emerald-500" />
          My JavaScript Stack
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Layers className="text-blue-500 w-6 h-6" />,
              title: "Next.js",
              desc: "For fast, SEO-friendly, and scalable web apps with SSR and static generation.",
            },
            {
              icon: <Cpu className="text-yellow-500 w-6 h-6" />,
              title: "Node.js",
              desc: "Backend runtime that powers APIs and server-side logic efficiently.",
            },
            {
              icon: <Wrench className="text-sky-500 w-6 h-6" />,
              title: "Tailwind CSS",
              desc: "Utility-first CSS for responsive, modern, and maintainable UI.",
            },
            {
              icon: <Github className="text-gray-700 w-6 h-6" />,
              title: "GitHub & Vercel",
              desc: "Version control + instant deployments to scale projects quickly.",
            },
            {
              icon: <BarChart2 className="text-green-600 w-6 h-6" />,
              title: "MongoDB / Firebase",
              desc: "Reliable databases for scalable and flexible data handling.",
            },
            {
              icon: <Globe className="text-indigo-500 w-6 h-6" />,
              title: "React Ecosystem",
              desc: "Smooth frontend experience built with reusable, modular components.",
            },
          ].map((tool, i) => (
            <motion.div
              key={i}
              className="p-5 border rounded-2xl shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
            >
              <div className="flex items-center gap-3 mb-2">
                {tool.icon}
                <h3 className="font-semibold text-lg">{tool.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO & CREATOR TOOLS */}
      <section className="space-y-10 mb-16">
        <h2 className="text-3xl font-semibold flex items-center gap-2">
          <Search className="w-6 h-6 text-amber-500" />
          Tools I Use to Build, Rank & Grow
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Chrome className="text-blue-500 w-6 h-6" />,
              title: "Google Lighthouse",
              desc: "Performance and SEO audits to keep pages blazing fast.",
            },
            {
              icon: <Search className="text-green-500 w-6 h-6" />,
              title: "Ahrefs & SEMrush",
              desc: "Keyword research, backlinks, and competitive insights.",
            },
            {
              icon: <Globe className="text-purple-500 w-6 h-6" />,
              title: "Google Search Console",
              desc: "Monitor indexing, performance, and discoverability.",
            },
            {
              icon: <BarChart2 className="text-sky-500 w-6 h-6" />,
              title: "Google Analytics",
              desc: "Analyze visitor behavior and optimize growth strategies.",
            },
            {
              icon: <Cpu className="text-red-500 w-6 h-6" />,
              title: "VS Code & Postman",
              desc: "Coding, testing APIs, and maintaining project consistency.",
            },
            {
              icon: <Github className="text-gray-700 w-6 h-6" />,
              title: "GitHub Projects",
              desc: "Track issues, version control, and CI/CD pipelines.",
            },
          ].map((tool, i) => (
            <motion.div
              key={i}
              className="p-5 border rounded-2xl shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
            >
              <div className="flex items-center gap-3 mb-2">
                {tool.icon}
                <h3 className="font-semibold text-lg">{tool.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CREATOR PHILOSOPHY */}
      <section className="mb-16 space-y-6">
        <h2 className="text-3xl font-semibold flex items-center gap-2">
          <Rocket className="w-6 h-6 text-sky-600" />
          Growth as a Creator
        </h2>
        <p>
          I believe every website should do more than look good — it should
          perform, convert, and inspire. I build with a focus on performance,
          accessibility, SEO, and storytelling. My goal is to help creators and
          brands grow online with clean code and clear strategy.
        </p>
        <blockquote className="border-l-4 border-sky-500 pl-4 italic text-gray-600 dark:text-gray-300">
          “Good design and smart SEO turn ideas into opportunities.”
        </blockquote>
      </section>

      {/* CTA */}
      <footer className="text-center mt-20 pt-10 border-t">
        <h3 className="text-xl font-semibold mb-2">
          Let’s Build Something Meaningful — Together
        </h3>
        <p className="text-gray-500 mb-6">
          Have a project idea or want to collaborate? Reach out anytime.
        </p>
        <a
          href="mailto:contact@johnysince.dev"
          className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-xl transition"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </a>
      </footer>
    </article>
  );
};

export default SeaAndGrowthPage;
