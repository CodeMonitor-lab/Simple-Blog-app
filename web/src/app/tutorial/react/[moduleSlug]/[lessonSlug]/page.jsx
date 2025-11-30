import tutorialData from "@/data/tutorialData/tutorial.json";

const LessonPage = ({ params }) => {
  const { moduleSlug, lessonSlug } = params;

  const moduleData = tutorialData.find((m) => m.slug === moduleSlug);
  const lessonData = moduleData?.lessons.find((l) => l.slug === lessonSlug);

  if (!lessonData) {
    return <p className="text-red-500">Lesson not found</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{lessonData.title}</h1>
      <p className="mt-4 text-gray-700">{lessonData.content}</p>
    </div>
  );
};

export default LessonPage;
