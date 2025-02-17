import { IArticle } from "@/app/page";
import axios from "axios";
import Link from "next/link";
import React from "react";

interface IBlogSectionProps {
  articles: IArticle[];
  fetchAllArticle: () => Promise<void>;
}

export default function BlogSection({
  articles,
  fetchAllArticle,
}: IBlogSectionProps) {
  const deleteArticle = async (_id: string) => {
    try {
      const response = await axios.delete(
        `https://blog-backend-3hpg.onrender.com/articles/${_id}`
      );
      console.log(response.data, "This is response");
      fetchAllArticle();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <div>
      {articles?.map((article: IArticle, index) => (
        <div key={index}>
          <Link href={`/view/${article._id}`} className="border p-2">
            <p>{article._id}</p>
            <p>{article.title}</p>
            <p>{article.content}</p>
          </Link>

          <p
            onClick={() => deleteArticle(article._id)}
            className="bg-red-500 p-2 w-20 cursor-pointer"
          >
            Delete
          </p>
        </div>
      ))}
    </div>
  );
}
