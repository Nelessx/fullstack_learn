"use client"
import { useUser } from '@/user-contex'
import React from 'react'

export default function Page() {
    const {user, myRollNo}= useUser()

  return (
    <div>
        {myRollNo}
      ddddddddddddddddddddd
    </div>
  )
}
