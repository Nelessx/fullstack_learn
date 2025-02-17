import React from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" w-11/12 mx-auto flex justify-between py-5">
      <Image
        className=" w-32 h-full"
        src="/logo.png"
        alt="img"
        height={500}
        width={500}
      />
      <div className=" flex gap-1 items-center">
        <div className="hover:bg-[#e2e2e9] hover:rounded-lg duration-300 cursor-pointer px-4 py-2 font-semibold text-[#29294B]/90 flex ">Homepages <ChevronDown/> </div>
        <div className="hover:bg-[#e2e2e9] hover:rounded-lg duration-300 cursor-pointer px-4 py-2 font-semibold text-[#29294B]/90 flex ">Features <ChevronDown/> </div>
        <div className="hover:bg-[#e2e2e9] hover:rounded-lg duration-300 cursor-pointer px-4 py-2 font-semibold text-[#29294B]/90">About</div>
        <div className="hover:bg-[#e2e2e9] hover:rounded-lg duration-300 cursor-pointer px-4 py-2 font-semibold text-[#29294B]/90">Contact</div>
      </div>

      <div className=" flex gap-3 items-center">
        <div className=" p-2 rounded-full hover:bg-[#e2e2e9] transition-colors text-[#29294B]/90 duration-300 cursor-pointer ">
        <Search className=" size-5" />
        </div>
        <p className=" text-[#c7c7cd]">|</p>
        <button className="px-4 py-2 bg-gradient-to-t from-blue-500 to-gray-500 hover:[background-image:none] hover:bg-blue-500 hover:shadow-lg hover:shadow-slate-500/90 rounded-lg items-center text-white font-semibold">Buy Now</button>
      </div>
    </div>
  );
}
