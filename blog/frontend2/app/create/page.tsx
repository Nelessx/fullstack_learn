"use client";
import axios from "axios";
import React, { useState } from "react";


export default function Page() {
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(title, content, thumbnail);

  const createArticle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!thumbnail) {
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("content", content);
      formData.append("thumbnail", thumbnail);

      const response = await axios.post("https://blog-backend-3hpg.onrender.com/articles", formData);
      setLoading(false);
      setAuthor("");
      setTitle("");
      setContent("");
      setThumbnail(null);
    } catch (error) {
      console.error("Post creation failed", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={createArticle}
        action=""
        className=" border w-4/12 mx-auto">
        <div className=" p-4 flex flex-col gap-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="border p-2"
          />

          <input
            value={author}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author"
            className="border p-2"
          />

          <textarea
            value={content}
            onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            placeholder="Content"
            className="border p-2 "
          />
          <input
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setThumbnail(e.target.files?.[0] || null )}
            type="file"
            accept="image/*"
            placeholder="Thumbnail"
            className="border  p-2"
          />
          <button
            type="submit"
            className="border bg-blue-500 p-2">
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}