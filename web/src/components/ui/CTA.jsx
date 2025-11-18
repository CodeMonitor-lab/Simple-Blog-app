"use client";
import React from "react";
import { Mail } from "lucide-react";

const CTA = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className="rounded-2xl p-8 text-center bg-sky-00 text-black  hover:shadow-xl transition-all duration-300">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mb-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {buttonText && (
        <a
          href={buttonLink || "mailto:contact@johnysince.dev"}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-black bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          {buttonText}
        </a>
      )}
    </section>
  );
};

export default CTA;
