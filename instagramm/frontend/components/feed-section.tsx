"use client";
import { Eye, FilePen, Heart, MessageCircleMore, Share, Trash } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export interface IPost {
  _id: string;
  image: string;
  title: string;
  likeCount: number;
  comments: [
    {
      commentMessage: string;
    }
  ];
}
export default function FeedSection() {
  const { toast } = useToast();

  const [posts, setPosts] = useState<IPost[] | null>(null);
  const fetchPosts = async () => {
    try {
      const receivedPosts = await axios.get("https://fullstack-learn.onrender.com/posts");
      console.log(receivedPosts.data);
      setPosts(receivedPosts.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDeletePost = async (_id: string) => {
    try {
      // run delete function backend ko
      const response = await axios.delete(`https://fullstack-learn.onrender.com/posts/${_id}`);
      console.log(response);
      fetchPosts();
      // window.location.reload();
      toast({
        title: "Post Deleted",
        description: "Friday, February 10, 2023 at 5:57 PM",
      });
    } catch (error) {
      console.log("Delete Failed", error);
      toast({
        title: "Post deletion failed",
        description: "Friday, February 10, 2023 at 5:57 PM",
      });
    }
  };

  const handleLikePost = async (_id: string) => {
    const respose = await axios.patch(`https://fullstack-learn.onrender.com/posts/${_id}`, {
      $inc: { likeCount: 1 },
    });

    fetchPosts();
    console.log(respose, "this is likecount response");
    try {
    } catch (error) {
      toast({
        title: "Like Failed",
      });
      console.log("Like Failed", error);
    }
  };

  //  For Comment------------------------->
  const [commentText, setCommentText] = useState<string>("");
  console.log(commentText, "this is comment text");

  const handlePostAComment = async (e: React.FormEvent<HTMLFormElement> ,_id: string) => {
    e.preventDefault()
  
    const respose = await axios.patch(`https://fullstack-learn.onrender.com/posts/${_id}`, {
      $push: { comments: { commentMessage: commentText } },
    });

    fetchPosts();
    setCommentText("");
    console.log(respose, "This is comment response");
    try {
    } catch (error) {
      toast({
        title: "Comment Failed",
      });
      console.log("Comment Failed", error);
    }
  };

  // Show comments handler ---------------------------------->
  const [showComment, setShowComment] = useState<boolean>(false);
  const [currentCommentWalaId, setcurrentCommentWalaId] = useState<string>("");
  console.log(showComment, "this is show comment");
  console.log(currentCommentWalaId, "this is current comment");

  return (
    <div className=" space-y-8">
      {posts?.map((post: IPost, index: number) => (
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

            <Link href={`/posts/view/${post._id}`}>
              <Eye />
            </Link>

            <Link href={`/posts/edit/${post._id}`}>
              <FilePen />
            </Link>

            <Trash onClick={() => handleDeletePost(post._id)} />
          </div>

          <Image
            className="object-cover"
            src={post.image}
            alt="img"
            height={500}
            width={500}
          />

          <div className=" flex items-center gap-4">
            <Heart onClick={() => handleLikePost(post._id)} />
            {post.likeCount}
            <MessageCircleMore
              onClick={() => {
                setShowComment(!showComment);
                setcurrentCommentWalaId(post._id);
              }}
            />{" "}
            {post.comments.length}
            <Share />
          </div>
          <p>{post.title}</p>

          <form onSubmit={(e)=>handlePostAComment(e,post._id)} className=" flex items-center gap-4">
            <Input
              value={commentText}
              required={true}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment"
            />
            <Button type="submit">Comment</Button>
          </form>

          {showComment === true && currentCommentWalaId === post._id && (
            <div className=" bg-gray-200 p-4 rounded-lg border border-sky-200">
              {post.comments.map((comment, index:number) => (
                <p key={index}>{comment.commentMessage}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
