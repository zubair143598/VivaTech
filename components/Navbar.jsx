/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall,FiMail  } from "react-icons/fi";

import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activePath, setActivePath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setActivePath(router.pathname);
  }, [router.pathname]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleLinkClick = (path) => {
    setActivePath(path);
    setDrawerOpen(false);
    router.push(path);
  };

  const getLinkClass = (path) => {
    return activePath === path
      ? "bg-red px-4 "
      : "text-white px-4 hover:bg-red";
  };

  return (
    <>
      {/* Section 1: Text and Social Links */}
      <div className="bg-[#636363]  text-white py-4 hidden lg:block">
        <div className="container mx-auto w-[80%] flex justify-between items-center">
          <div className="text-sm">
            Top notch mobile apps development company
          </div>
          <div className="flex space-x-3">
            <Link href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Logo, Address, Mail, and Location */}
      <div className=" w-[80%] mx-auto  py-2 hidden lg:block">
        <div className="container mx-auto flex justify-between items-end">
          <Link href="#" className="text-2xl font-bold">
            <img
              src="./assets/asd.png"
              className=" px-2 w-[138px]"
              alt="logo"
            />
          </Link>
          <div className="hidden lg:flex space-x-10">
            {/* phone */}
            <div className="flex  border-r-2 px-12 border-dashed items-center space-x-2">
              <div className=" ">
              <FiPhoneCall  className=" text-red" size={40} />
              </div>
              <div>
                <p className=" text-[13px] text-[#5a5a5a]">For Any query</p>
                <span className=" text-[20px] font-bold">+92 514430962</span>
              </div>
            </div>
            {/* mail */}

            <div className="flex  border-r-2 px-12 border-dashed items-center space-x-2">
              <div className=" ">
              <FiMail   className=" text-red" size={40} />
              </div>
              <div>
                <p className=" text-[13px] text-[#5a5a5a]">hrvivatech@gmail.com</p>
                <span className=" text-[20px] font-bold">Mail us</span>
              </div>
            </div>
            {/* Location */}
            <div className="flex   px-12  items-center space-x-2">
              <div className=" ">
              <CiLocationOn    className=" text-red" size={40} />
              </div>
              <div>
                <p className=" text-[13px] text-[#5a5a5a]">Office No. 9N, Alaseel Plaza, I10 Markaz, Islamabad</p>
                <p className=" text-[20px] font-bold">Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Navigation Links */}
      <nav className="lg:bg-black  lg:translate-y-8 z-20 relative lg:rounded-lg lg:w-[80%] mx-auto text-white">
        <div className="container mx-auto flex justify-between px-3 lg:px-10 items-center ">
          <Link href="/" className="text-2xl font-bold lg:hidden">
            <img
              src="./assets/asd.png"
              className=" px-2 w-[138px]"
              alt="logo"
            />
          </Link>
          <button className="lg:hidden" onClick={toggleDrawer}>
            <FaBars className=" text-white bg-red rounded px-2" size={40} />
          </button>
          <div className="hidden text-white leading-[64px] text-[18px] font-medium lg:flex space-x-10">
            <Link
              href="/"
              className={getLinkClass("/")}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              href="/About"
              className={getLinkClass("/About")}
              onClick={() => handleLinkClick("/About")}
            >
              About Us
            </Link>
            {/* <Link
              href="/services"
              className={getLinkClass("/services")}
              onClick={() => handleLinkClick("/services")}
            >
              Services
            </Link> */}
            <Link
              href="/LifeAtViva"
              className={getLinkClass("/LifeAtViva")}
              onClick={() => handleLinkClick("/LifeAtViva")}
            >
              Life At Viva
            </Link>
            <Link
              href="/Career"
              className={getLinkClass("/Career")}
              onClick={() => handleLinkClick("/Career")}
            >
              Career
            </Link>
            <Link
              href="/contact"
              className={getLinkClass("/contact")}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact Us
            </Link>
          </div>

          <div className="leading-[46px] hover:text-red lg:block hidden text-[18px] font-medium">
            Islamabad
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <Link href="/" className="text-2xl font-bold">
          <img
              src="./assets/logo.png"
              className=" px-2 w-[138px]"
              alt="logo"
            />
          </Link>
          <button onClick={toggleDrawer}>
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            href="/"
            className={getLinkClass("/")}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            href="/About"
            className={getLinkClass("/About")}
            onClick={() => handleLinkClick("/About")}
          >
            About Us
          </Link>
          {/* <Link
            href="/services"
            className={getLinkClass("/services")}
            onClick={() => handleLinkClick("/services")}
          >
            Services
          </Link> */}
          <Link
            href="/LifeAtViva"
            className={getLinkClass("/LifeAtViva")}
            onClick={() => handleLinkClick("/LifeAtViva")}
          >
            Life At Viva
          </Link>
          <Link
            href="/career"
            className={getLinkClass("/career")}
            onClick={() => handleLinkClick("/career")}
          >
            Career
          </Link>
          <Link
            href="/contact"
            className={getLinkClass("/contact")}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;