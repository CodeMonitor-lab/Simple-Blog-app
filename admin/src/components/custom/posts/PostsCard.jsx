import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Clock,
  FileText,
  Eye,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

const PostsCard = ({
  id,
  title,
  desc,
  image,
  status = "draft",
  views = 0,
  comments = 0,
  date = "2025-10-31",
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) return onClick();
    if (id) navigate(`/admin/posts/${id}`);
  };

  // ✅ Status styles + icons
  const getStatus = (status) => {
    switch (status.toLowerCase()) {
      case "published":
        return {
          icon: <CheckCircle className="w-4 h-4 text-green-600" />,
          color: "bg-green-100 text-green-700 border-green-200",
        };
      case "scheduled":
        return {
          icon: <Clock className="w-4 h-4 text-yellow-600" />,
          color: "bg-yellow-100 text-yellow-700 border-yellow-200",
        };
      case "draft":
      default:
        return {
          icon: <FileText className="w-4 h-4 text-gray-600" />,
          color: "bg-gray-100 text-gray-700 border-gray-200",
        };
    }
  };

  const { icon, color } = getStatus(status);

  return (
    <Card
      className="flex flex-col justify-between h-full hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer overflow-hidden border border-gray-200"
      onClick={handleClick}
    >
      {/* 🖼️ Image section */}
      {image && (
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/600x400?text=No+Image";
            }}
          />
          {/* Status badge on top-right */}
          <div
            className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${color}`}
          >
            {icon}
            <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
          </div>
        </div>
      )}

      {/* 📝 Content section */}
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-lg font-semibold line-clamp-1">
          {title || "Untitled Post"}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 line-clamp-2">
          {desc || "No description provided."}
        </CardDescription>
      </CardHeader>

      {/* 📊 Meta info */}
      <CardContent className="text-sm text-gray-600 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" /> {views.toLocaleString()}
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4" /> {comments}
        </div>
        <div className="text-gray-400 text-xs">{date}</div>
      </CardContent>

      {/* 🔘 Preview button only */}
      <CardFooter className="flex justify-end">
        <Button
          size="sm"
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/posts/${id}`);
          }}
        >
          <ExternalLink className="w-4 h-4 mr-1" />
          Preview
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostsCard;
