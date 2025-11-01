import React, { useState } from "react";
import { Category } from "@/components/custom/posts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, LayoutGrid } from "lucide-react";
import categoryData from "@/components/category.json";

const PostCategory = () => {
  const [categories, setCategories] = useState(categoryData);
  const [newCategory, setNewCategory] = useState({ title: "", desc: "" });

  // ➕ Add New Category
  const handleAddCategory = () => {
    if (!newCategory.title.trim()) return;
    const newCat = {
      id: Date.now(),
      title: newCategory.title,
      desc: newCategory.desc || "No description available",
    };
    setCategories([...categories, newCat]);
    setNewCategory({ title: "", desc: "" });
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      {/* 🧭 Header */}
      <header className="mb-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <LayoutGrid className="w-5 h-5 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Manage Post Categories
          </h2>
        </div>
        <p className="text-gray-500 text-sm">
          Add, organize, and update post categories for your blog.
        </p>
      </header>

      {/* ➕ Add Category Form */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
        <Input
          placeholder="Category title"
          value={newCategory.title}
          onChange={(e) =>
            setNewCategory({ ...newCategory, title: e.target.value })
          }
          className="w-full sm:w-60"
        />
        <Input
          placeholder="Description"
          value={newCategory.desc}
          onChange={(e) =>
            setNewCategory({ ...newCategory, desc: e.target.value })
          }
          className="w-full sm:w-80"
        />
        <Button onClick={handleAddCategory} className="flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add
        </Button>
      </div>

      {/* 🗂️ Category Grid */}
      <section
        className="
          grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          max-w-7xl mx-auto
        "
      >
        {categories.map((cat) => (
          <Category key={cat.id} title={cat.title} desc={cat.desc} />
        ))}
      </section>
    </main>
  );
};

export default PostCategory;
