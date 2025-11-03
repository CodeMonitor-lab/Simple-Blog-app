import React from "react";
import { Upload } from "lucide-react";

const MediaUpload = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-all">
        <Upload className="w-4 h-4" />
        <span>Media</span>
      </button>
    </div>
  );
};

export default MediaUpload;
