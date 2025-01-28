'user client'
import React from "react";
import Navbar from "@/components/navbar";
import StorySection from "@/components/story-section";
import FeedSection from "@/components/feed-section";

export default function page() {
  return (
    <div className="w-4/12 mx-auto bg-gray-100 min-h-screen p-4 space-y-6">
      <Navbar />
      <StorySection/>
      <FeedSection/>
    </div>
  );
}