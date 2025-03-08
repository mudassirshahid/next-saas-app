"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";

function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    
    <div className="fixed sm:top-10 top-0 inset-x-0 max-w-2xl mx-auto z-50">
      <div className="flex justify-between items-center border-[0.8px] border-[#ffffff1f] sm:rounded-full px-8 py-4 bg-[linear-gradient(180deg,rgba(23,29,45,0.5)_0%,rgba(4,11,29,0.5)_100%)]  ">
        <div>
          <Image src={logo} width={50} height={50} alt="logo" />
        </div>

        <div className="sm:inline-flex hidden gap-8 text-sm font-medium">
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Template"
            ></MenuItem>
          </Link>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Pricing"
            ></MenuItem>
          </Link>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            ></MenuItem>
          </Link>
        </div>
        <button className="sm:block hidden border-[#0099FF] rounded-2xl text-white text-[14px] font-semibold px-4 py-2 shadow-[inset_0px_0px_8px_0px_#0099FF] bg-[#03263D]">Try it now</button>
        {/* Mobile Menu  */}
        <button
          type="button"
          className="sm:hidden inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
          onClick={toggleMenu}
        >
          {/* Menu open: "hidden", Menu closed: "block" */}
          <svg
            className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          {/* Menu open: "block", Menu closed: "hidden" */}
          <svg
            className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
       

      </div>
      {/* Mobile Navigation Links */}
   <div
          className={`sm:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden`}
        >
          <div className="flex flex-col items-center bg-black text-white space-y-4 pt-8 pb-8 rounded-lg">
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Template"
            ></MenuItem>
          </Link>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Pricing"
            ></MenuItem>
          </Link>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            ></MenuItem>
          </Link>
            <button className="border-[#0099FF] rounded-2xl text-white text-[14px] font-semibold px-4 py-2 shadow-[inset_0px_0px_8px_0px_#0099FF] bg-[#03263D]">Try it now</button>
          </div>
        </div>
    </div>
   
  );
}

export default Navbar;
