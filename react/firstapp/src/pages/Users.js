import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className=" w-10/12 mx-auto grid grid-cols-3 gap-4 py-16">
      {users?.map((users, index) => (
        <div className=" border shadow-md p-4">
          <p className=" text-2xl">{users.name}</p>
          <p>{users.email}</p>
          <p>{users.address.street}</p>
        </div>
      ))}
    </div>
  );
}
