import BlogReadSection from "@/components/blog-read-section";
import React from "react";

interface PageProps {
    params: Promise<{id: string}>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  console.log(id, "This is id");

  return (
    <div>
      <BlogReadSection _id={id} />
    </div>
  );
}