import React from "react";
import {
  MediaCard,
  AllTypeOption,
  MediaFilterBar,
  MediaUpload,
  MediaSearch,
} from "@/components/custom/media";

const PostMedia = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 p-4 sm:p-6 lg:p-8 space-y-8">
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-5">
          <MediaSearch />
        </div>

        <div className="lg:col-span-7 flex flex-wrap justify-between gap-3">
          <MediaUpload />
          <MediaFilterBar />
        </div>
      </header>

      <section className="space-y-2">
        <AllTypeOption />

        <div className="border-t border-gray-200">
          <MediaCard />
        </div>
      </section>
    </main>
  );
};

export default PostMedia;
