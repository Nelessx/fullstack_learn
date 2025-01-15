import React from "react";
import dashimage from "../images/Dashboard.png"

export default function Hero() {
  return (
    <div className=" lg:w-6/12 mx-auto mt-24 flex flex-col items-center gap-8 ">
      <h1 className=" text-3xl lg:text-6xl text-center font-semibold leading-relaxed  ">
        Make Your Business Flourish with{" "}
        <span className=" text-orange-500">Digital Marketing</span>{" "}
      </h1>

      <p className=" text-center">
        Save time on creating a website from scratch. Use a rich collection of
        ready-made websites to get your project off to a fast start opposed to
        using 'Content here, content here', making it look like readable
        English.
      </p>

      <div className=" space-x-4 ">
        <button className=" bg-slate-800 text-white px-6 py-3">
          Try 30 Day Trial
        </button>
        <button className=" border border-slate-800 px-6 py-3">
          Schedule a Call
        </button>
      </div>

      <img
        className=" border p-4 rounded-2xl bg-gray-50"
        src={dashimage}
        alt=""
      />
    </div>
  );
}
