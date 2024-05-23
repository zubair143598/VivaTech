import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" card lg:px-0 px-4 h-[27rem]  relative">
      <div className="text-white z-50  top-[40%]  lg:left-[40%] lg:w-[35%]  absolute">
        <h1 className=" lg:text-[60px] text-[40px] font-bold font-serif">Career</h1>
        <div className=" ">
        <ul className=" flex lg:ms-16 space-x-3">
            <li className=" hover:text-red font-bold" >
                <Link href="/">
                Home <span className=" text-red tracking-[-4px] font-black ">{">>"}</span>
                </Link>
                </li>
            
            <li>Career</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
