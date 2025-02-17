"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface ISinglePost{
    title: string;
    image: string;
}

export default function Page({ params }: {params: {id: string}}) {
  console.log(params.id);

  const [singlePost, setSinglePost] = useState<ISinglePost | undefined>(undefined);

  const { toast } = useToast();


  useEffect(() => {

    const fetchSinglePost = async () => {
        try {
          const response = await axios.get(`https://fullstack-learn.onrender.com/posts/${params.id}`);
          setSinglePost(response.data);
        } catch (error) {
          toast({
            title: "Something went wrong while fetching the single post",
          });
          console.log("Something went wrong", error);
        }
      };


    fetchSinglePost();
  }, [params.id,toast]);

  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  console.log(title, image);

  console.log(singlePost);

  useEffect(() => {
    if (singlePost) {
      setTitle(singlePost.title);
      setImage(singlePost.image);
    }
  }, [singlePost]);

  const handlePostUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
    await axios.patch(`https://fullstack-learn.onrender.com/posts/${params.id}`, {
        title: title,
        image: image,
      });
      
    //   fetchSinglePost();
      toast({
        title: "Post updated successfully",
      });

    } catch (error) {
      console.log("Something went wrong", error);
      toast({
        title: "Something went wrong while updating the post",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handlePostUpdate}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          defaultValue={singlePost?.title}
        />
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image Url"
          defaultValue={singlePost?.image}
        />
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
}