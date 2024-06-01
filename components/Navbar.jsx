/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBars } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
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
    return activePath === path ? "bg-red px-8" : "text-white px-8 hover:bg-red";
  };

  return (
    <>
      {/* Section 1: Text and Social Links */}
      <div className="bg-[#636363]  text-white py-3 hidden lg:block">
        <div className="container mx-auto w-[77%] flex justify-between items-center">
          <div className="text-[12px]">
            Top notch mobile apps development company
          </div>
          <div className="flex space-x-3">
            <Link href="#" className="hover:text-gray-400">
              <FaFacebookF size={12} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaTwitter size={12} />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaLinkedinIn size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Logo, Address, Mail, and Location */}
      <div className=" w-[80%] mx-auto  pt-2 hidden lg:block">
        <div className="container mx-auto flex justify-between items-end">
          <Link href="/" className="text-2xl font-bold">
            <img
              src="./assets/asd.png"
              className=" px-2 w-[138px]"
              alt="logo"
            />
          </Link>
          <div className="hidden lg:flex ">
            {/* phone */}
            <div className="flex  border-r-2 px-6  border-dashed items-center space-x-2">
              <motion.div
                whileHover={{
                  y: [0, -5, 5, -5, 5, 0],
                  transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  },
                }}
                className=" "
              >
                <FiPhoneCall className="  text-red" size={35} />
              </motion.div>
              <div>
                <p className=" text-[13px] text-[#5a5a5a]">For Any query</p>
                <span className=" xl:text-[19px] text-[14px] font-semibold">
                  +92514430962
                </span>
              </div>
            </div>
            {/* mail */}

            <div className="flex px-6  border-r-2  border-dashed items-center space-x-2">
              <motion.div
                whileHover={{
                  y: [0, -5, 5, -5, 5, 0],
                  transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  },
                }}
                className=" "
              >
                <FiMail className=" text-red" size={35} />
              </motion.div>
              <div>
                <p className=" text-[13px] text-[#5a5a5a]">
                  hrvivatech@gmail.com
                </p>
                <span className=" xl:text-[19px] text-[14px] font-serif font-bold">
                  Mail us
                </span>
              </div>
            </div>
            {/* Location */}
            <div className="flex px-6 items-center space-x-2">
              <motion.div
                whileHover={{
                  y: [0, -5, 5, -5, 5, 0],
                  transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  },
                }}
                className=" "
              >
                <CiLocationOn className=" text-red" size={40} />
              </motion.div>
              <div>
                <p className=" text-[13px] text-[#5a5a5a]">
                  Office No. 9N, Alaseel Plaza, I10 Markaz, Islamabad
                </p>
                <p className=" xl:text-[19px] text-[14px] font-bold font-serif">
                  Pakistan
                </p>
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
          <div className="hidden text-white leading-[64px] text-[16px] font-medium lg:flex ">
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
            <Link
              href="/Services"
              className={getLinkClass("/Services")}
              onClick={() => handleLinkClick("/Services")}
            >
              Services
            </Link>
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
              href="/Contact"
              className={getLinkClass("/Contact")}
              onClick={() => handleLinkClick("/Contact")}
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
          <Link
            href="/Services"
            className={getLinkClass("/Services")}
            onClick={() => handleLinkClick("/Services")}
          >
            Services
          </Link>
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
            className={getLinkClass("/Contact")}
            onClick={() => handleLinkClick("/Contact")}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
