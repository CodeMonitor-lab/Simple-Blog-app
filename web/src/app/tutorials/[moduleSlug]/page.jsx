import tutorials from "@/data/tutorial.json";

export default async function ModulePage({ params }) {
  const { moduleSlug } = await params;

  const module = tutorials.find((m) => m.slug === moduleSlug);
  if (!module) return <div>Module not found</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{module.title}</h1>

      <ul className="space-y-2">
        {module.lessons.map((lesson) => (
          <li key={lesson.slug}>
            <a
              href={`/tutorials/${module.slug}/${lesson.slug}`}
              className="text-blue-600 underline"
            >
              {lesson.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
