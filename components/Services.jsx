import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdRocket } from "react-icons/io";
import { FaRegFileCode } from "react-icons/fa";
import { FaObjectGroup } from "react-icons/fa";

const Services = () => {
  const works = [
    {
      icon: <BsPencilSquare className=" text-[43px] text-white" />,
      title: "ASO",
      Description:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
    },
    {
      icon: <IoMdRocket className=" text-[43px] text-white" />,
      title: "Marketing",
      Description:
        "With app marketing, we aim to attract the largest possible number of users for an app",
    },
    {
      icon: <IoMdRocket className=" text-[43px] text-white" />,
      title: "Publishing",
      Description:
        "Android mobile application publishing is a vast field .there are many stores to publish app & acquire users.",
    },
    {
      icon:<FaRegFileCode className=" text-[43px] text-white" />,
      title: "Apps Development",
      Description:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
    },
    {
      icon: <FaObjectGroup className=" text-[43px] text-white" />,
      title: "UI/UX Designing",
      Description:
        "Our research strengthens us to provide a seamless user experience with eye-catching user interface.",
    },
    {
      icon: <BsPencilSquare className=" text-[43px] text-white" />,
      title: "App Planning and Monetization",
      Description:
        "You need to find an app monetization strategy that works for you and work better for free apps.",
    },
  ];

  return (
    <>
      <div className=" bg-[#EEEDEB] py-[7rem]">
        <div className=" text-red flex justify-center">
          <hr className="bg-red mt-3 h-[3px] border-none w-[60px]" />
          <p className="font-bold tracking-wider uppercase lg:text-[20px] mx-3">
            FEATURED SERVICES
          </p>
          <hr className="bg-red mt-3 h-[3px] border-none w-[60px]" />
        </div>
        <div className=" flex items-center gap-y-4 mb-10 text-center flex-col">
          <h2 className=" text-[32px] lg:text-[40px] lg:font-serif font-extrabold">
            We help to get Solutions!
          </h2>
          <p className="font-serif lg:text-[20px] text-[18px] lg:w-[35%] ms-5">
            Provide users with appropriate view and access permissions to
            requests, problems, changes, contracts, assets, solutions
          </p>
        </div>
        <div className=" flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-[90%] lg:w-[77%]  place-items-center  gap-y-6 gap-x-9 lg:gap-y-16">
            {works.map((work, index) => {
              return (
                <div
                  key={index}
                  className={` ${index===1 ?" h-auto lg:-translate-y-4":""} ${index===4 ?" lg:-translate-y-8":""} py-10  bg-white h-full gap-y-6  flex flex-col items-center `}
                >
                  <span className="bg-red p-5 rounded-full">
                    {work.icon}
                    {/* <BsPencilSquare className=" text-[43px] text-white" /> */}
                  </span>
                  <h6 className="font-serif text-[22px] text-center font-bold">
                    {work.title}
                  </h6>
                  <p className="text-[16px] px-8 text-center">
                    {work.Description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
      <div className=" bg-[#F5F3F0] py-[100px]"></div>
    </>
  );
};

export default Services;