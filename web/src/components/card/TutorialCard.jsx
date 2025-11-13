"use client";

import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import tutorialsData from "@/data/tutorial.json";

const TutorialCard = () => {
  const { tutorials } = tutorialsData;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* 📚 Tutorials Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tutorials.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* 🖼️ Image */}
            <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 📄 Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                    {item.category}
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                    {item.level}
                  </span>
                </div>
              </div>

              {/* 🔗 Button */}
              <button className="mt-6 flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                <BookOpen className="w-4 h-4 mr-1" /> Read Tutorial
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TutorialCard;
