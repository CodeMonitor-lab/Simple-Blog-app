import React from "react";
import devOpsData from "@/data/devOpsModule/dev-opsModule.json";

const Page = async ({ params }) => {
  const { moduleSlug } = await params;

  const moduleData = devOpsData.find(
    (item) => item.slug === moduleSlug
  );

  if (!moduleData) {
    return <div className="p-10 text-red-500">Module not found ❌</div>;
  }

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">{moduleData.title}</h1>

      {moduleData.lessons.map((lesson) => (
        <section
          key={lesson.id}
          className="border-b pb-4 mb-4 last:border-none"
        >
          <h2 className="text-xl font-semibold">{lesson.title}</h2>
          <p className="text-gray-700 mt-1">{lesson.content}</p>
        </section>
      ))}
    </div>
  );
};

export default Page;
