// ModuleData.jsx
"use client";

import React from "react";
import Link from "next/link";
import tutorialData from "@/data/tutorialData/tutorial.json";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const ModuleData = () => (
  <div className="px-2">
    <Accordion type="single" collapsible className="w-full">
      {tutorialData.map((m) => (
        <AccordionItem key={m.id} value={m.slug}>
          <AccordionTrigger className="font-semibold">{m.title}</AccordionTrigger>
          <AccordionContent>
            <ul className="pl-4 space-y-1">
              {m.lessons?.map((lesson) => (
                <li key={lesson.id}>
                  <Link href={`/stack/${m.slug}/${lesson.slug}`} className="text-sm hover:text-blue-500 transition">
                    {lesson.title}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default ModuleData;
