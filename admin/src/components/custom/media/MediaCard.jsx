import React, { useState } from "react";
import {
  Calendar,
  MoreVertical,
  File,
  Image,
  Video,
  Upload,
  FolderOpen,
} from "lucide-react";

const MediaCard = () => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const mediaData = [
    {
      id: 1,
      name: "summer-photo.jpg",
      type: "image",
      size: "1.2 MB",
      uploaded: "2025-10-01",
      uploader: "John Doe",
      url: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: "promo-video.mp4",
      type: "video",
      size: "15 MB",
      uploaded: "2025-09-25",
      uploader: "Jane Smith",
      url: "",
    },
    {
      id: 3,
      name: "brochure.pdf",
      type: "file",
      size: "3.4 MB",
      uploaded: "2025-09-20",
      uploader: "Alice Johnson",
      url: "",
    },
    {
      id: 4,
      name: "brochure.pdf",
      type: "file",
      size: "3.4 MB",
      uploaded: "2025-09-20",
      uploader: "Alice Johnson",
      url: "",
    },
  ];

  const toggleSelectItem = (id) => {
    const updated = new Set(selectedItems);
    updated.has(id) ? updated.delete(id) : updated.add(id);
    setSelectedItems(updated);
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const getTypeIcon = (type) => {
    switch (type) {
      case "image":
        return <Image className="w-6 h-6 text-blue-500" />;
      case "video":
        return <Video className="w-6 h-6 text-purple-500" />;
      case "file":
        return <File className="w-6 h-6 text-gray-500" />;
      default:
        return <File className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <main className="sm:p-8 p-2 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Media Grid */}
      {mediaData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mediaData.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl border hover:shadow-lg transition-all cursor-pointer duration-200 ${
                selectedItems.has(item.id)
                  ? "ring-2 ring-blue-500 border-blue-500 scale-[1.02]"
                  : "border-gray-200 hover:border-blue-300"
              }`}
              onClick={() => toggleSelectItem(item.id)}
            >
              {/* Preview */}
              <div className="p-4">
                <div className="relative mb-3">
                  {item.type === "image" && item.url ? (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                      {getTypeIcon(item.type)}
                    </div>
                  )}

                  {/* Checkbox */}
                  <div className="absolute top-2 right-2">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(item.id)}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleSelectItem(item.id);
                      }}
                      className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* File Info */}
                <h3 className="font-medium text-gray-900 truncate">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                  <span>{item.size}</span>
                  <span className="capitalize">{item.type}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between rounded-b-xl">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(item.uploaded)}</span>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="text-center py-20">
          <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No media files found
          </h3>
          <p className="text-gray-500 mb-4">
            Start by uploading new files to your media library.
          </p>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-all mx-auto">
            <Upload className="w-4 h-4" />
            Upload Files
          </button>
        </div>
      )}
    </main>
  );
};

export default MediaCard;
