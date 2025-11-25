"use client";

import React from "react";
import * as Icons from "lucide-react";
import Link from "next/link";

const ToolsCard = ({ icon, slugPath, color, title, desc }) => {
  const IconComponent = Icons[icon];

  return (
    <article className="p-5 border rounded-2xl shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        {IconComponent && <IconComponent className={`w-6 h-6 ${color}`} />}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </article>
  );
};

export default ToolsCard;
