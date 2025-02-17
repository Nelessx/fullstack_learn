"use client";
import { IArticle } from "@/app/page";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BlogReadSection({ _id }: { _id: string }) {
  const [singleArticle, setsingleArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    const fetchSingleArticle = async () => {
      try {
        const response = await axios.get(`https://blog-backend-3hpg.onrender.com/articles/${_id}`);
        setsingleArticle(response.data.article);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };

    fetchSingleArticle();
  }, [_id]);

  return (
    <div>
      {singleArticle && (
        <div>
          <p>{singleArticle._id}</p>
          <p>{singleArticle.title}</p>
          <p>{singleArticle.content}</p>
        </div>
      )}
    </div>
  );
}