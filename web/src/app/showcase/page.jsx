import Link from "next/link";

const categories = [
  { title: "Backend", slug: "backend" },
  { title: "Frontend", slug: "frontend" },
  { title: "Full Stack", slug: "full-stack" },
  { title: "Template", slug: "template" },
];

export default function Page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/showcase/${cat.slug}`}
          className="p-6 border rounded-xl hover:bg-gray-100 transition"
        >
          <h2 className="text-xl font-semibold">{cat.title}</h2>
        </Link>
      ))}
    </section>
  );
}
