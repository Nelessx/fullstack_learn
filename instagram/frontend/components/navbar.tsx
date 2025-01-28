import React from 'react'
import { Heart } from "lucide-react";
import { Button } from './ui/button';
import { RegisterDialog } from './register-dialog';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <p>Instagram</p>
      <div className="flex items-center gap-4">

        {/* <Button>Register</Button> */}
        <RegisterDialog/>
        <Heart />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-message-circle-more"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M8 12h.01" />
          <path d="M12 12h.01" />
          <path d="M16 12h.01" />
        </svg>
      </div>
    </div>
  )
}
