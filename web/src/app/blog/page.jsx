"use client";

import React from "react";
import { BlogCard } from "@/components/card";
import { HeroBanner } from "@/components/ui";

const Page = () => {
  return (
    <main className="px-6">
      <section className="max-w-6xl mx-auto py-16">

        {/* 🧠 Hero Header */}
        <HeroBanner
          title="Welcome to Our Blog"
          description="Insights, tutorials, and lessons from real-world development experiences."
          align="text-left"
        />

        {/* 📝 Blog List */}
        <div className="mt-10">
          <BlogCard />
          
        </div>

      </section>
    </main>
  );
};

export default Page;
