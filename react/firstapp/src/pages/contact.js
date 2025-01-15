import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

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

      <Accordion className="w-10/12 mt-20 mx-auto p-4 border rounded-lg divide-y divide-gray-200">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none">
              What harsh truths do you prefer to ignore?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="px-4 py-2 bg-white">
            <p className="text-sm text-gray-600">
              Facing reality can be difficult, but ignoring the truth often
              leads to greater challenges in the long run.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none">
              Is free will real or just an illusion?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="px-4 py-2 bg-white">
            <p className="text-sm text-gray-600">
              Philosophers and scientists continue to debate this topic,
              exploring whether our decisions are predetermined or a product of
              choice.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none">
              What are the most important lessons in life?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="px-4 py-2 bg-white">
            <p className="text-sm text-gray-600">
              Kindness, resilience, and the ability to adapt to change are
              invaluable lessons that shape a fulfilling life.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none">
              How can you measure happiness?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="px-4 py-2 bg-white">
            <p className="text-sm text-gray-600">
              Happiness is subjective and can be measured by moments of
              contentment, meaningful relationships, and personal growth.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none">
              What is the role of technology in our lives?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="px-4 py-2 bg-white">
            <p className="text-sm text-gray-600">
              Technology enhances convenience, connects people, and drives
              innovation, but balancing its use is crucial for well-being.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
