"use client";
import React from "react";
import { FolderGit2, Layers, Rocket } from "lucide-react";

const ProjectTemplatesPage = () => {
  const categories = [
    {
      id: 1,
      title: "Blog Templates",
      templates: [
        {
          name: "Personal Blog",
          description: "A markdown-based blog built with Next.js and TailwindCSS.",
          stack: ["Next.js", "TailwindCSS", "MDX"],
          link: "#",
        },
        {
          name: "Tech Blog",
          description: "A blog for developers to write and share tutorials.",
          stack: ["Next.js", "Prism.js", "Vercel"],
          link: "#",
        },
        {
          name: "Travel Blog",
          description: "Share travel stories and galleries with a modern layout.",
          stack: ["React", "TailwindCSS", "Framer Motion"],
          link: "#",
        },
        {
          name: "Food Blog",
          description: "Showcase recipes and culinary tips with a photo grid.",
          stack: ["Next.js", "Contentful", "Vercel"],
          link: "#",
        },
      ],
    },
    {
      id: 2,
      title: "Portfolio Templates",
      templates: [
        {
          name: "Developer Portfolio",
          description: "Clean portfolio with project showcase and contact form.",
          stack: ["Next.js", "Framer Motion", "Vercel"],
          link: "#",
        },
        {
          name: "Designer Portfolio",
          description: "Visual designer site with smooth animations and galleries.",
          stack: ["React", "TailwindCSS", "GSAP"],
          link: "#",
        },
        {
          name: "Freelancer Portfolio",
          description: "Simple one-page portfolio for freelancers and creators.",
          stack: ["Next.js", "EmailJS", "TailwindCSS"],
          link: "#",
        },
        {
          name: "Photographer Portfolio",
          description: "Showcase photography with lightbox and gallery sections.",
          stack: ["React", "Next.js", "Lightbox.js"],
          link: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Business Templates",
      templates: [
        {
          name: "Startup Landing Page",
          description: "SaaS startup landing with pricing and testimonials.",
          stack: ["Next.js", "TailwindCSS", "Formspree"],
          link: "#",
        },
        {
          name: "Agency Website",
          description: "Professional site for creative agencies and studios.",
          stack: ["Next.js", "Framer Motion", "EmailJS"],
          link: "#",
        },
        {
          name: "Corporate Website",
          description: "Modern corporate template with team and service pages.",
          stack: ["React", "Bootstrap", "Vercel"],
          link: "#",
        },
        {
          name: "Consulting Website",
          description: "Clean consulting layout with contact and case study pages.",
          stack: ["Next.js", "TailwindCSS", "Formspree"],
          link: "#",
        },
      ],
    },
    {
      id: 4,
      title: "E-commerce Templates",
      templates: [
        {
          name: "Online Store",
          description: "Full-featured store with checkout and cart system.",
          stack: ["Next.js", "Stripe", "MongoDB"],
          link: "#",
        },
        {
          name: "Clothing Store",
          description: "E-commerce template for apparel and fashion stores.",
          stack: ["Next.js", "Firebase", "TailwindCSS"],
          link: "#",
        },
        {
          name: "Digital Products Shop",
          description: "Sell digital downloads with secure payment flow.",
          stack: ["Next.js", "Stripe", "Supabase"],
          link: "#",
        },
        {
          name: "Furniture Store",
          description: "Modern furniture e-commerce layout with filter and cart.",
          stack: ["React", "Redux", "Vercel"],
          link: "#",
        },
      ],
    },
    {
      id: 5,
      title: "Admin Dashboards",
      templates: [
        {
          name: "Analytics Dashboard",
          description: "Data visualization and analytics interface.",
          stack: ["React", "Recharts", "Node.js"],
          link: "#",
        },
        {
          name: "CMS Dashboard",
          description: "Manage content and media from one place.",
          stack: ["Next.js", "Prisma", "Supabase"],
          link: "#",
        },
        {
          name: "Sales Dashboard",
          description: "Track and monitor sales data with charts.",
          stack: ["React", "Chart.js", "Express"],
          link: "#",
        },
        {
          name: "Admin Control Panel",
          description: "Customizable admin dashboard with user management.",
          stack: ["Next.js", "MongoDB", "TailwindCSS"],
          link: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Educational Templates",
      templates: [
        {
          name: "Online Course Platform",
          description: "Host and sell courses with progress tracking.",
          stack: ["Next.js", "Stripe", "Supabase"],
          link: "#",
        },
        {
          name: "Learning Dashboard",
          description: "Track lessons, progress, and quizzes.",
          stack: ["React", "Chart.js", "Firebase"],
          link: "#",
        },
        {
          name: "School Website",
          description: "Showcase institution info, courses, and admissions.",
          stack: ["Next.js", "TailwindCSS", "Vercel"],
          link: "#",
        },
        {
          name: "Course Landing Page",
          description: "Simple landing page for online educators.",
          stack: ["React", "Bootstrap", "EmailJS"],
          link: "#",
        },
      ],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <header className="flex items-center gap-3 mb-10">
        <FolderGit2 className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold tracking-tight">All Project Template Categories</h1>
      </header>

      <p className="text-gray-600 mb-12 max-w-2xl">
        Explore diverse project templates across multiple categories — blogs, portfolios, businesses, e-commerce, dashboards, and education.
      </p>

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

      <section className="mt-20 bg-gray-50 rounded-2xl p-10 border text-center">
        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2">
          <Rocket className="w-6 h-6 text-blue-600" /> Start Building Faster
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Choose a template, customize it, and launch your project quickly. All templates are responsive, scalable, and SEO-friendly.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Browse More Templates
        </a>
      </section>

      <footer className="mt-16 border-t pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} WebStarter — Crafted with ❤️ for developers and creators.
      </footer>
    </main>
  );
};

export default ProjectTemplatesPage;
