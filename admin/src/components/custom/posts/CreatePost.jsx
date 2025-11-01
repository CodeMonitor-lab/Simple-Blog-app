import React, { useState } from "react";
import axios from "axios";
import TextEditor from "@/components/custom/TextEditor";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function AdminCreatePost() {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    author: "",
    category: "",
    tags: "",
    isPublished: false,
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPostData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const tagsArray = postData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const payload = {
        ...postData,
        tags: tagsArray,
        likes: 0,
        comments: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const res = await axios.post("http://127.0.0.1:3000/api/createPost", payload);

      setResponseMsg("✅ Post created successfully!");
      setPostData({
        title: "",
        content: "",
        image: "",
        author: "",
        category: "",
        tags: "",
        isPublished: false,
      });
    } catch (err) {
      console.error(err);
      setResponseMsg("❌ Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-full mx-auto">
      <CardHeader>
        <CardTitle>🛠️ Admin - Create New Blog Post</CardTitle>
        <CardDescription>
          Fill out the form below to create a new blog post.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={postData.title}
              onChange={handleChange}
              placeholder="Post title"
              required
            />
          </div>

          {/* Content */}
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={postData.content}
              onChange={handleChange}
              rows={6}
              placeholder="Write your post content..."
              required
            />
          </div>

          {/* Image & Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input type='upload' />
              <Input
                id="image"
                name="image"
                type="url"
                value={postData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <Label htmlFor="author">Author ID</Label>
              <Input
                id="author"
                name="author"
                value={postData.author}
                onChange={handleChange}
                placeholder="Author ID"
              />
            </div>
          </div>

          {/* Category & Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                value={postData.category}
                onChange={handleChange}
                placeholder="Category"
              />
            </div>
            <div>
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                name="tags"
                value={postData.tags}
                onChange={handleChange}
                placeholder="javascript, web, react"
              />
            </div>
          </div>

          {/* Publish */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isPublished"
              name="isPublished"
              checked={postData.isPublished}
              onCheckedChange={(checked) =>
                setPostData((prev) => ({ ...prev, isPublished: checked }))
              }
            />
            <Label htmlFor="isPublished">Publish immediately</Label>
          </div>

          {/* Submit */}
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Create Post"}
          </Button>
        </form>

        {responseMsg && (
          <p className="text-center text-sm text-slate-700">{responseMsg}</p>
        )}

        {/* Live Preview */}
        {postData.title && (
          <Card className="mt-6 bg-slate-50">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <h3 className="text-xl font-bold">{postData.title}</h3>
              {postData.category && (
                <p className="text-sm text-slate-500">{postData.category}</p>
              )}
              {postData.image && (
                <img
                  src={postData.image}
                  alt="preview"
                  className="rounded-md w-full max-h-64 object-cover"
                />
              )}
              <p className="text-slate-700">{postData.content}</p>
              {postData.tags && (
                <p className="text-xs text-slate-400">
                  Tags: {postData.tags}
                </p>
              )}
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
