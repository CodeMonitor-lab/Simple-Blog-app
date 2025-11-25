"use client";

import Link from "next/link";
import React from "react";

const AccordionModule = ({ lessons = [], slugPath }) => {
  return (
    <ul className="pl-4 space-y-1">
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          className="text-sm hover:text-blue-500 cursor-pointer"
        >
          <Link href={`${slugPath}/${lesson.slug}`}>
            {lesson.title || lesson.id}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AccordionModule;
