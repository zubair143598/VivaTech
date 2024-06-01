/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
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
            <div className="xl:text-[40px] lg:text-[30px] text-[24px]  lg:font-serif font-bold ">
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
      
    </div>
  );
};

export default Features;
