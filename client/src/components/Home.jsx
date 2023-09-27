import React from "react";
import {computer} from "../assets/index"


const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section
        id="home"
        className=" min-h-[700px] background md:px-[6rem] px-[1.5rem] flex md:flex-row flex-col  md:items-center justify-between "
      >
        {/* Intro */}
        <div className=" md:mt-[-9rem]  flex flex-col md:w-[40%] md:px-1 md:py-1 ">
          {/* Heading */}
          <h1 className=" text-2xl pt-[6rem] md:text-5xl   font-bolder">
            Professional Website <br /> Developers
          </h1>

          {/* Paragraph */}
          <p className=" font-extralight text-[small] mt-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>

          {/* Read and contact */}
          <div className=" mt-6 justify-center md:justify-start font-extralight text-[small] flex gap-5 md:gap-[50px]">

            <button className=" bg-[#12d51c] hover:bg-white hover:text-black  py-2 px-6 rounded-full  " >READ MORE</button>
            <button className=" bg-none border-[1px] py-2 px-6 rounded-full  hover:bg-white hover:text-black  " >CONTACT US</button>
          </div>
        </div>

        {/* Computer Image */}
        <div className=" mt-7 md:w-[50%] md:pl-[5rem] " >
          <img className=" flip md:w-[80%] "  src={computer} alt="" />
        </div>
        
      </section>
    </>
  );
};

export default Home;
