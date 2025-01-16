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
          <img className="w-20" src={logo} alt="" /></Link>
          

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
