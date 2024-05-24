/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_bg text-white">
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-[54px] mx-auto px-4 lg:w-[77%]">
      <div>
        <ul className=" ">
          <li>
            <img className=" w-[150px]" src="./assets/logo.png" alt="logo" />
          </li>
          <li className="text-[#9D9D9D] py-8  text-[20px]"> Quality over quantity is our priority.</li>
          <li>
            <button className=" hover:transition-colors transition-colors hover:duration-1000 px-4 py-2 text-[18px] uppercase font-semibold hover:bg-white hover:text-black bg-red">About us</button>
          </li>
        </ul>
      </div>
      <div className=" md:hidden lg:block "></div>
      <div className=" lg:mt-0  mt-10">
        <ul className="text-[#9D9D9D]">
          <li>
            <h5 className=" text-[26px] text-white font-bold">Official info:</h5>
            <p className=" bg-red py-[1px] -translate-y-3 inline-block px-5"></p>
          </li>

          <li>
            <p className=" text-[#9D9D9D]  flex text-[16px]">
            
              <FaLocationDot className=" mt-1 me-4 text-red" />
              Office No. 9N, Alaseel Plaza, I10 Markaz, Islamabad
            </p>
          </li>
          <li className=" my-3">
            <p className=" flex text-[16px]">
              {" "}
              <FaPhone className="mt-1 me-4 text-red" />
              0514430962
            </p>
          </li>
          <li>
            <p className=" text-white">Head Office</p>
            <p className=" text-[#9D9D9D]  flex text-[16px]">
            
              <FaLocationDot className=" mt-1 me-4 text-red" size={20} />
              P.O. Box: 94484, Mussaffah, Industrial Area-M-32/1 - Abu Dhabi, U.A.E
            </p>
          </li>
          <li className=" my-3">
            <p className=" flex text-[16px]">
              {" "}
              <FaPhone className="mt-1 me-4 text-red" />
              +971 2 551 4991 <br /> Fax : +971 2 551 4997
            </p>
          </li>
          <li className=" my-3">
            <p className=" flex text-[16px]">
              
            Email: info@vivagroupuae.com
            </p>
          </li>
          <li className="text-white font-semibold  "> <span className="border-b-2">Open Hours:</span></li>
          <li className=" my-3">Mon – Sat: 09:00 am – 06 pm,</li>
          <li>Saturday, Sunday: CLOSED</li>
        </ul>
      </div>
      <div className=" lg:mt-0 mt-10">
        <ul>
          <li>
            <h5 className="text-[26px] text-white font-bold">Social Media</h5>
            <p className=" bg-red py-[1px] -translate-y-3 inline-block px-5"/>
          </li>
          <li className="flex mt-5 gap-x-3 ">
            <div className=" p-2 rounded-[40%] bg-red">
              <FaFacebookF  size={25} className=" text-" />
            </div>
            <div className=" p-2 rounded-[40%] bg-red">
              <AiFillInstagram size={25} />
            </div>
            <div className=" p-2 rounded-[40%] bg-red">
              <FaYoutube  size={25} />
            </div>
            <div className=" p-2 rounded-[40%] bg-red">
              <FaLinkedinIn size={25} className="    " />
            </div>
          </li>
        </ul>
      </div>
        
      
    </div>
   
       <div className=" py-5 ">
    <div className=" bg-[#54595F] py-[0.1px] mx-[10%] text-center" />
    <div className=" my-4">
        <p className="text-center">© 2024 Viva Tech Solution. All rights reserved.</p>
    </div>
        </div> 
    
    </div>
  );
};

export default Footer;
