import Link from "next/link";
import React from "react";

const Hero = ({ title }) => {
  return (
    <div className="card lg:px-0 px-4 h-[25rem] relative">
      <div className="text-white text-center z-50 top-[30%] lg:left-[25%] w-[80%] lg:w-[50%]  absolute">
        <h1 className="lg:text-[60px] text-[28px] font-bold font-serif">
          {title}
        </h1>
        <div className="">
          <ul className="flex lg:ms-16 ms-4 justify-center space-x-3">
            <li className="hover:text-red font-bold">
              <Link className=" flex gap-x-1 " href="/">
                Home{" "}
                <span className="text-red tracking-[-4px] font-black">
                  {">>"}
                </span>
              </Link>
              </li>
              <li className="hover:text-red font-bold">
                
              <Link className=" flex gap-x-1 " href="#">
                ANDROID APP DEVELOPMENT{" "}
                <span className="text-red tracking-[-4px] font-black">
                  {">>"}
                </span>
              </Link>
            </li>
            <li className=" flex gap-x-1 ">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
