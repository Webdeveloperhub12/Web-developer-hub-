import React from "react";
import { navLinks } from "../constant";
import { useState } from "react";

const Navbar = () => {
  const [toggle, SetToggle] = useState(false);

  // overlay

  const overlay = ()=>{
    SetToggle(false)
  }
  return (
    <>
      {/* Navbar */}
      <nav className=" z-[1000] fixed text-white flex flex-row items-center justify-between w-full h-[55px] blury ">
        {/* Logo */}
        <div className=" flex flex-col w-[250px] ml-5 md:ml-[50px] ">
          {/* Logo Name */}
          <h1 className="  font-bolder text-white md:mr-[95px] mr-[80px] md:text-3xl text-2xl  ">
            <span className=" text-[#12d51c]">W</span>DH
          </h1>

          <p className="md:text-xl mt-[-6px] text-[small] font-semibold">
            WEB DEVELOPER HUB
          </p>
        </div>

        {/* Desktop Nav Links */}
        <ul className=" md:flex gap-[100px] hidden  mr-[140px] text-[medium] font-light ">
          {navLinks.map((nav) => (
            <li className="list-none" key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <i
          onClick={() => SetToggle((prev) => !prev)}
          class={`fa-solid ${
            toggle ? "fa-xmark" : "fa-bars"
          } md:hidden mr-6 text-2xl  `}
        ></i>
      </nav>

      {/* Mobile Nav links */}
      <div
        className={`${
          toggle ? "flex" : " hidden"
        } fixed blury2  right-3 text-white mt-[70px] px-11 py-6 rounded-xl sidebar box-shadow z-[900] md:hidden `}
      >
        <ul className=" flex flex-col gap-5 text-xl ">
          {navLinks.map((nav) => (
            <li key={nav.id} className=" hover:text-[#12d51c]  list-none">
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* overlay */}
      <div
        onPointerEnter={overlay}
        className={`${
          toggle ? "block" : "hidden"
        } w-full h-screen fixed z-[800] bg-[#00000]`}
      ></div>
    </>
  );
};

export default Navbar;
