import React, { useState } from 'react';

const AppearanceSettings = () => {
  const [formData, setFormData] = useState({
    theme: {
      mode: 'light',
      primaryColor: '#3B82F6', // default blue
    },
  });

  // ✅ Function to handle nested theme updates
  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      {/* 🎨 Theme Mode */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme Mode
          </label>
          <div className="flex space-x-4">
            {['light', 'dark', 'system'].map((mode) => (
              <button
                key={mode}
                onClick={() => handleNestedChange('theme', 'mode', mode)}
                className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                  formData.theme.mode === mode
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* 🎨 Primary Color Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Color
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={formData.theme.primaryColor}
              onChange={(e) =>
                handleNestedChange('theme', 'primaryColor', e.target.value)
              }
              className="w-12 h-12 border-0 rounded cursor-pointer"
            />
            <span className="text-sm text-gray-600">{formData.theme.primaryColor}</span>
          </div>
        </div>
      </div>

      {/* 💻 Preview Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
        <div
          className={`rounded-lg p-6 shadow-sm ${
            formData.theme.mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h4
              className={`font-medium ${
                formData.theme.mode === 'dark' ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              Sample Header
            </h4>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Placeholder content */}
          <div className="space-y-3">
            <div
              className={`h-4 rounded w-3/4 ${
                formData.theme.mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            ></div>
            <div
              className={`h-4 rounded w-full ${
                formData.theme.mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            ></div>
            <div
              className={`h-4 rounded w-5/6 ${
                formData.theme.mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            ></div>
          </div>

          {/* Primary Button */}
          <button
            style={{ backgroundColor: formData.theme.primaryColor }}
            className="mt-4 px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Primary Button
          </button>
        </div>
      </div>
    </div>
  );

  return <main className="p-6 bg-gray-50">{renderAppearanceSettings()}</main>;
};

export default AppearanceSettings;
