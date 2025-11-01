import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Folder } from "lucide-react";

const Category = ({ title, desc }) => (
  <Card
    className="
      group relative border border-gray-200 hover:border-blue-500
      bg-white hover:bg-blue-50/30
      transition-all duration-200 p-5 rounded-xl shadow-sm hover:shadow-md
      cursor-pointer flex flex-col justify-between
    "
  >
    <CardHeader className="flex flex-col items-start space-y-2 p-0">
      <div className="flex items-center gap-2">
        <div
          className="
            p-2 bg-blue-100 rounded-lg
            group-hover:bg-blue-500 transition-colors
          "
        >
          <Folder className="w-5 h-5 text-blue-600 group-hover:text-white" />
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">
          {title}
        </CardTitle>
      </div>
      <CardDescription className="text-gray-600 text-sm mt-1">
        {desc}
      </CardDescription>
    </CardHeader>
  </Card>
);

export default Category;
