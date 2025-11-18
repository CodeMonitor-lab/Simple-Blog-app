"use client";
import React from "react";
import stackGuidesData from "@/data/stackGuidesData.json";
import {StackGuide} from "@/components/card";
import { Cpu } from "lucide-react";

const page = () => {
  const { guides } = stackGuidesData;

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
          <StackGuide key={guide.id} guide={guide} />
        ))}
      </div>

      {/* Call to Action */}
      <section className="mt-20 bg-gray-50 rounded-2xl p-10 border text-center">
        <h2 className="text-2xl font-semibold mb-4">Build Your Perfect Stack</h2>
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

export default page;
