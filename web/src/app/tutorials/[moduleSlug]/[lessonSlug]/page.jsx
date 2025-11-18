import tutorials from "@/data/tutorial.json";

export default async function LessonPage({ params }) {
  const { moduleSlug, lessonSlug } = await params;

  const module = tutorials.find((m) => m.slug === moduleSlug);
  if (!module) return <div>Module not found</div>;

  const lesson = module.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-gray-700">{lesson.content || "Lesson content..."}</p>
    </div>
  );
}
