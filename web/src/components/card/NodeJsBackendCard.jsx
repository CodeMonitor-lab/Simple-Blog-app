"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export const NodeJsBackendCard = ({ filtered }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((s) => (
        <article
          key={s.id}
          className="bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {s.category}
              </p>
            </div>
            <div className="text-sm text-gray-400">
              {s.tags.slice(0, 2).join(" • ")}
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {s.summary}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {s.tags.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 border rounded-full bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={s.docs}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              Docs <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </article>
      ))}

      {filtered.length === 0 && (
        <div className="col-span-full text-center py-12 text-gray-500">
          No results found.
        </div>
      )}
    </div>
  );
};
