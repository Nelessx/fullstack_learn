import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <div className="bg-black  border-b border-b-white/20 border-opacity-10">
        <div className="flex w-11/12 mx-auto gap-10 justify-between items-center">
          <div className="flex items-center gap-10">
            <div>
              <div className=" flex">
                <svg
                  width="32"
                  height="29"
                  viewBox="0 0 89 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M71.6756 64.8817H52.997C48.4311 64.8817 44.3118 67.003 41.4062 70.3987H41.4044C39.5773 72.5363 38.2283 75.1772 37.55 78.1126H42.7904C44.3562 73.6552 48.2476 70.4825 52.8191 70.4028C52.8784 70.4007 52.9377 70.4007 52.997 70.4007H81.8506V64.8817H71.6756ZM43.9041 68.1035C44.1209 67.9337 44.3414 67.7701 44.5656 67.6146C44.3414 67.7721 44.1209 67.9358 43.9041 68.1035Z"
                    fill="#34C6F2"
                  />
                  <path
                    d="M71.2031 27.8155C76.677 21.7728 83.1237 14.6562 88.605 8.60535H69.2296C53.5956 25.864 33.9089 47.5963 18.2508 64.8815H13.0141C28.6797 47.5881 48.3515 25.8721 63.993 8.60535H52.8729C51.5684 10.7491 49.9266 12.6208 48.0328 14.1243H51.926L48.2236 18.2114H7.70144V23.7284H43.226C30.9255 37.307 13.129 56.9528 0.948975 70.3984H20.3225C35.9547 53.1419 55.6413 31.4095 71.2995 14.1243H76.5362C60.8632 31.4259 41.2099 53.1255 25.5591 70.4005H36.6792C36.6792 70.4005 36.6792 70.3984 36.6811 70.3984C37.0072 69.8625 37.3537 69.3429 37.7206 68.8438C37.3537 69.345 37.0072 69.8625 36.6811 70.3984H36.783C38.0857 68.2587 39.7256 66.3891 41.6194 64.8815H41.5193C41.045 65.2579 40.5891 65.6568 40.1481 66.0761C40.5891 65.6568 41.0468 65.2579 41.5193 64.8815H37.628L41.3303 60.7944H81.8507V55.2775H46.328C48.2347 53.1725 68.7089 30.5688 71.2031 27.8155Z"
                    fill="#34C6F2"
                  />
                  <path
                    d="M36.5553 14.1245C41.123 14.1245 45.2423 12.0032 48.1479 8.60548C49.975 6.46989 51.324 3.82903 52.0022 0.893616H46.7618C45.1756 5.40823 41.2027 8.60548 36.5553 8.60548H7.70166V14.1245H36.5553Z"
                    fill="#34C6F2"
                  />
                </svg>
                <p className="text-[#34C6F2] text-2xl font-bold">ylux</p>
              </div>
              <p className=" text-[#34C6F2] text-xl font-bold ">It Solution</p>
            </div>

            <div className="flex gap-4 ">
              <p className=" hover:text-[#34C6F2] hover:cursor-pointer duration-300">
                Our services
              </p>
              <p className=" hover:text-[#34C6F2] hover:cursor-pointer duration-300">
                SEO
              </p>
              <p className=" hover:text-[#34C6F2] hover:cursor-pointer duration-300">
                Social Media
              </p>
              <p className=" hover:text-[#34C6F2] hover:cursor-pointer duration-300">
                Vacciency
              </p>
              <p className=" hover:text-[#34C6F2] hover:cursor-pointer duration-300">
                Contact
              </p>
            </div>
          </div>

          <div>It solution</div>
        </div>
      </div>

      {/* hero section */}
      <div className=" w-11/12 mx-auto gap-4">
        <div className=" flex gap-8 py-20">
          <div className="flex flex-col gap-6 w-8/12 justify-center items-start">
            <h1 className="text-5xl font-bold leading-relaxed">
              Revolutionizing{" "}
              <span className="text-[#34C6F2]"> Your Business</span> with
              zylux's{" "}
              <span className=" text-[#34C6F2]">Innovative IT Solutions</span>
            </h1>

            <p className="font-medium opacity-85 w-10/12 tracking-wider text-md ">
              Based in Nepal, Zylux IT Solution is a trusted software
              development company revolutionizing businesses with innovative IT
              solutions and exceptional outsourcing services.
            </p>

            <button className="bg-[#34C6F2] text-black px-6 py-2 rounded-md text-base hover:cursor-pointer hover:bg-gradient-to-t from-gray-600 to-[#39d1ff]">
              Patner Now
            </button>
          </div>

          <div className="w-4/12 bg-gradient-to-tr from-black via-gray-800 to-black p-6 rounded-2xl text-white border-4 border-gray-800">
            <div className=" opacity-70 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate dolor odio ipsum sint eius reprehenderit, quasi, soluta
              fugit atque amet, similique sequi labore quam tempora mollitia
              accusantium. Architecto, deserunt cupiditate error odio veritatis
              esse hic modi minus nesciunt iure aut sequi! Voluptatem, nesciunt
              id voluptatum corporis inventore praesentium? Quod, eum.
            </div>
          </div>
        </div>

        <p className=" tracking-wider text-md opacity-80 text-center">
          Lorem ipsum dolor sit amet,
        </p>
      </div>

      {/* about section */}
      <div className="w-9/12 mx-auto pt-20 pb-28 flex flex-col gap-32">
        <div className="space-y-4">
          <p className=" text-[#34C6F2] font-semibold">About Us</p>
          <p className=" text-4xl font-semibold">Tech solution innovators</p>
        </div>
        <p className=" w-11/12 mx-auto text-6xl font-medium text-center leading-snug ">
          Based in Nepal, Zylux IT Solution, is a software development service
          provider, specializing in web, mobile, and desktop applications. We
          are a team of young and passionate tech enthusiasts dedicated to
          solving the problems that exist in IT landscape.{" "}
        </p>
      </div>

      {/* video */}
      <video
        src="https://res.cloudinary.com/dwkp3w5ba/video/upload/v1727263652/intro-video_aozzc0.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* services */}
      <div className=" w-10/12 mx-auto flex flex-col gap-28 pt-28">
        <div className=" w-7/12 space-y-4">
          <p className=" text-[#34C6F2] font-semibold">Our Services</p>
          <p className=" text-4xl font-semibold tracking-wide">
            We provide the best services for you
          </p>
          <p className="tracking-wide opacity-80">
            We create websites, apps, and software solutions tailored to your
            need ,boost your business with our IT services.
          </p>
        </div>

        <div className=" grid grid-cols-3 gap-3">
          <div className=" flex flex-col gap-4">
            <p className=" text-center text-[#34C6F2]">Web & Mobile</p>
            <div className=" flex ">
              <div className=" bg-gray-700 flex items-center justify-center rounded-full h-12 w-20 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className=" text-[#34C6F2] h-4 w-4"
                >
                  <path
                    fill="currentColor"
                    d="M22.002 12c0-5.524-4.478-10.002-10.002-10.002S2 6.476 2 12c0 5.186 3.947 9.45 9.001 9.952v-1.843c-.778-.612-1.478-1.905-1.939-3.61h1.94V15H8.737a19 19 0 0 1-.135-5h6.794c.068.64.105 1.31.105 2h1.5q-.001-1.028-.095-2h3.358c.154.64.237 1.31.237 2zM4.786 16.5h2.722l.102.395c.317 1.17.748 2.196 1.27 3.015a8.53 8.53 0 0 1-4.094-3.41m-1.05-6.501h3.358a21 21 0 0 0-.095 2c0 1.043.075 2.051.217 3H4.043a8.5 8.5 0 0 1-.544-3c0-.682.08-1.347.232-1.983zm5.122-5.902l.023-.008c-.722 1.132-1.27 2.658-1.583 4.41H4.25c.905-2 2.56-3.587 4.608-4.402m3.026-.594L12 3.498l.126.006c1.262.126 2.48 2.125 3.045 4.995H8.83c.568-2.878 1.79-4.88 3.055-4.996m3.343.76l-.107-.174l.291.121A8.53 8.53 0 0 1 19.75 8.5h-3.048c-.298-1.665-.806-3.125-1.475-4.237M12 18.999a1 1 0 0 0 1 1h3v2h-.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1H19v-2h3a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1z"
                  ></path>
                </svg>
              </div>
              <div className=" space-y-1">
                <p className=" font-semibold">Website Design & Development</p>
                <p className="opacity-70">
                  Crafting beautiful, functional websites that engage users and
                  drive business growth.
                </p>
              </div>
            </div>
          </div>
          <div>ihbsdfkkhbsdfkhbsjdfhbbsjdh Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vero, consequuntur culpa corporis aut vel, molestias possimus iusto harum maxime cupiditate consectetur nam sint voluptas. Iure, eligendi ipsum. Ducimus eum similique asperiores iusto numquam error accusamus libero consectetur, molestiae voluptate ratione repellat, reiciendis rem aspernatur officia quod sapiente fugiat velit quaerat ad, maxime provident. Quis enim commodi, et labore odit quam iusto fugit excepturi unde sint perspiciatis nobis quaerat animi ipsa doloremque rerum vel quibusdam odio. Inventore sit cum labore velit atque tempora, quasi harum reiciendis totam magnam hic nostrum consectetur, amet laudantium iusto optio ab laborum ullam ipsam minima!</div>
          <div>ihbsdfkkhbsdfkhbsjdfhbbsjdh</div>    
        </div>
      </div>
    </div>
  );
}
