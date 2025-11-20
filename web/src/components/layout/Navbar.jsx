"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

   const navLinks = [
    { name: "Home", path: "/" },
    { name: "Stacks", path: "/stack" },
    { name: "blogs", path: "/blog" }, 
    { name: "Showcase", path: "/showcase" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Tools", path: "/ui-library" },
    { name: "Insighs", path: "/blog" },
    { name: "Templates", path: "/templates" },


    // { name: "Register", path: "/auth/register" },
    // { name: "Login", path: "/auth/login" },
  ];
  

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          <span className="text-blue-600">Made</span>byJS
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
