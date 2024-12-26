import logo from "./logo.svg";
import "./App.css";
import binox_logo from "./binox_logo.png";
import laptop from "./laptop.webp";
import pic1 from "./pic1.webp";
import pic2 from "./pic2.webp";
import pic3 from "./pic3.webp";
import pic4 from "./pic4.png";
import pic5 from "./pic5.webp";

function App() {
  return (
    <body>
      <header className="bg-[#092837] ">
        <nav className=" bg-[#092837]">
          <div className=" flex items-center justify-between text-[#999999] p-4 w-11.5/12 mx-auto ">
            <img src={binox_logo} alt="" />

            <div className=" flex gap-8 font-medium">
              <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
                Home{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#999999"
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7"
                  />
                </svg>
              </p>
              <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
                Pages{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#999999"
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7"
                  />
                </svg>
              </p>
              <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
                Blogs{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#999999"
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7"
                  />
                </svg>
              </p>
              <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
                Features{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#999999"
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7"
                  />
                </svg>
              </p>
              <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
                Help{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="#999999"
                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7"
                  />
                </svg>
              </p>
            </div>

            <button className="bg-[#95f3ff] px-5 py-3 rounded-full text-black flex items-center gap-2 font-medium hover:bg-white duration-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M0 1h4.764l3 11h10.515l3.089-9.265l1.897.633L19.72 14H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm14 1v3h3v2h-3v3h-2V7H9V5h3V2zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
                />
              </svg>{" "}
              Buy now
            </button>
          </div>
        </nav>

        <div className=" mt-12 ">
          <div className=" flex flex-col w-7/12  mx-auto items-center text-white text-center gap-9">
            <p className=" text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-red-500 to-purple-300">
              Premium Business & consulting Elementor WordPress theme
            </p>

            <p className=" w-8/12 text-[#999999]">
              The most customizable WordPress theme with 12+ demos, 1000+
              sections, 100+ pages and enjoy smooth GSAP animations
            </p>

            <button className="bg-none border-2 px-5 py-3 rounded-full text-white flex items-center font-semibold hover:bg-white hover:text-black duration-700">
              Purchase Binox Now
            </button>
          </div>

          <div className=" flex mt-16 ">
            <img className=" h-40" src={pic1} alt="" />
            <img className=" h-40 " src={pic2} alt="" />
            <img className=" h-40" src={laptop} alt="" />
            <img className=" h-40" src={pic3} alt="" />
            <img className=" h-40" src={pic4} alt="" />
            <img className=" h-40" src={pic5} alt="" />
          </div>
        </div>
      </header>

      <main>
        
      </main>
    </body>
  );
}

export default App;
