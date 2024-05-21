/* eslint-disable react/jsx-key */
import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdRocket } from "react-icons/io";
import { FaRegFileCode } from "react-icons/fa";
import { FaObjectGroup } from "react-icons/fa";
import Link from "next/link";
import { Flipper, Flipped } from "react-flip-toolkit";

const Services = () => {
  const works = [
    {
      icon: <BsPencilSquare className=" text-[43px] " />,
      title: "ASO",
      Description:
        "Enhancing app store visibility to reach millions of users amidst intense competition, securing prime positions and top ratings.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/",
    },
    {
      icon: <IoMdRocket className=" text-[43px] " />,
      title: "Marketing",
      Description:
        "We strive to maximize user acquisition through effective app marketing strategies.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/",
    },
    {
      icon: <IoMdRocket className=" text-[43px] " />,
      title: "Publishing",
      Description:
        "Android mobile application publishing is a vast field .there are many stores to publish app & acquire users.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/",
    },
    {
      icon: <FaRegFileCode className=" text-[43px] " />,
      title: "Apps Development",
      Description:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/",
    },
    {
      icon: <FaObjectGroup className=" text-[43px] " />,
      title: "UI/UX Designing",
      Description:
        "Our research strengthens us to provide a seamless user experience with eye-catching user interface.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/",
    },
    {
      icon: <BsPencilSquare className=" text-[43px] " />,
      title: "App Planning and Monetization",
      Description:
        "You need to find an app monetization strategy that works for you and work better for free apps.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/",
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
                <Flipper flipKey={index} className="w-full h-full">
                  <Flipped flipId="card">
                    <div className={` relative w-full h-full ${index===1 ?" lg:-translate-y-4":""} ${index===4 ?" lg:-translate-y-8":""}`} onMouseEnter={(e) => e.currentTarget.classList.add("flipped")} onMouseLeave={(e) => e.currentTarget.classList.remove("flipped")}>
                      {/* Front of the card */}
                      <div className=" flip-card-front bg-white w-full h-full flex flex-col items-center justify-center gap-y-6 py-10">
                        <span className="bg-red p-5 rounded-full">{work.icon}</span>
                        <h6 className="font-serif text-[22px] text-center font-bold">{work.title}</h6>
                        <p className="text-[16px] px-8 text-center">{work.Description}</p>
                      </div>
                      {/* Back of the card */}
                      <div className=" card flip-card-back absolute top-0 left-0 bg-white w-full h-full flex flex-col  justify-center gap-y-6 py-10 px-7 text-white">
                        <div className=" gap-x-4 flex justify-start">
                          <span className="bg-red text-white p-5 rounded-full">{work.icon}</span>
                          <h6 className="font-serif mt-6 text-[22px] font-bold">{work.title}</h6>
                        </div>
                        <p className="text-[16px]">{work.description2}</p>
                        <Link className=" py-4 w-[10rem] text-center text-[18px] font-bold bg-red text-white" href={work.readMore}>Read More</Link>
                      </div>
                    </div>
                  </Flipped>
                </Flipper>
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
