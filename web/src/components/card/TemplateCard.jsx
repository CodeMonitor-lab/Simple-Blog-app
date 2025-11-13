import React from "react";
import { Layers } from "lucide-react";
import templatesData from "@/data/template.json";

const TemplateCard = () => {
  const { categories } = templatesData;

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {categories.map((category) => (
        <section key={category.id} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" /> {category.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.templates.map((template, index) => (
              <article
                key={index}
                className="border rounded-2xl shadow-sm hover:shadow-md transition bg-white p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={template.link}
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Template
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default TemplateCard;
