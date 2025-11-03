import React, { useState } from "react";
import { Filter } from "lucide-react";

const AllTypeOption = () => {
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-gray-50 backdrop-blur-md border border-gray-200 px-4 py-3  rounded-t-lg shadow-xs">
      {/* Filter */}
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-gray-500" />
        <select
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="image">Images</option>
          <option value="video">Videos</option>
          <option value="audio">Audio</option>
          <option value="document">Documents</option>
        </select>
      </div>

      {/* Info */}
      <p className="text-sm text-gray-500 hidden md:block">
        Showing results for:{" "}
        <span className="font-medium text-gray-800">
          {searchTerm || "All files"}
        </span>
      </p>
    </div>
  );
};

export default AllTypeOption;
