"use client"

import React, { useState } from "react";
import logo from "@/assets/img/logo.svg";
import menuIcon from "@/assets/img/menu.svg";
import closeIcon from "@/assets/img/close4.svg";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNavbar = () => {
    setOpenMenu(!openMenu);
    document.body.style.overflow = openMenu ? "auto" : "hidden"; // Disable scroll when menu is open
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b bg-[#070D1C]/70 p-4">
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo & Title */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-10 w-10 mr-2" src={logo} alt="Hackathon Logo" />
          <h3 className="text-xl text-white">Hackathon</h3>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 ">
          <ul className="flex gap-6 text-white ">
            <li><a href="#about" className="hover:underline" >About</a></li>
            <li><a href="#event" className="hover:underline" >Event</a></li>
            <li><a href="#prizes" className="hover:underline" >Prizes</a></li>
            <li><a href="#partners" className="hover:underline" >Partners</a></li>
            <li><a href="#contact" className="hover:underline" >Contact Us</a></li>
          </ul>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            <img src={openMenu ? closeIcon : menuIcon} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Sidebar for Mobile */}
      {openMenu && (
        <div className="fixed top-0 right-0 w-53 h-screen backdrop-blur bg-[#070D1C]/98 text-white p-6 flex flex-col gap-6 z-50">
          <button className="left-0" onClick={toggleNavbar}>
            <img src={closeIcon} alt="Close" className="w-6 h-6" />
          </button>
          <ul className="flex flex-col gap-9">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#event" className="hover:underline">Event</a></li>
            <li><a href="#prizes" className="hover:underline">Prizes</a></li>
            <li><a href="#partners" className="hover:underline">Partners</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
