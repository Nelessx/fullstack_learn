import { Heart, MessageCircleMore } from "lucide-react";
import React from "react";
import { RegisterDialog } from "./register-dialog";
import { CreatePostDialog } from "./create-post-dialog";

export default function Navbar() {



  return (
    <div className="  flex items-center justify-between">
      <p>Imstagram</p>

      <div className="flex items-center gap-4">
       
       <CreatePostDialog/>
        <RegisterDialog/>

        <Heart />
        <MessageCircleMore />
      </div>
    </div>
  );
}
