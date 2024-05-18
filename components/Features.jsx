/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";

const Features = () => {
  return (

    <div className="my-[7rem] flex flex-col items-center">
      <div className=" flex lg:flex-row flex-col w-[90%] lg:w-[77%]">
        <div className=" lg:w-[50%]">
          <div className="  flex">
            <hr className="bg-red mt-3 h-[3px] border-none w-[80px]" />
            <p className="font-semibold tracking-wider text-[20px] text-red ms-3 uppercase">
              Features
            </p>
          </div>
          <div>
            <h1 className="lg:text-[40px] text-[30px]  lg:font-serif font-bold ">
              We are the best agency to improve your deals.
            </h1>
          </div>
        </div>
        <div className=" lg:w-[50%]">
          <p className="lg:text-[20px] text-[16px] mt-10 ps-3">
            Improve efficiency, provide a better customer experience with modern
            technology services available around the world. Our skilled staff,
            combined with decades of experience.
          </p>
        </div>
      </div>
      <div className=" gap-x-5 lg:gap-y-0 gap-y-10 mb-[7rem] translate-y-[5rem] lg:flex-row flex-col flex w-[90%] lg:w-[77%]">
        <div className="group hover:translate-y-5 translate-y-[3rem] w-full lg:w-[50%] transition-all duration-500">
          <div className=" lg:h-[37rem] h-[27rem] hover:h-[30rem] lg:hover:h-[39rem] relative hover:shadow-2xl rounded-2xl transition-all duration-500">
            <img
              src="./assets/h7_service3.jpg"
              className="rounded-2xl absolute top-0"
              alt=""
            />
            <div className="absolute bottom-[180px] lg:bottom-[160px] lg:group-hover:bottom-[210px] group-hover:bottom-[240px] text-black group-hover:text-white bg-white rounded-full p-4 lg:p-8 right-[39%] group-hover:bg-red transition-all duration-500">
              <FaRegClipboard className=" p-1" size={50} />
            </div>
            <div className="absolute bottom-10">
              <p className="text-center mt-[5rem]  text-[21px] lg:text-[24px] font-semibold">
                Our Mission
              </p>
              <p className="text-center px-3 lg:text-[18px]">
                Help the app user to supply them best neighborly portable
                applications for their everyday ease.
              </p>
            </div>
          </div>
        </div>
        <div className="group hover:translate-y-5 translate-y-[3rem]  lg:w-[50%] transition-all duration-500">
          <div className=" lg:h-[37rem] h-[27rem] hover:h-[30rem] lg:hover:h-[39rem] relative hover:shadow-2xl rounded-2xl transition-all duration-500">
            <img
              src="./assets/h7_service5.jpg"
              className="rounded-2xl absolute top-0"
              alt=""
            />
            <div className="absolute bottom-[180px] lg:bottom-[160px] lg:group-hover:bottom-[210px] group-hover:bottom-[240px] text-black group-hover:text-white bg-white rounded-full p-4 lg:p-8 right-[39%] group-hover:bg-red transition-all duration-500">
              <IoIosBicycle className="" size={60} />
            </div>
            <div className="absolute bottom-5">
              <p className="text-center mt-[5rem] text-[21px] lg:text-[24px] font-semibold">
                Our Mission
              </p>
              <p className="text-center px-3 lg:text-[18px]">
                By providing high-value products and services that are driven by
                the market, we are excelling at making technology user-friendly,
                directing and inspiring the team to work toward our goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
