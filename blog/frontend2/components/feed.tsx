import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IArticle } from "@/app/page";
export default function Feed({ articles }:{articles:IArticle[]}) {
  console.log(articles, "Articles in child section");

  return (
    <div>
      {articles.map((article: IArticle, index: number) => (
        <Link href={`/view/${article._id}`} key={index} className="border ">
          <p>{article._id}</p>

          <p>{article.title}</p>
          <p>{article.content}</p>
        </Link>
      ))}
    </div>  
  );
}
