"use client";
import React from "react";

const Philosophy = ({ 
  icon: Icon = null, 
  title = "Growth as a Creator", 
  description = "I believe every website should do more than look good — it should perform, convert, and inspire. I build with a focus on performance, accessibility, SEO, and storytelling. My goal is to help creators and brands grow online with clean code and clear strategy.", 
  quote = "“Good design and smart SEO turn ideas into opportunities.”" 
}) => {
  return (
    <section className="mb-16 p-6 md:p-8 bg-gradient-to-r from-sky-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md space-y-4">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-6 h-6 text-sky-500" />}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-base md:text-base leading-relaxed max-w-3xl">
        {description}
      </p>

      <blockquote className="border-l-4 border-sky-500 pl-5 italic text-gray-600 dark:text-gray-400 text-base md:text-base max-w-2xl">
        {quote}
      </blockquote>
    </section>
  );
};

export default Philosophy;
