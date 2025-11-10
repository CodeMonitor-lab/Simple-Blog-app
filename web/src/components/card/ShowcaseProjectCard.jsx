"use client";
import React from "react";
import { motion } from "framer-motion";
import projects from "@/data/showcase.json";

export default function ProjectList() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* 🔹 Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-900"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border rounded-full bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </motion.div>

      {/* Empty State */}
      {projects.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          No projects found. Please check back soon!
        </p>
      )}
    </main>
  );
}
