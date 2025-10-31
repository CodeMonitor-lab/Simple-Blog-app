import React, { useState } from "react";
import { PostsCard, CreatePost } from "@/components/custom/posts";
import { NavLink } from "react-router-dom";
import data from "@/components/data.json";
import { Plus, Filter } from "lucide-react";

const Posts = () => {

  return (
    <main className=" space-y-6">
      {/* Create New Post Button */}
      <div className="px-6 bg-white shadow rounded-lg py-4 border border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Content Dashboard
        </h3>

        <div className="flex items-center space-x-3">
          {/* Filter Dropdown */}
          <div className="relative">
            <Filter className="absolute left-2 top-2.5 w-4 h-4 text-gray-500" />
            <select className="pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Scheduled</option>
            </select>
          </div>

          {/* New Post Button */}
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </button>
        </div>
      </div>
    </div>

      {/* All posts grid */}
      <section>
        {/* <h2 className="text-lg font-medium mb-3">All Posts</h2> */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {data && data.length > 0 ? (
            data.map((post, index) => (
              <PostsCard
                key={index}
                title={post.title}
                desc={post.desc}
                image={post.image}
              />
            ))
          ) : (
            <p className="text-sm text-gray-500 col-span-full text-center py-8">
              No posts found.
            </p>
          )}
        </div>
      </section>

    </main>
  );
};

export default Posts;
