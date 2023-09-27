import React from "react";
import { navLinks } from "../constant";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className=" fixed text-white flex flex-row items-center justify-between w-full h-[70px] blury ">
        {/* Logo */}
        <div className=" flex flex-col w-[250px] items-center  ">
          {/* Logo Name */}
          <h1 className=" font-bold text-white mr-[95px] text-3xl  ">
            <span className=" text-[#12d51c]">W</span>DH
          </h1>

          <p className="text-[xl] font-semibold">WEB DEVELOPER HUB</p>
        </div>

        <ul className=" flex gap-[100px] mr-[100px]" >
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
