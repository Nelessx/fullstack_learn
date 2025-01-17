import React from "react";



// Demo styles, see 'Styles' section below for some notes on us

// import Slider from "./Components/slider";

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Example() {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-10/12 relative bg-gray-100 rounded-xl shadow-lg overflow-hidden m-6 p-4"
      >
        <SwiperSlide>
          <img
            className="h-96 w-full object-cover rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1734545294056-9dbee090d3ab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-96 w-full object-cover rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1734545294117-a910817d5961?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-96 w-full object-cover rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1734543932076-a25bc1c8c0c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-96 w-full object-cover rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1734543932197-28a34e130d1f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-96 w-full object-cover rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

   
    </div>
  );
}
