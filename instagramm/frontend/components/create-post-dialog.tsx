import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { Loader } from "lucide-react";
import React, { useState } from "react";

export function CreatePostDialog() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreatePost = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      await axios.post("https://fullstack-learn.onrender.com/posts", formData);

      setLoading(false);
      setTitle("");
      setImage(null);
      toast({ title: "Post creation success" });





    } catch (error) {
      console.error("Post creation failed", error);
      toast({ title: "Post creation failed" });
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-blue-500"
          size="sm">
          Create New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Post {loading && <Loader className="animate-spin" />}</DialogTitle>
          <DialogDescription>Fill the form below to create a new post</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form
            onSubmit={handleCreatePost}
            className="space-y-6">
            <div>
              <Label>Title</Label>
              <Input
                required
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <Label>Image</Label>
              <Input
                required
                type="file"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setImage(e.target.files?.[0] || null);
                }}
              />
            </div>

            <DialogFooter>
              <Button
                type="submit"
                disabled={loading}>
                {loading ? "Uploading..." : "Create Post"}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}