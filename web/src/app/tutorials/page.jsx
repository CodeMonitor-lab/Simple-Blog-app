"use client";

import React from "react";
import { FilterSelect,Search } from "@/components/common";

const Page = () => {
  const [category, setCategory] = React.useState("");

  const tutorialFilterOptions = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Redux",
    "UI/UX ",
    "Responsive Design",
    "Accessibility",
    "Performance Optimization",
  ];
  
  

  return (
    <main className="p-6">
      <FilterSelect
        label="Select Tutorial Module"
        options={tutorialFilterOptions}
        value={category}
        onChange={setCategory}
      />

      <div className="mt-4">
        Selected: {category || "None"}
      </div>
      <Search/>
    </main>
  );
};

export default Page;
