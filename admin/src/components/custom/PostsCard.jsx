import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PostsCard = ({ title, desc }) => {
  return (
    <Card className="flex flex-col justify-between h-full hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader>
        <CardTitle className="text-lg font-semibold line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 line-clamp-2">
          {desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button size="sm" variant="default">
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostsCard;
