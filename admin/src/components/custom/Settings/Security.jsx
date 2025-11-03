import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const Security = () => {
  const [formData, setFormData] = useState({
    security: {
      twoFactor: false,
      passwordExpiry: 90,
      sessionTimeout: 30,
    },
  });

  // ✅ Helper to update nested properties (like security.twoFactor)
  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      {/* 🔒 Header Notice */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start">
          <Lock className="w-5 h-5 text-red-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-red-800">Security Settings</h3>
            <p className="text-sm text-red-700 mt-1">
              These settings help protect your blog and account from unauthorized access.
            </p>
          </div>
        </div>
      </div>

      {/* ⚙️ Two Factor & Password Options */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600 mt-1">
              Add an extra layer of security to your account
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.security.twoFactor}
              onChange={(e) =>
                handleNestedChange('security', 'twoFactor', e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password Expiry (days)
            </label>
            <input
              type="number"
              value={formData.security.passwordExpiry}
              onChange={(e) =>
                handleNestedChange(
                  'security',
                  'passwordExpiry',
                  parseInt(e.target.value)
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              value={formData.security.sessionTimeout}
              onChange={(e) =>
                handleNestedChange(
                  'security',
                  'sessionTimeout',
                  parseInt(e.target.value)
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* 🧑‍💻 Active Sessions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Active Sessions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Current Session</p>
              <p className="text-sm text-gray-600">Chrome on macOS • Today, 2:30 PM</p>
            </div>
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Previous Session</p>
              <p className="text-sm text-gray-600">Safari on iOS • Yesterday, 5:15 PM</p>
            </div>
            <button className="text-sm text-red-600 hover:text-red-800">
              Terminate
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return <main className="p-6 bg-gray-50">{renderSecuritySettings()}</main>;
};

export default Security;
