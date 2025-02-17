"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";


export interface IUser{
    _id: string;
    username: string;
    password: string;
    profilePicture: string;

}

export default function StorySection() {
  const [stories, setStories] = useState<IUser[] | null>(null);

  const fetchStories = async () => {
    try {
      const receivedStories = await axios.get("https://fullstack-learn.onrender.com/users");
      setStories(receivedStories.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  console.log(stories, "its  stories");

  useEffect(() => {
    fetchStories();
  }, []);

  

  return (
    <div className=" grid grid-cols-5 gap-4 ">
      {stories?.map((story:IUser, index:number) => (
        <div key={index} className=" h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-orange-600">
            <Image className=" h-16 w-16 object-cover" src={story.profilePicture} alt="img" height={500} width={500} />
        </div>
      ))}
    </div>
  );
}
