"use client";

import React from "react";
import Link from "next/link";

export default function ElementsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold mb-4">Elements</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Reusable UI components that form the building blocks of the design system.
          Each component is crafted with accessibility, consistency, and delightful
          interaction patterns.
        </p>
      </header>

      <section className="space-y-10">
        <ComponentCard
          title="Buttons"
          description="Primary, secondary, ghost, icon buttons with clear interaction states."
          href="/elements/buttons"
        />

        <ComponentCard
          title="Inputs"
          description="Form inputs including text fields, textareas, selects, and validation states."
          href="/elements/inputs"
        />

        <ComponentCard
          title="Cards"
          description="Content containers that provide structure and elevation for visual grouping."
          href="/elements/cards"
        />

        <ComponentCard
          title="Tags & Badges"
          description="Small labels used to communicate status, categories, or metadata."
          href="/elements/tags"
        />

        <ComponentCard
          title="Navigation"
          description="Menus, sidebars, breadcrumbs, and navigational structures."
          href="/elements/navigation"
        />

        <ComponentCard
          title="Dialogs & Sheets"
          description="Overlays used for focused tasks, confirmations, and workflows."
          href="/elements/dialogs"
        />
      </section>
    </div>
  );
}

function ComponentCard({ title, description, href }) {
  return (
    <Link
      href={href}
      className="block border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 group"
    >
      <h2 className="text-2xl font-medium mb-2 group-hover:underline">{title}</h2>
      <p className="text-base text-muted-foreground">{description}</p>
    </Link>
  );
}
