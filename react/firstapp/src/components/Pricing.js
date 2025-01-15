import React from "react";

export default function Pricing() {
  return (
    <div className="bg-orange-100 py-16 mt-12">
      <div className="md:w-8/12 w-11/12 mx-auto flex flex-col items-center space-y-16  ">
        <div className=" space-y-8">
          <p className=" text-center text-orange-500 font-bold">OUR PRICING</p>
          <p className=" text-5xl text-center font-semibold leading-normal">
            Choose The Plan That's Right For <br /> <span className=" text-orange-500">Your Business</span>
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* card 1 */}
          <div className=" bg-white  ">
            <div className=" p-4 space-y-8">
              <div className="bg-orange-100 p-4 space-y-4">
                <p className=" font-bold text-lg">Free</p>
                <p className=" opacity-70">Explore the products and power small personal projects.</p>
              </div>

              <div className=" space-y-4">
                <p className=" text-4xl font-semibold">
                  $0 <span className=" text-sm">/month</span>{" "}
                </p>
                <p>Includes :</p>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-center bg-gray-300 p-4">
              <button className=" border border-orange-500 px-8 py-1">Get Started</button>
            </div>
          </div>

          {/* card 2 */}
          <div className=" bg-white  ">
            <div className=" p-4 space-y-8">
              <div className="bg-orange-100 p-4 space-y-4">
                <p className=" font-bold text-lg">Free</p>
                <p className=" opacity-70">Explore the products and power small personal projects.</p>
              </div>

              <div className=" space-y-4">
                <p className=" text-4xl font-semibold">
                  $0 <span className=" text-sm">/month</span>{" "}
                </p>
                <p>Includes :</p>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-center bg-gray-300 p-4">
              <button className=" border border-orange-500 px-8 py-1">Get Started</button>
            </div>
          </div>

          {/* card 3 */}

          <div className=" bg-white  ">
            <div className=" p-4 space-y-8">
              <div className="bg-orange-100 p-4 space-y-4">
                <p className=" font-bold text-lg">Free</p>
                <p className=" opacity-70">Explore the products and power small personal projects.</p>
              </div>

              <div className=" space-y-4">
                <p className=" text-4xl font-semibold">
                  $0 <span className=" text-sm">/month</span>{" "}
                </p>
                <p>Includes :</p>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>

                <div className=" flex gap-4 ">
                  <p>✅</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-center bg-gray-300 p-4">
              <button className=" border border-orange-500 px-8 py-1">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}