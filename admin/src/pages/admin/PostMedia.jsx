import React, { useState } from 'react';
import { Search, Upload, Filter, MoreVertical, Trash2, Download, Eye, FileImage, FileVideo, FileAudio, FileText, Grid3X3, List, Plus, Folder, Calendar, User } from 'lucide-react';

const App = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedItems, setSelectedItems] = useState(new Set());

  // Mock media library data
  const mediaItems = [
    {
      id: 1,
      name: 'hero-banner.jpg',
      type: 'image',
      size: '2.4 MB',
      uploaded: '2024-01-15',
      uploader: 'Admin User',
      url: 'https://placehold.co/300x200/3b82f6/ffffff?text=Hero+Banner'
    },
    {
      id: 2,
      name: 'team-photo.png',
      type: 'image',
      size: '3.1 MB',
      uploaded: '2024-01-14',
      uploader: 'Sarah Johnson',
      url: 'https://placehold.co/300x200/10b981/ffffff?text=Team+Photo'
    },
    {
      id: 3,
      name: 'product-demo.mp4',
      type: 'video',
      size: '24.7 MB',
      uploaded: '2024-01-13',
      uploader: 'Michael Chen',
      url: '#'
    },
    {
      id: 4,
      name: 'background-music.mp3',
      type: 'audio',
      size: '8.2 MB',
      uploaded: '2024-01-12',
      uploader: 'Emma Rodriguez',
      url: '#'
    },
    {
      id: 5,
      name: 'logo-transparent.png',
      type: 'image',
      size: '1.8 MB',
      uploaded: '2024-01-11',
      uploader: 'Admin User',
      url: 'https://placehold.co/300x200/8b5cf6/ffffff?text=Logo'
    },
    {
      id: 6,
      name: 'tutorial-guide.pdf',
      type: 'document',
      size: '5.6 MB',
      uploaded: '2024-01-10',
      uploader: 'David Kim',
      url: '#'
    },
    {
      id: 7,
      name: 'social-banner.jpg',
      type: 'image',
      size: '1.9 MB',
      uploaded: '2024-01-09',
      uploader: 'Lisa Thompson',
      url: 'https://placehold.co/300x200/ef4444/ffffff?text=Social+Banner'
    },
    {
      id: 8,
      name: 'podcast-episode.mp3',
      type: 'audio',
      size: '12.3 MB',
      uploaded: '2024-01-08',
      uploader: 'Alex Morgan',
      url: '#'
    },
    {
      id: 9,
      name: 'infographic.png',
      type: 'image',
      size: '2.7 MB',
      uploaded: '2024-01-07',
      uploader: 'Admin User',
      url: 'https://placehold.co/300x200/f59e0b/ffffff?text=Infographic'
    }
  ];

  const filteredMedia = mediaItems
    .filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.uploader.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => filterType === 'all' || item.type === filterType);

  const toggleSelectItem = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const selectAll = () => {
    if (selectedItems.size === filteredMedia.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(filteredMedia.map(item => item.id)));
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'image':
        return <FileImage className="w-8 h-8 text-blue-500" />;
      case 'video':
        return <FileVideo className="w-8 h-8 text-red-500" />;
      case 'audio':
        return <FileAudio className="w-8 h-8 text-green-500" />;
      case 'document':
        return <FileText className="w-8 h-8 text-purple-500" />;
      default:
        return <FileImage className="w-8 h-8 text-gray-500" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage your blog's media files
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Upload className="w-4 h-4" />
            <span>Upload New</span>
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search media..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select 
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          </div>

          {/* View Toggle & Actions */}
          <div className="flex items-center gap-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {selectedItems.size > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {selectedItems.size} selected
                </span>
                <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media Grid/List */}
      <div className="p-6">
        {filteredMedia.length === 0 ? (
          <div className="text-center py-12">
            <Folder className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No media files found</h3>
            <p className="text-gray-600">Try adjusting your search or upload new files.</p>
            <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto">
              <Upload className="w-4 h-4" />
              Upload Files
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer ${
                  selectedItems.has(item.id) ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200'
                }`}
                onClick={() => toggleSelectItem(item.id)}
              >
                <div className="p-4">
                  <div className="relative mb-3">
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-full h-32 bg-gray-100 rounded-md flex items-center justify-center">
                        {getTypeIcon(item.type)}
                      </div>
                    )}
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
                  
                  <div className="space-y-1">
                    <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.size}</span>
                      <span className="capitalize">{item.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
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
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedItems.size === filteredMedia.length && filteredMedia.length > 0}
                      onChange={selectAll}
                      className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">File</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Size</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Uploaded</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Uploader</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMedia.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.has(item.id)}
                        onChange={() => toggleSelectItem(item.id)}
                        className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {getTypeIcon(item.type)}
                        <span className="font-medium text-gray-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="capitalize text-sm text-gray-600">{item.type}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{formatDate(item.uploaded)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.uploader}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
