"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Eye,
  Palette,
  Type,
  Wand,
  Grid,
  Monitor,
  Phone,
  Layers,
  Mail,
} from "lucide-react";

export default function UIUXPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <header className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Layout className="w-14 h-14 mx-auto text-sky-500 mb-4" />
          <h1 className="text-4xl font-extrabold mb-3">UI & UX — Design System</h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Principles, components, and patterns I use to design and build
            delightful, accessible, and performant user experiences.
          </p>
        </motion.div>
      </header>

      {/* Principles */}
      <section className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <Eye className="w-6 h-6 text-sky-500" />, title: "Clarity", desc: "Interfaces that communicate purpose and hierarchy." },
          { icon: <Palette className="w-6 h-6 text-emerald-500" />, title: "Consistency", desc: "Reusable components and predictable interactions." },
          { icon: <Type className="w-6 h-6 text-amber-500" />, title: "Readability", desc: "Readable typography and comfortable line-lengths." },
          { icon: <Wand className="w-6 h-6 text-violet-500" />, title: "Delight", desc: "Micro-interactions that make the product feel alive." },
        ].map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -4 }}
            className="p-6 bg-white dark:bg-slate-900 border rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">{p.icon}<h3 className="font-semibold">{p.title}</h3></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Design Tokens */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Palette className="w-5 h-5" /> Design Tokens</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Colors */}
          <div className="p-6 bg-white dark:bg-slate-900 border rounded-2xl">
            <h4 className="font-semibold mb-3">Primary Colors</h4>
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 rounded-md bg-sky-600 border" />
              <div className="w-12 h-12 rounded-md bg-sky-400 border" />
              <div className="w-12 h-12 rounded-md bg-amber-400 border" />
              <div className="w-12 h-12 rounded-md bg-green-500 border" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Use primary for CTAs, accents, and highlights.</p>
          </div>

          {/* Typography */}
          <div className="p-6 bg-white dark:bg-slate-900 border rounded-2xl">
            <h4 className="font-semibold mb-3">Typography</h4>
            <p className="font-semibold text-lg">Inter / system UI</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">H1: 36–48px<br/>H2: 24–30px<br/>Body: 16px, line-height 1.6</p>
          </div>

          {/* Spacing */}
          <div className="p-6 bg-white dark:bg-slate-900 border rounded-2xl">
            <h4 className="font-semibold mb-3">Spacing Scale</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">4 / 8 / 12 / 16 / 24 / 32 — use consistent spacing tokens.</p>
          </div>

          {/* Radius & Shadows */}
          <div className="p-6 bg-white dark:bg-slate-900 border rounded-2xl">
            <h4 className="font-semibold mb-3">Radius & Elevation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Border radius: 8px (cards), 12px (dialogs). Soft shadows for elevation.</p>
          </div>
        </div>

        {/* Accessibility */}
        <div className="p-6 bg-white dark:bg-slate-900 border rounded-2xl">
          <h4 className="font-semibold mb-3">Accessibility & Performance</h4>
          <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400">
            <li>Contrast ratios meet WCAG AA for body text.</li>
            <li>Semantic HTML and keyboard navigation for all components.</li>
            <li>Images optimized (responsive sizes + lazy loading).</li>
            <li>Critical CSS inline, defer non-critical styles — keep LCP low.</li>
          </ul>
        </div>
      </section>

      {/* Component Gallery */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Grid className="w-5 h-5" /> Component Gallery</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Card example */}
          <motion.div className="p-6 bg-white dark:bg-slate-900 border rounded-2xl shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Card Title</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Brief description of the card content and why it's useful.</p>
              </div>
              <div className="text-xs text-gray-400">Tag</div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-2 rounded-lg bg-sky-600 text-white text-sm">Primary</button>
              <button className="px-3 py-2 rounded-lg border text-sm">Secondary</button>
            </div>
          </motion.div>

          {/* Form example */}
          <motion.form className="p-6 bg-white dark:bg-slate-900 border rounded-2xl shadow-sm space-y-3">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" placeholder="you@domain.com" className="w-full px-3 py-2 border rounded-lg bg-transparent" />
            <label className="block text-sm font-medium">Message</label>
            <textarea placeholder="Write a short message" className="w-full px-3 py-2 border rounded-lg bg-transparent h-24" />
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Send</button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Responsive Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Monitor className="w-5 h-5" /> Responsive Patterns</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-slate-900 border rounded-2xl">
            <h4 className="font-semibold mb-2">Desktop Navigation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Use top nav with clear grouping, search, and account actions. Keep CTAs visible.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 border rounded-2xl">
            <h4 className="font-semibold mb-2">Mobile Patterns</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Use bottom navigation for primary actions, minimize modal frequency, and ensure large tappable targets.</p>
          </div>
        </div>
      </section>

      {/* UX Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3"><Layers className="w-5 h-5" /> UX Checklist</h2>
        <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-6 text-sm text-gray-700 dark:text-gray-300">
          <li>Define user goals and map user journeys.</li>
          <li>Prioritize content and reduce cognitive load.</li>
          <li>Implement progressive enhancement — content before JS.</li>
          <li>Test with real users and iterate fast.</li>
          <li>Measure with analytics and user feedback.</li>
          <li>Document patterns in a design system for consistency.</li>
        </ul>
      </section>

      {/* CTA */}
      <footer className="mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3">Want a consistent UI / UX for your project?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">I design and implement design systems, component libraries, and accessible experiences for web apps and marketing sites.</p>
          <a href="mailto:contact@johnysince.dev" className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700">
            <Mail className="w-5 h-5" /> Get in touch
          </a>
        </motion.div>
      </footer>
    </article>
  );
}
