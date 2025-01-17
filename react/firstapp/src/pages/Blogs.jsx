import React, { useEffect, useState } from "react";
import axios from "axios";
import blog_img from "../images/blogs_img.avif";

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
    <div>
      <div className=" bg-gradient-to-b  from-gray-700 to-gray-300 p-1">
        <div className="text-center py-20 rounded-b-3xl flex flex-col gap-7 bg-gradient-to-b from-[#051216] to-[#1b6075] text-white ">
          <p className=" text-3xl font-semibold ">BLOGS</p>
          <p className=" text-lg opacity-70 w-8/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            facilis iste consequuntur unde! Consequatur qui laudantium facilis,
            adipisci nisi ab voluptate voluptatem?
          </p>
        </div>
      </div>

      <div className=" bg-gray-300">
        <div className=" w-10/12 mx-auto grid grid-cols-3 gap-6 py-20">
          {blogs?.map((blog, index) => (
            <div className=" border rounded-3xl shadow-md p-4 bg-white flex flex-col gap-4 cursor-pointer hover:border-gray-800/40 hover:border-2 duration-300">
              <div className=" h-40 w-80 overflow-hidden rounded-3xl hover:border"> <img className=" hover:scale-110 duration-500" src={blog_img} alt="" /></div>
              <p className=" text-2xl line-clamp-1 font-semibold opacity-85 ">
                {blog.title}
              </p>
              <p className=" line-clamp-2 opacity-80">{blog.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
