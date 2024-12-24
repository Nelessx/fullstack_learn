import React from 'react'
import logo from "./favicon.ico";
import dashboard from "./Dashboard.png";

export default function App() {
  return (
    <div>
    <nav className=' bg-[#051216]'>
    <header className="flex items-center justify-between w-10/12 mx-auto   text-white p-2">
        <img src={logo} alt="" />


        <div className='flex justify-between gap-10 font-semibold '>
            <p className=' hover:text-orange-500 duration-300 cursor-pointer'>Home</p>
            <p className=' hover:text-orange-500 duration-300 cursor-pointer'>About</p>
            <p className=' hover:text-orange-500 duration-300 cursor-pointer'>Services</p>
            <p className=' hover:text-orange-500 duration-300 cursor-pointer'>Price</p>
            <p className=' hover:text-orange-500 duration-300 cursor-pointer'>Contact</p>
        </div>

        <button className=' bg-orange-600 pl-8 pr-8 pt-3 pb-3 font-semibold rounded-sm '>Login</button>
      </header>
    </nav>

    <div className=' w-7/12 mx-auto mt-24 flex flex-col items-center gap-8'>
        <div className=' text-6xl text-center font-semibold leading-relaxed'>
            Make Your Business Flourish with <span className=' text-orange-500'>Digital Marketing</span>
        </div>

        <p className=' text-center'>Save time on creating a website from scratch. Use a rich collection of ready-made websites to get your project off to a
        fast start opposed to using 'Content here, content here', making it look like readable English.</p>

        <div className=' space-x-8 '>
            <button className=' bg-slate-950 text-white px-8 py-4 '>Try 30-Day Trial</button>
            <button className=' border border-slate-950 px-8 py-4'> Schedule a Call</button>
        </div>
        
        <img className=' border p-4 rounded-2xl bg-gray-200'
        src={dashboard} alt="" />
    </div>

    </div>


  );
}
