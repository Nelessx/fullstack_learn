import React, { useEffect, useState } from "react";
import axios from "axios";
import profile from "../images/profile.avif";

export default function Blogs() {
  const [users, setBlogs] = useState();
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    setBlogs(response.data);
  };

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-300">
      <div className=" bg-gradient-to-b  from-gray-700 to-gray-300 p-1">
        <div className="text-center py-20 rounded-b-3xl flex flex-col gap-7 bg-gradient-to-b from-[#051216] to-[#1b6075] text-white ">
          <p className=" text-3xl font-semibold ">USERS</p>
          <p className=" text-lg opacity-70 w-8/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            facilis iste consequuntur unde! Consequatur qui laudantium facilis,
            adipisci nisi ab voluptate voluptatem?
          </p>
        </div>
      </div>

      <div className=" w-10/12 mx-auto grid grid-cols-3 gap-4 py-16">
        {users?.map((users, index) => (
          <div className=" border-gray-100 border-2 shadow-md p-4 items-center rounded-3xl bg-gray-200 flex flex-col gap-2 cursor-pointer hover:border-gray-800/90 hover:border-2 hover:bg-gray-100 duration-300">
            <div className="w-50 rounded-3xl scale-90 overflow-hidden">
              <img src={profile} alt="" />
            </div>
            <p className=" text-2xl text-center font-semibold opacity-90">
              {users.name}
            </p>
            <p className=" opacity-80 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur.
            </p>
            <p className=" opacity-80">{users.email}</p>
            <button className=" px-20 py-4 rounded-full bg-gray-600 text-lg text-white font-semibold hover:bg-slate-700 duration-300">Contact Me</button>
          </div>
        ))}
      </div>
    </div>
  );
}
