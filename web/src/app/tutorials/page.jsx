import tutorials from "@/data/tutorial.json";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Tutorials</h1>

      <ul className="space-y-3">
        {tutorials.map((module) => (
          <li key={module.id}>
            <a
              href={`/tutorials/${module.slug}`}
              className="text-blue-600 hover:underline"
            >
              {module.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
