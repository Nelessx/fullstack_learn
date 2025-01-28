"use client";
import { Delete, DeleteIcon, Heart, MessageCircleMore, MoreHorizontal, Share, Trash } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";


export default function FeedSection() {
  const { toast } = useToast()

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const receivedPosts = await axios.get("http://localhost:4000/posts");
      console.log(receivedPosts.data);
      setPosts(receivedPosts.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDeletePost = async (_id) => {
    try {
      // run delete function backend ko
      const response = await axios.delete(`http://localhost:4000/posts/${_id}`);
      console.log(response);
      fetchPosts() // to refresh the page each time a post is deleted
      toast({
        title: "Post Deleted",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    } catch (error) {
      console.log("Delete Failed", error);
      toast({
        title: "Post deletion failed",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    }
  };

  return (
    <div className=" space-y-8">
      {posts?.map((post, index) => (
        <div
          key={index}
          className=" space-y-4">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Image
                className=" h-10 w-10 rounded-full object-cover"
                src={"https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D"}
                alt="img"
                height={500}
                width={500}
              />
              <p>Loki Chaulagain</p>
            </div>

            <Trash onClick={()=>handleDeletePost(post._id)} />
          </div>

          <Image
            className="object-cover"
            src={post.image}
            alt="img"
            height={500}
            width={500}
          />

          <div className=" flex items-center gap-4">
            <Heart />
            <MessageCircleMore />
            <Share />
          </div>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}