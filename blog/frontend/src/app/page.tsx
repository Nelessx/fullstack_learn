"use client";
import Image from "next/image";
import NavBar from "../../components/navbar";
import HeroSection from "../../components/heroSection";
import Topics from "../../components/topics";
import Feed from "../../components/feed";

export default function Home() {
  return (
    <div className="flex gap-4 flex-row">
      <NavBar />
      <HeroSection />
      <Topics />
      <Feed />
    </div>
  );
}
