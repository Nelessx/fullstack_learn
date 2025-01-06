import React, { useState } from "react";
import logo from "./favicon.ico";
import dashboard from "./Dashboard.png";
import amazon from "./amazon.png";
import axios from "axios";
import { Link } from "react-router";

export default function App() {
  const [blogs, setBlogs] = useState();

  const fetchblog = async () => {
    const fetchblogs = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setBlogs(fetchblogs.data);
  };

  console.log(blogs);

  const student = [
    {
      name: "nilesh",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
            <path
              stroke-linecap="round"
              d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"
            />
            <path
              stroke-linecap="round"
              d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "hari",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
            <path
              stroke-linecap="round"
              d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"
            />
            <path
              stroke-linecap="round"
              d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "ram",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
            <path
              stroke-linecap="round"
              d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"
            />
            <path
              stroke-linecap="round"
              d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "ram",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
            <path
              stroke-linecap="round"
              d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"
            />
            <path
              stroke-linecap="round"
              d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "ram",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
            <path
              stroke-linecap="round"
              d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"
            />
            <path
              stroke-linecap="round"
              d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "ram",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
            <path
              stroke-linecap="round"
              d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"
            />
            <path
              stroke-linecap="round"
              d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
            />
          </g>
        </svg>
      ),
    },
  ];

  const students = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Je Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
    {
      id: 2,
      name: "Jae Doe",
    },
    {
      id: 2,
      name: "Jan Doe",
    },
    {
      id: 2,
      name: "ane Doe",
    },
  ];
  const [winner, setwinner] = useState("");
  console.log(winner);

  return (
    <div>
      <div>
        <div>
          {/* <nav className=" bg-[#051216]">
            <header className="flex items-center justify-between lg:w-10/12 mx-auto   text-white p-2">
              <img src={logo} alt="" />

              <div className=" hidden lg:block">
                <div className="flex justify-between gap-10 font-semibold ">
                  <Link  className=" hover:text-orange-500 duration-300 cursor-Linkointer">
                    Home
                  </Link>
                  <Link to={"/about"} className=" hover:text-orange-500 duration-300 cursor-Linkointer">
                    About
                  </Link>
                  <Link to={"/Service"} className=" hover:text-orange-500 duration-300 cursor-Linkointer">
                    Services
                  </Link>
                  <Link to={"/price"} className=" hover:text-orange-500 duration-300 cursor-Linkointer">
                    Price
                  </Link>
                  <Link to={"/contact"} className=" hover:text-orange-500 duration-300 cursor-Linkointer">
                    Contact
                  </Link>
                </div>
              </div>

              <button className=" bg-orange-600 pl-8 pr-8 pt-3 pb-3 font-semibold rounded-sm ">
                Login
              </button>
            </header>
          </nav> */}

          <div className=" lg:w-7/12 mx-auto mt-24 flex flex-col items-center gap-8">
            <div className=" text-3xl lg:text-6xl text-center font-semibold leading-relaxed">
              Make Your Business Flourish with{" "}
              <span className=" text-orange-500">Digital Marketing</span>
            </div>

            <p className=" text-center">
              Save time on creating a website from scratch. Use a rich
              collection of ready-made websites to get your project off to a
              fast start opposed to using 'Content here, content here', making
              it look like readable English.
            </p>

            <div className=" space-x-8 ">
              <button className=" bg-slate-950 text-white px-8 py-4 ">
                Try 30-Day Trial
              </button>
              <button className=" border border-slate-950 px-8 py-4">
                {" "}
                Schedule a Call
              </button>
            </div>

            <img
              className=" border p-4 rounded-2xl bg-gray-200"
              src={dashboard}
              alt=""
            />
          </div>
        </div>

        <div className=" w-8/12 mx-auto grid grid-cols-6 space-x-8 mt-20">
          <img src={amazon} alt="" />
          <img src={amazon} alt="" />
          <img src={amazon} alt="" />
          <img src={amazon} alt="" />
          <img src={amazon} alt="" />
          <img src={amazon} alt="" />
        </div>
      </div>

      <div></div>

      <div className=" bg-yellow-200 py-10">
        <div className=" grid grid-cols-2 lg:grid-cols-5 gap-8 w-10/12 mx-auto py-20 bg-yellow-200 ">
          {student.map((std) => (
            <div className="bg-slate-500 p-7 w-40 h-40 rounded-2xl flex flex-col justify-around items-center">
              <div>{std.image}</div>
              <p className="text-lg font-semibold">{std.name}</p>
            </div>
          ))}
        </div>
      </div>

      <section className=" bg-orange-200 space-y-14">
        <div className=" bg-orange-200 w-11/12 mx-auto space-y-11 p-8">
          <div className=" flex flex-col items-center gap-8">
            <p className=" text-orange-400 font-semibold text-lg">
              OUR PRICING
            </p>
            <p className=" text-5xl font-semibold">
              Choose The Plan That's <br /> Right For{" "}
              <span className=" text-orange-400"> Your Business</span>
            </p>
          </div>

          <div className=" grid grid-cols-3 gap-9 items-center ">
            <div className=" bg-slate-500 space-y-10 rounded-lg">
              <div className=" p-4 space-y-10">
                <div className=" space-y-4 p-5 bg-orange-300 rounded-lg">
                  <p className=" text-3xl font-semibold">Free</p>
                  <p>Explore the products and power small personal projects.</p>
                </div>

                <div className=" space-y-4">
                  <p>
                    <span className="text-6xl">$0</span>/month
                  </p>
                  <p>include :</p>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center p-6 bg-slate-300">
                <button className="border-2 border-red-500 px-8 py-2 rounded-lg">
                  {" "}
                  Get Started
                </button>
              </div>
            </div>

            <div className=" bg-slate-500 space-y-10 rounded-lg">
              <div className=" p-4 space-y-10">
                <div className=" space-y-4 p-5 bg-orange-300 rounded-lg">
                  <p className=" text-3xl font-semibold">Free</p>
                  <p>Explore the products and power small personal projects.</p>
                </div>

                <div className=" space-y-4">
                  <p>
                    <span className="text-6xl">$0</span>/month
                  </p>
                  <p>include :</p>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center p-6 bg-slate-300">
                <button className="border-2 border-red-500 px-8 py-2 rounded-lg">
                  {" "}
                  Get Started
                </button>
              </div>
            </div>

            <div className=" bg-slate-500 space-y-10 rounded-lg">
              <div className=" p-4 space-y-10">
                <div className=" space-y-4 p-5 bg-orange-300 rounded-lg">
                  <p className=" text-3xl font-semibold">Free</p>
                  <p>Explore the products and power small personal projects.</p>
                </div>

                <div className=" space-y-4">
                  <p>
                    <span className="text-6xl">$0</span>/month
                  </p>
                  <p>include :</p>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <p>✅</p>
                    <p>Lorem, ipsum dolor.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center p-6 bg-slate-300">
                <button className="border-2 border-red-500 px-8 py-2 rounded-lg">
                  {" "}
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* game */}

      <p className=" text-4xl font-bold"> winner is {winner}</p>

      {/* <div className=" grid grid-cols-5 gap-8 p-12">
      <button onClick={ ()=> setwinner("ram")} className=" bg-orange-600 pl-8 pr-8 pt-3 pb-3 font-semibold rounded-sm ">
                RAM
            </button>
            <button onClick={ ()=> setwinner("sita")} className=" bg-orange-600 pl-8 pr-8 pt-3 pb-3 font-semibold rounded-sm ">
                SITA
            </button>
            <button onClick={ ()=> setwinner("gita")} className=" bg-orange-600 pl-8 pr-8 pt-3 pb-3 font-semibold rounded-sm ">
                GITA
            </button>
      </div> */}
      <div className=" grid grid-cols-5 gap-8 p-12">
        {students.map((student) => (
          <button
            onClick={() => setwinner(student.name)}
            className=" bg-blue-600 pl-8 pr-8 pt-3 pb-3 font-semibold rounded-sm "
          >
            {student.name}
          </button>
        ))}
      </div>

      <div className="  bg-green-300 ">
        <div className=" text-white w-11/12 mx-auto p-10 items-center text-center flex-col gap-8  ">
          <button
            onClick={fetchblog}
            className=" border-2 px-8 py-4 rounded-2xl border-slate-400 bg-sky-900 text-base font-semibold font-sans hover:bg-slate-100 cursor-pointer hover:text-slate-950 duration-500"
          >
            {" "}
            GET BLOGS
          </button>

          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-9 pt-14">
            {blogs?.map((blog) => (
              <div className=" border rounded-lg p-4 bg-emerald-950 ">
                <p className=" text-3xl font-semibold border-b pb-3">{blog.title}</p>
                <p className=" opacity-75 pt-3">{blog.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
