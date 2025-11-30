"use client";

import React from "react";
import { SidebarLayout } from "@/components/layout";


export default function ReactLayout({ children, params }) {
  // params will have moduleSlug if nested in dynamic route
  const { moduleSlug, lessonSlug } = params || {};

  return (
    <div className="flex min-h-screen">
      <SidebarLayout currentModule={moduleSlug} currentLesson={lessonSlug} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
