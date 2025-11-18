"use client";
import React from "react";
import * as Icons from "lucide-react";
import stackData from "@/data/my-stack.json";
import toolsData from "@/data/my-tool.json";

const SeoAndGrowthCard = () => {
  // Helper function to render cards
  const renderCards = (data) =>
    data.map((item, i) => {
      const IconComponent = Icons[item.icon];
      return (
        <div
          key={i}
          className="p-5 border rounded-2xl shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition"
        >
          <div className="flex items-center gap-3 mb-2">
            {IconComponent && <IconComponent className={`${item.color} w-6 h-6`} />}
            <h3 className="font-semibold text-lg">{item.title}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
        </div>
      );
    });

  return (
    <section className="space-y-10 mb-16">  
      {/* TECH STACK */}
      <div>
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-6">
          <Icons.Code2 className="w-6 h-6 text-emerald-500" />
          My JavaScript Stack
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(stackData)}
        </div>
      </div>

      {/* SEO & TOOLING */}
      <div>
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-6">
          <Icons.Search className="w-6 h-6 text-amber-500" />
          Tools I Use to Build, Rank & Grow
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(toolsData)}
        </div>
      </div>
    </section>
  );
};

export default SeoAndGrowthCard;
