import React from "react";
import { Github, Linkedin, Twitter, Mail, Youtube, Code2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  // 🧭 Footer Link Data
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    { name: "Javascript Stack", href: "/category/js-stack" },
    { name: "Node.js & Backend", href: "/category/node-&-backend" },
    { name: "SEO & Growth", href: "/category/seo-&-growth" },
    { name: "UI/UX & Design", href: "/category/ui-&-ux" },
    { name: "Tools & Automation", href: "/category/tools-&-automation" },
  ];

  const resources = [
    { name: "Learning Path", href: "/resources/learning-path" },
    { name: "Free Templates", href: "/resources/free-templates" },
    { name: "Code Snippets", href: "/resources/code-snippets" },
    { name: "Tech Stack Guides", href: "/resources/tech-stack-guides" },
    { name: "Open Source Projects", href: "/resources/open-source" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: "Twitter / X",
      href: "https://twitter.com/yourusername",
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@yourchannel",
      icon: <Youtube className="w-4 h-4" />,
    },
    {
      name: "Email",
      href: "mailto:hello@yourdomain.com",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-6 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
        {/* Brand Intro */}
        <div>
          <div className="flex items-center space-x-2 text-white text-lg font-semibold mb-4">
            <Code2 className="w-6 h-6 text-blue-500" />
            <span>DevBuilds</span>
          </div>
          <p className="text-sm leading-relaxed">
            Exploring real-world web projects — building, reviewing, and comparing
            apps that solve real developer challenges.
          </p>
        </div>

        {/* Dynamic Columns */}
        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Categories" links={categories} />
        <FooterColumn title="Resources" links={resources} />
        <SocialColumn title="Connect" socialLinks={socialLinks} />
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} DevBuilds — All rights reserved.</p>
        <p className="mt-2">Built with ❤️ using Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

// 🧩 Reusable Footer Column Component
const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-white text-sm font-semibold mb-4 uppercase">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="hover:text-white transition">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// 🧩 Social Column Component
const SocialColumn = ({ title, socialLinks }) => (
  <div>
    <h3 className="text-white text-sm font-semibold mb-4 uppercase">{title}</h3>
    <ul className="space-y-2">
      {socialLinks.map((social, index) => (
        <li key={index}>
          <Link
            href={social.href}
            target="_blank"
            className="hover:text-white flex items-center space-x-2 transition"
          >
            {social.icon}
            <span>{social.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
