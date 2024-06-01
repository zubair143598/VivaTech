/* eslint-disable react/jsx-key */
import React, { useRef } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdRocket } from "react-icons/io";
import { FaRegFileCode } from "react-icons/fa";
import { FaObjectGroup } from "react-icons/fa";
import Link from "next/link";
import { Flipper, Flipped } from "react-flip-toolkit";
import { motion, useInView } from "framer-motion";

const FeaturesServices = () => {
  const works = [
    {
      icon: <BsPencilSquare className=" text-[43px] " />,
      title: "ASO",
      Description:
        "Make your app shine in a crowded marketplace. We ensure your app gets noticed by the right users and secures top positions and ratings.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/services/Aso",
    },
    {
      icon: <IoMdRocket className=" text-[43px] " />,
      title: "Marketing",
      Description:
        "We strive to maximize user acquisition through effective app marketing strategies.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/services/Marketing",
    },
    {
      icon: <IoMdRocket className=" text-[43px] " />,
      title: "Publishing",
      Description:
        "Publishing Android apps involves many stores for reaching and acquiring users.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/services/Publishing",
    },
    {
      icon: <FaRegFileCode className=" text-[43px] " />,
      title: "Apps Development",
      Description:
        "Building great apps for smart users, ensuring they stay hooked.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/services/AppDevelopment ",
    },
    {
      icon: <FaObjectGroup className=" text-[43px] " />,
      title: "UI/UX Designing",
      Description:
        ": Extensive research enables us to provide a seamless user experience with a stunning interface.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/services/UIDesigning",
    },
    {
      icon: <BsPencilSquare className=" text-[43px] " />,
      title: "App Planning and Monetization",
      Description:
        "Discover the perfect app monetization strategy tailored to your needs, especially for free apps.",
      description2:
        "App store optimization to reach targeted users in millions of app competitors, and to secure the best position and ratings.",
      readMore: "/services/AppPlanning ",
    },
  ];

  const title = ["We", "provide", "comprehensive", "solutions"];
  const baseDuration = 0.5;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className=" bg-[#EEEDEB] py-[7rem]">
        <div className=" text-red flex justify-center">
          <hr className="bg-red mt-3 h-[3px] border-none w-[60px]" />
          <p className="font-semibold tracking-wider uppercase lg:text-[18px] mx-3">
            FEATURED SERVICES
          </p>
          <hr className="bg-red mt-3 h-[3px] border-none w-[60px]" />
        </div>
        <div className=" flex items-center gap-y-4 mb-10 text-center flex-col">
          <div className=" flex space-x-4">
            {title.map((val, index) => {
              const currentDuration = baseDuration + index * 0.2;
              const currentDelay = index * 0.3;
              return (
                <motion.h2
                  ref={ref}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }
                      : {}
                  }
                  transition={{
                    duration: currentDuration,
                    delay: currentDelay,
                  }}
                  key={index}
                  className=" text-[32px] lg:text-[40px] lg:font-serif font-extrabold"
                >
                  {val}
                </motion.h2>
              );
            })}
          </div>

          <p className="font-serif lg:text-[20px] text-[18px] lg:w-[45%] ms-5">
            Our services ensure that users have the appropriate view and access
            permissions to manage requests, problems, changes, contracts,
            assets, and solutions efficiently.
          </p>
        </div>
        <div className=" flex justify-center">
          <motion.div
            ref={ref}
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={
              isInView ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 } : {}
            }
            transition={{
              duration: 1.5,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[77%]  place-items-center  gap-y-6 gap-x-9 lg:gap-y-16"
          >
            {works.map((work, index) => {
              return (
                <Flipper key={index} flipKey={index} className="w-full h-full">
                  <Flipped flipId="card">
                    <div
                      className={` relative w-full h-full ${
                        index === 1 ? " lg:-translate-y-4" : ""
                      } ${index === 4 ? " lg:-translate-y-8" : ""}`}
                      onMouseEnter={(e) =>
                        e.currentTarget.classList.add("flipped")
                      }
                      onMouseLeave={(e) =>
                        e.currentTarget.classList.remove("flipped")
                      }
                    >
                      {/* Front of the card */}
                      <div className=" flip-card-front bg-white w-full h-full flex flex-col items-center justify-center gap-y-6 py-10">
                        <span className="bg-red text-white p-5 rounded-full">
                          {work.icon}
                        </span>
                        <h6 className="font-serif text-[22px] text-center font-bold">
                          {work.title}
                        </h6>
                        <p className="text-[16px] px-8 text-center">
                          {work.Description}
                        </p>
                      </div>
                      {/* Back of the card */}
                      <div className=" card flip-card-back absolute top-0 left-0 bg-white w-full h-full flex flex-col  justify-center gap-y-6 py-10 px-7 text-white">
                        <div className=" gap-x-4 flex justify-start">
                          <span className="bg-red text-white p-5 rounded-full">
                            {work.icon}
                          </span>
                          <h6 className="font-serif mt-6 text-[22px] font-bold">
                            {work.title}
                          </h6>
                        </div>
                        <p className="text-[16px]">{work.description2}</p>
                        <Link
                          className=" py-4 w-[10rem] text-center text-[18px] font-bold bg-red text-white"
                          href={work.readMore}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </Flipped>
                </Flipper>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className=" bg-[#F5F3F0] py-[100px]"></div>
    </>
  );
};

export default FeaturesServices;
