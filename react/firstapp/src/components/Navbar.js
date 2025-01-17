import React from "react";
import { Link } from "react-router";
import logo from "../logo.svg";
// import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <div>
      <nav className=" bg-[#051216]">
        <header className="flex items-center justify-between lg:w-10/12 mx-auto   text-white p-2">
          <Link to={"/"}>
          <svg
            className=" text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="currentColor"
                d="M1522 127q82 0 155 31t127 86t85 127t32 155v994q0 83-31 155t-86 127t-127 85t-155 32H528q-83 0-155-31t-127-86t-86-126t-32-156V526q0-83 31-155t86-127t127-85t156-32zm125 1466q5 0 8-9t5-22t2-22t1-12q0-80-31-156t-82-138q11-38 16-78t6-81q0-106-34-208t-92-192t-137-165t-167-128q72 97 116 212t44 237q0 51-9 100t-27 98q-7-5-13-8t-14-8q-48-26-93-60t-90-68q-112-84-217-174T634 521q-5-4-8-10t-6-10t-7-8t-11-4q0 4 17 28t43 60t58 75t58 76t49 62t26 32q33 40 67 78t69 77q-63-35-121-77t-116-85q-81-60-159-123T439 560q17 28 36 53t39 50q64 80 130 158t135 154t143 145t156 133q-65 39-138 57t-148 19q-130 0-254-47t-229-123q57 92 137 170t176 136t201 89t217 33q72 0 141-15t133-49q38-20 75-34t81-14q63 0 102 30t70 83q2 5 5 5"
              />
            </svg>          
          </Link>
          

          <div className=" hidden lg:block">
            <div className="flex justify-between gap-10 font-semibold ">
              <Link
                to={"/"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                About
              </Link>
              <Link
                to={"/Service"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                Services
              </Link>
              
              <Link
                to={"/contact"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                Contact
              </Link>
              <Link
                to={"/Blogs"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                Blogs
              </Link>

              <Link
                to={"/users"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                Users
              </Link>
              <Link href="#test-footer" 
              to={"/Testfooter"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                Test_footer
              </Link>
            </div>
          </div>

          <button className=" bg-orange-600 pl-8 pr-8 pt-3 pb-3 font-semibold rounded-sm ">
            Login
          </button>
        </header>
      </nav>
    </div>
  );
}
