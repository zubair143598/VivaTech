/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            <div className="lg:text-[40px] text-[28px]  lg:font-serif font-bold ">
              <div className=" flex gap-3">
                <motion.h1
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
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  {" "}
                  We
                </motion.h1>
                <motion.h1
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
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {" "}
                  are
                </motion.h1>
                <motion.h1
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
                  transition={{ duration: 0.9, delay: 0.5 }}
                >
                  the
                </motion.h1>
                <motion.h1
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
                  transition={{ duration: 1.1, delay: 0.7 }}
                >
                  {" "}
                  best
                </motion.h1>
                <motion.h1
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
                  transition={{ duration: 1.3, delay: 0.9 }}
                >
                  gency
                </motion.h1>

                <motion.h1
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
                  transition={{ duration: 1.5, delay: 1.1 }}
                >
                  to
                </motion.h1>
              </div>
              <div className=" flex gap-3">
                <motion.h1
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
                  transition={{ duration: 1.7, delay: 1.3 }}
                >
                  improve
                </motion.h1>
                <motion.h1
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
                  transition={{ duration: 1.8, delay: 1.5 }}
                >
                  your
                </motion.h1>
                <motion.h1
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
                  transition={{ duration: 1.9, delay: 1.7 }}
                >
                  deals.
                </motion.h1>
              </div>
            </div>
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
      <div className="gap-x-5 lg:gap-y-0 gap-y-10 mb-[7rem] translate-y-[5rem] lg:flex-row flex-col flex w-[90%] lg:w-[77%]">
      <div className="group hover:translate-y-5 translate-y-[3rem] w-full lg:w-[50%] transition-all duration-500">
        <div className=" relative lg:h-[37rem] h-[27rem] hover:h-[30rem] lg:hover:h-[39rem] hover:shadow-2xl rounded-2xl transition-all duration-500">
          <div className="relative">

          <img
            src="./assets/h7_service3.jpg"
            className="rounded-2xl "
            alt=""
            />
          <div className="absolute bottom-[-40px] lg:bottom-[-60px] text-black group-hover:text-white bg-white rounded-full p-4 lg:p-8 right-[39%] group-hover:bg-red transition-all duration-500">
            <FaRegClipboard className="p-1" size={50} />
          </div>
            </div>
          <div className="absolute bottom-10 w-full">
            <p className="text-center mt-[5rem] text-[21px] lg:text-[24px] font-semibold">
              Our Mission
            </p>
            <p className="text-center px-3 lg:text-[18px]">
            Our mission is to provide users with top-quality, user-friendly mobile applications that enhance their daily lives and simplify everyday tasks.
            </p>
          </div>
        </div>
      </div>
      <div className="group hover:translate-y-5 translate-y-[3rem] lg:w-[50%] transition-all duration-500">
        <div className="relative lg:h-[37rem] h-[27rem] hover:h-[30rem] lg:hover:h-[39rem] hover:shadow-2xl rounded-2xl transition-all duration-500">
          <div className="relative">

          <img
            src="./assets/h7_service5.jpg"
            className="rounded-2xl"
            alt=""
            />
          <div className="absolute bottom-[-40px] lg:bottom-[-60px] text-black group-hover:text-white bg-white rounded-full p-4 lg:p-8 right-[39%] group-hover:bg-red transition-all duration-500">
            <IoIosBicycle className="" size={60} />
          </div>
            </div>
          <div className="absolute bottom-5 w-full">
            <p className="text-center mt-[5rem] text-[21px] lg:text-[24px] font-semibold">
              Our Vision
            </p>
            <p className="text-center px-3 lg:text-[18px]">
            We are committed to excelling in making technology user-friendly through the provision of high-value, market-driven products and services. Our dedicated team is inspired and guided to work towards this goal, ensuring that we consistently meet and exceed our customers' expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
