import Image from "next/image";
import React from "react";

export default function StorySection() {
  const stories = [
    {
      username: "username",
      image: "https://images.unsplash.com/photo-1726502102472-2108ef2a5cae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "usernasrge",
      image: "https://images.unsplash.com/photo-1726502102472-2108ef2a5cae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "usesdfsdfrname",
      image: "https://images.unsplash.com/photo-1726502102472-2108ef2a5cae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "useufrname",
      image: "https://images.unsplash.com/photo-1726502102472-2108ef2a5cae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "useythername",
      image: "https://images.unsplash.com/photo-1726502102472-2108ef2a5cae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className=" grid grid-cols-5 gap-4 overflow-hidden rounded-full  ">
      {stories.map((story, index) => (
        <div key={index} className=" h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-orange-600">
          <Image src={story.image} height={100} width={100} alt="img"/>
        </div>
    ))}
    </div>
  );
}
