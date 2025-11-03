import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const SeoSetting = () => {
  const [formData, setFormData] = useState({
    seo: {
      metaTitle: '',
      metaDescription: '',
      keywords: '',
    },
  });

  // ✅ Handles nested SEO fields
  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const renderSeoSettings = () => (
    <div className="space-y-6">
      {/* 🌍 SEO Header */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start">
          <Globe className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-green-800">SEO Settings</h3>
            <p className="text-sm text-green-700 mt-1">
              Optimize your blog for search engines to improve visibility and traffic.
            </p>
          </div>
        </div>
      </div>

      {/* ⚙️ Input Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Title
          </label>
          <input
            type="text"
            value={formData.seo.metaTitle}
            onChange={(e) => handleNestedChange('seo', 'metaTitle', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">Recommended: 50–60 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Description
          </label>
          <textarea
            value={formData.seo.metaDescription}
            onChange={(e) => handleNestedChange('seo', 'metaDescription', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">Recommended: 150–160 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Keywords
          </label>
          <input
            type="text"
            value={formData.seo.keywords}
            onChange={(e) => handleNestedChange('seo', 'keywords', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">Comma-separated keywords</p>
        </div>
      </div>

      {/* 🔍 Search Preview */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Search Preview</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-sm text-green-600 mb-1">myblog.com</div>
          <h4 className="font-medium text-blue-600 mb-1">
            {formData.seo.metaTitle || 'Your SEO Title Here'}
          </h4>
          <p className="text-sm text-gray-700">
            {formData.seo.metaDescription || 'Your meta description will appear here.'}
          </p>
        </div>
      </div>
    </div>
  );

  return <main className="p-6 bg-gray-50">{renderSeoSettings()}</main>;
};

export default SeoSetting;
