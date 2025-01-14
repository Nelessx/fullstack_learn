import React from "react";

export default function Testfooter() {
  const Overview = [
    {
      id1: 1,
      title: "Shop",
    },
    {
      id1: 1,
      title: "Deals",
    },
    {
      id1: 1,
      title: "Support",
    },
    {
      id1: 1,
      title: "Policy",
    },
    {
      id1: 1,
      title: "Cart",
    },
  ];

  const About = [
    {
      id1: 1,
      title: "Mission",
    },
    {
      id1: 1,
      title: "Vision",
    },
    {
      id1: 1,
      title: "Team",
    },
    {
      id1: 1,
      title: "Story",
    },
    {
      id1: 1,
      title: "Values",
    },
  ];

  const Blog = [
    {
      id1: 1,
      title: "Trends",
    },
    {
      id1: 1,
      title: "Updates",
    },
    {
      id1: 1,
      title: "Tips",
    },
    {
      id1: 1,
      title: "Insights",
    },
    {
      id1: 1,
      title: "Guides",
    },
  ];

  const Twitter = [
    {
      id1: 1,
      title: "Tweets",
    },
    {
      id1: 1,
      title: "Posts",
    },
    {
      id1: 1,
      title: "Mentions",
    },
    {
      id1: 1,
      title: "Shares",
    },
    {
      id1: 1,
      title: "Tags",
    },
  ];

  const Terms = [
    {
      id1: 1,
      title: "Usage",
    },
    {
      id1: 1,
      title: "Policy",
    },
    {
      id1: 1,
      title: "Rules",
    },
    {
      id1: 1,
      title: "Access",
    },
    {
      id1: 1,
      title: "Rights",
    },
  ];

  return (
    <div>
      <div className="  bg-gray-500 py-11 ">
        <div className="flex flex-col gap-12 w-10/12 mx-auto">
        
          <div className=" flex flex-col gap-10 py-12 items-center justify-center bg-gradient-to-tl from-black via-gray-900 to-black  text-white rounded-lg">
            <div className=" flex gap-2  items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#c8c6c6"
                  d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32m-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312m168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312"
                />
              </svg>
              <p className=" text-lg font-semibold">Untitled UI</p>
            </div>

            <div className="flex flex-row gap-5 text-md font-semibold opacity-90">
              <p>Overview</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Careers</p>
              <p>Help</p>
              <p>Privacy</p>
            </div>
            <div className=" flex  items-center justify-between pt-6 w-10/12 mx-auto border-t-2 border-blue-500/25">
              <div class="flex items-center border rounded-sm overflow-hidden w-96">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="flex-grow px-4 py-2 outline-none text-black"
                />
                <button class="bg-teal-900 text-white px-6 py-2 font-medium hover:bg-gray-900 duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-md opacity-90">
                © 2025 United UL All Rights Reserved
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-20 py-12 items-center justify-center bg-gradient-to-tl from-black via-gray-900 to-black    text-white rounded-lg">
            <div className=" flex items-center justify-between gap-x-80">
              <div className=" flex flex-col gap-1">
                <p className=" text-lg font-semibold">Let's stay in touch!</p>
                <p className=" text-md  opacity-80 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>

              <div class="flex items-center border rounded-sm overflow-hidden w-96">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="flex-grow px-4 py-2 outline-none text-black"
                />
                <button class="bg-teal-900 text-white px-6 py-2 font-medium hover:bg-gray-900 duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            <div className=" flex justify-between  w-10/12 mx-auto">
              <div className=" grid  grid-cols-[300px_auto_auto_auto_auto_auto] gap-16">
                <div className=" flex flex-col gap-8">
                  <div className=" flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c8c6c6"
                        d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32m-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312m168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312"
                      />
                    </svg>
                    <p className=" text-lg font-semibold">Untitled UI</p>
                  </div>
                  <p className=" opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam alias architecto distinctio inventore ad sint excepturi
                    nobis quo est omnis.
                  </p>
                </div>

                <div className="flex flex-col  justify-center">
                  <p className=" text-md font-semibold mb-4 opacity-90">
                    Overview
                  </p>
                  {Overview.map((item, index) => (
                    <p className=" mb-4 font-semibold opacity-60 cursor-pointer hover:opacity-100 hover:translate-x-1 duration-500">
                      {item.title}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col  justify-center">
                  <p className=" text-md font-semibold mb-4 opacity-90">
                    About us
                  </p>
                  {About.map((item, index) => (
                    <p className=" mb-4 font-semibold opacity-60 cursor-pointer hover:opacity-100 hover:translate-x-1 duration-500">
                      {item.title}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col  justify-center">
                  <p className=" text-md font-semibold mb-4 opacity-90">Blog</p>
                  {Blog.map((item, index) => (
                    <p className=" mb-4 font-semibold opacity-60 cursor-pointer hover:opacity-100 hover:translate-x-1 duration-500">
                      {item.title}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col  justify-center">
                  <p className=" text-md font-semibold mb-4 opacity-90">
                    Twitter
                  </p>
                  {Twitter.map((item, index) => (
                    <p className=" mb-4 font-semibold opacity-60 cursor-pointer hover:opacity-100 hover:translate-x-1 duration-500">
                      {item.title}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col  justify-center">
                  <p className=" text-md font-semibold mb-4 opacity-90">
                    Terms
                  </p>
                  {Terms.map((item, index) => (
                    <p className=" mb-4 font-semibold opacity-60 cursor-pointer hover:opacity-100 hover:translate-x-1 duration-500">
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-between pt-6 w-10/12 border-t border-blue-500/25">
              <p className="text-md opacity-90">
                © 2025 United UL All Rights Reserved
              </p>

              <div className=" flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#c8c6c6"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#c8c6c6"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#c8c6c6"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#c8c6c6"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      stroke="#c8c6c6"
                      stroke-width="2"
                      d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                    />
                    <circle cx="16.5" cy="7.5" r="1.5" fill="#c8c6c6" />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#c8c6c6"
                      stroke-width="2"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#c8c6c6"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=" bg-gradient-to-tl from-black via-gray-900 to-black    text-white rounded-lg">
            <div className=" w-10/12 flex flex-col gap-14 py-12 mx-auto">
              <div className=" flex items-center justify-between">
                <div className=" flex gap-2  items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#c8c6c6"
                      d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32m-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312m168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312"
                    />
                  </svg>
                  <p className=" text-lg font-semibold">Untitled UI</p>
                </div>

                <div class="flex items-center border rounded-sm overflow-hidden w-96">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="flex-grow px-4 py-2 outline-none text-black"
                  />
                  <button class="bg-teal-900 text-white px-6 py-2 font-medium hover:bg-gray-900 duration-300">
                    Subscribe
                  </button>
                </div>
              </div>

              <p className="text-md opacity-70 text-right">
                © 2025 United UL All Rights Reserved
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
