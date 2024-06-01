/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const partner = ["Your", "Partner", "in", "Success"];
  const baseDuration = 0.5;

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
            <div className=" flex space-x-4">
              {partner.map((val, index) => {
                const currentDuration = baseDuration + index * 0.2;
                const currentDelay = index * 0.3;
                return (
                  <motion.h3
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
                    className="flex flex-row xl:text-[40px] lg:text-[30px] text-[24px]  lg:font-serif font-bold "
                  >
                    {val}
                  </motion.h3>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" lg:w-[50%]">
          <p className="lg:text-[20px] text-[16px] mt-10 ps-3">
            Boost efficiency and improve customer experience with our global,
            modern technology services. Our experienced team is here to help.
          </p>
        </div>
      </div>
      <div className="gap-x-5 lg:gap-y-0 gap-y-10  translate-y-[5rem] lg:flex-row flex-col flex w-[90%] lg:w-[90%] xl:w-[77%]">
        <div className="group hover:translate-y-5 lg:mb-[7rem] lg:hover:mb-[5rem] translate-y-[3rem] w-full lg:w-[50%] transition-all duration-500">
          <div className="relative lg:h-[38rem] lg:hover:h-[40rem] md:h-[47rem] md:hover:h-[49rem]  sm:h-[35rem] hover:sm:h-[37rem] h-[31rem]  hover:h-[33rem]   hover:shadow-2xl rounded-2xl transition-all duration-500">
            <div className="relative">
              <img
                src="./assets/Our_Mission.jpg"
                className="rounded-2xl w-full 2xl:h-[25rem] "
                alt="Our Mission"
              />
              <div className="absolute bottom-[-40px] lg:bottom-[-60px] text-black group-hover:text-white bg-white rounded-full p-4 lg:p-8 5xl:right-[48%] 4xl:right-[45%] md:right-[44%] lg:right-[39%] right-[39%] group-hover:bg-red transition-all duration-500">
                <FaRegClipboard className="p-1" size={50} />
              </div>
            </div>
            <div className="absolute bottom-10 w-full">
              <p className="text-center mt-[5rem] text-[21px] lg:text-[24px] font-semibold">
                Our Mission
              </p>
              <p className="text-center px-3 lg:text-[18px]">
                We strive to develop mobile applications that seamlessly
                integrate into users' lives, enhancing productivity and
                enriching experiences through intuitive design and
                functionality.
              </p>
            </div>
          </div>
        </div>
        <div className="group hover:translate-y-5 mb-[7rem] hover:mb-[5rem] translate-y-[3rem] w-full lg:w-[50%] transition-all duration-500">
          <div className="relative lg:h-[37rem] lg:hover:h-[39rem] md:h-[47rem] md:hover:h-[49rem]  sm:h-[35rem] hover:sm:h-[37rem] h-[31rem]  hover:h-[33rem]   hover:shadow-2xl rounded-2xl transition-all duration-500">
            <div className="relative">
              <img
                src="./assets/Our_Vision.jpg"
                className="rounded-2xl w-full 2xl:h-[25rem]"
                alt=""
              />
              <div className="absolute bottom-[-40px] lg:bottom-[-60px] text-black group-hover:text-white bg-white rounded-full p-4 lg:p-8 5xl:right-[48%] 4xl:right-[45%] md:right-[44%] lg:right-[39%] right-[39%] group-hover:bg-red transition-all duration-500">
                <IoIosBicycle className="" size={60} />
              </div>
            </div>
            <div className="absolute bottom-5 w-full">
              <p className="text-center mt-[5rem] text-[21px] lg:text-[24px] font-semibold">
                Our Vision
              </p>
              <p className="text-center px-3 lg:text-[18px]">
                We aim to make technology easy and accessible by providing
                valuable products and services that meet market demands. Guiding
                and motivating our team, we work together towards this goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
