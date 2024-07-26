"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = (): React.JSX.Element => {
  const [open, setOpen] = useState<Boolean | undefined>(false);

  return (
    <header className="w-full py-4 px-4 sm:px-6 md:px-8 lg:px-32 bg-gray-600 text-white flex justify-between items-center relative z-10">
      <div>
        <h1>Logo</h1>
      </div>
      <nav className="hidden md:flex gap-4 font-semibold">
        <Link href={"/"} className={""}>
          Home
        </Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Contact</Link>
      </nav>
      <button className="bg-orange-500 border-[3px] border-orange-500 px-4 py-2 hover:bg-transparent duration-300 text-gray-600 hover:text-orange-500 font-semibold rounded hidden md:inline-block">
        Hire a Developer
      </button>
      <span className="inline-block md:hidden relative z-20">
        <Hamburger onToggle={setOpen}/>
      </span>

      {
        open && <Sidebar isOpen={open}/>
      }
    </header>
  );
};

export default Navbar;
