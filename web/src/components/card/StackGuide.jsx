"use client";
import React from "react";
import * as Icons from "lucide-react"; // to dynamically render icons

const StackGuide = ({ guide }) => {
  const IconComponent = Icons[guide.icon]; // dynamically pick icon

  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-md transition bg-white p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        {IconComponent && (
          <IconComponent className={`w-6 h-6 ${guide.iconColor}`} />
        )}
        <h2 className="text-xl font-semibold">{guide.title}</h2>
      </div>

      <p className="text-gray-600 mb-4">{guide.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {guide.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md border border-blue-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StackGuide;
