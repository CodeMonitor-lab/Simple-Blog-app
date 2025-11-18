import { notFound } from "next/navigation";
import blogData from "@/data/blogs.json";

export async function generateStaticParams() {
  return blogData.blogs.map((post) => ({ slug: post.slug }));
}

// ⚠️ 'params' is now a Promise
export default async function BlogPost({ params: promiseParams }) {
  const params = await promiseParams; // await params before using
  const post = blogData.blogs.find((b) => b.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto p-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <div
        className="prose prose-indigo"
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
      />
      <p className="mt-6">
        <a href="/blog" className="text-indigo-600 hover:underline">
          ← Back to Blog
        </a>
      </p>
    </article>
  );
}
