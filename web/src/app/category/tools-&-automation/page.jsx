"use client";
import React from "react";
import { Cpu, Settings, Rocket, Zap, Globe, Database, Bot } from "lucide-react";
import { motion } from "framer-motion";

const ToolsAndAutomationPage = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 prose dark:prose-invert">
      {/* Header */}
      <header className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <Settings className="w-12 h-12 text-sky-500" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Tools & Automation</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            The complete toolkit I use as a developer and blogger — from coding
            and design to SEO, AI, and workflow automation.
          </p>
        </motion.div>
      </header>

      {/* Development Tools */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-600" /> Development Stack
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Next.js + React:</strong> for building fast, SEO-ready web
            apps with hybrid rendering.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> for beautiful, responsive UI with a
            utility-first design system.
          </li>
          <li>
            <strong>Vercel:</strong> for smooth CI/CD deployment directly from
            GitHub.
          </li>
          <li>
            <strong>Supabase / Firebase:</strong> for backend, auth, and
            database services.
          </li>
        </ul>
      </section>

      {/* SEO & Growth Tools */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Globe className="w-5 h-5 text-green-600" /> SEO & Analytics Tools
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Google Lighthouse:</strong> to audit performance and
            accessibility.
          </li>
          <li>
            <strong>Ahrefs / SEMrush:</strong> for keyword research and backlink
            tracking.
          </li>
          <li>
            <strong>Google Analytics + Search Console:</strong> to monitor
            traffic, impressions, and ranking.
          </li>
          <li>
            <strong>Next.js Metadata API:</strong> for structured SEO setup on
            each route.
          </li>
        </ul>
      </section>

      {/* Automation & AI */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-600" /> AI & Automation
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            <strong>ChatGPT / Claude:</strong> for content drafting, code
            refactoring, and idea generation.
          </li>
          <li>
            <strong>Zapier / n8n:</strong> to automate blog publishing and
            social media updates.
          </li>
          <li>
            <strong>GitHub Actions:</strong> to automate builds, testing, and
            deployments.
          </li>
          <li>
            <strong>Notion API:</strong> for dynamic content sync between my
            notes and blog posts.
          </li>
        </ul>
      </section>

      {/* Deployment & Optimization */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Rocket className="w-5 h-5 text-orange-500" /> Deployment & Optimization
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Vercel + Edge Caching:</strong> for blazing fast global
            delivery.
          </li>
          <li>
            <strong>Image Optimization:</strong> using Next.js Image component.
          </li>
          <li>
            <strong>Bundle Analysis:</strong> to reduce JS size and boost load
            time.
          </li>
        </ul>
      </section>

      {/* Closing Thoughts */}
      <footer className="border-t pt-8 mt-12 text-center text-gray-500">
        <p>
          🚀 These are the exact tools and automations that power my projects,
          tutorials, and blog growth.  
          <br />
          Want to learn how to integrate them step by step? Check out my upcoming tutorials on <strong>Dev
          Automation & AI Workflow</strong>.
        </p>
      </footer>
    </article>
  );
};

export default ToolsAndAutomationPage;
