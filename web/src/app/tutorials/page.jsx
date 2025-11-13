"use client";
import React from "react";
import {TutorialCard} from '@/components/card'

const Page = () => {

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* 🧠 Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Tutorials & Guides</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Practical coding tutorials covering frontend, backend, SEO, and deployment workflows.
        </p>
      </div>

      <TutorialCard/>
      
    </section>
  );
};

export default Page;
