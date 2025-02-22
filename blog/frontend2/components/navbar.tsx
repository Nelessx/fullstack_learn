import React from "react";
import Image from "next/image";
import { ModeToggle } from "./modeToggle";
import NavMenu from "./ui/navMenu";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" w-11/12 mx-auto flex justify-between py-5">
      <Image
        className=" w-32 h-full"
        src="/logo-dark.png"
        alt="img"
        height={500}
        width={500}
      />
      
        
        <NavMenu/>
      

      <div className=" flex gap-3 items-center">
        <div className=" p-2 rounded-full hover:bg-[#0000002f] transition-colors text-[#ffffff]/90 duration-300 cursor-pointer ">
          <Search className=" size-5" />
        </div>
        <p className=" text-[#c7c7cd]">|</p>
        <ModeToggle />
        {/* <button className="px-4 py-2 bg-gradient-to-t from-blue-500 to-gray-500 hover:[background-image:none] hover:bg-blue-500 hover:shadow-lg hover:shadow-slate-500/90 rounded-lg items-center text-white font-semibold">Buy Now</button> */}
      </div>
    </div>
  );
}
