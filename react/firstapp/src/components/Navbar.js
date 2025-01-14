import React from "react";
import { Link } from "react-router";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <div>
      <nav className=" bg-[#051216]">
        <header className="flex items-center justify-between lg:w-10/12 mx-auto   text-white p-2">
          <img className="w-20" src={logo} alt="" />

          <div className=" hidden lg:block">
            <div className="flex justify-between gap-10 font-semibold ">
              <Link
                to={"/app"}
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
                to={"/price"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                Price
              </Link>
              <Link
                to={"/contact"}
                className=" hover:text-orange-500 duration-300 cursor-Linkointer"
              >
                Contact
              </Link>
              
              <Link
                to={"/testfooter"}
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
