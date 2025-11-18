import React from "react";
import { RefreshCw, HelpCircle } from "lucide-react";

const SidebarFooter = () => {
  return (
    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
      <button
        className="w-full flex items-center gap-2 px-3 py-2 rounded-md 
                   bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                   hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <RefreshCw size={16} />
        Reset Progress
      </button>

      <button
        className="mt-2 w-full flex items-center gap-2 px-3 py-2 rounded-md 
                   bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <HelpCircle size={16} />
        Need Help?
      </button>
    </div>
  );
};

export default SidebarFooter;
