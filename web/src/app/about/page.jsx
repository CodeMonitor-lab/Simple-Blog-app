import React from "react";
import { Code2, Globe, Rocket, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* 🧠 Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">About Me</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hi, I’m <span className="font-semibold text-indigo-600">Johny Since</span> — a
          full-stack developer passionate about building real-world applications,
          modern UI design, and teaching others through open-source projects.
        </p>
      </div>

      {/* 🧱 Content Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* 👨‍💻 Developer Intro */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-gray-900">
            Crafting Web Experiences
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I specialize in developing high-performance web apps using{" "}
            <strong>Next.js, React, Node.js,</strong> and <strong>MongoDB</strong>.  
            My focus is creating projects that combine strong technical architecture
            with clean, user-centric interfaces.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I also share tutorials, project showcases, and dev resources to help
            other developers grow — because learning should be open and accessible.
          </p>
          <a
            href="/projects"
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            View My Projects
          </a>
        </div>

        {/* 🧩 Illustration / Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Developer workspace"
            className="rounded-xl shadow-md border border-gray-100"
          />
        </div>
      </div>

      {/* 🌟 Skills / Highlights */}
      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Code2 className="w-6 h-6 text-indigo-600" />,
            title: "Full-Stack Dev",
            desc: "Building fast, scalable web apps using React, Node.js, and databases.",
          },
          {
            icon: <Rocket className="w-6 h-6 text-indigo-600" />,
            title: "Performance-Driven",
            desc: "Optimizing Core Web Vitals and SEO for every project.",
          },
          {
            icon: <Globe className="w-6 h-6 text-indigo-600" />,
            title: "Open Source",
            desc: "Creating and sharing reusable tools for the dev community.",
          },
          {
            icon: <Users className="w-6 h-6 text-indigo-600" />,
            title: "Community Focused",
            desc: "Writing tutorials, mentoring, and contributing to dev blogs.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
