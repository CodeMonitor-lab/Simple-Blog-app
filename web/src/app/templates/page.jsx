import React from "react";
import { TemplateCard } from "@/components/card";
import { Rocket } from "lucide-react";

const page = () => {
  return (
    <main>
      <TemplateCard />
      <section className="mt-8 bg-gray-50 p-10 border text-center">
        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2">
          <Rocket className="w-6 h-6 text-blue-600" /> Start Building Faster
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Choose a template, customize it, and launch your project quickly. All
          templates are responsive, scalable, and SEO-friendly.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Browse More Templates
        </a>
      </section>
    </main>
  );
};

export default page;
