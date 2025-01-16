import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState();
  const fetchBlogs = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    setBlogs(response.data);
  };

  console.log(blogs);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className=" w-10/12 mx-auto grid grid-cols-3 gap-4">
      {blogs?.map((blog, index) => (
        <div className=" border shadow-md p-4">
          <p className=" text-2xl">{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}
