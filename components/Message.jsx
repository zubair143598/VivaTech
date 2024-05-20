/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Message = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className=" flex  justify-center my-10">
      <div className="py-[50px] lg:gap-y-0 gap-y-10 px-[15px] lg:ps-[60px] flex lg:flex-row flex-col  bg-[#F5F3F0] lg:w-[77%] w-[90%] ">
        <div className=" lg:w-[60%]">
          <div className="flex pt-6 ">
            <hr className="bg-red lg:mt-6 mt-4 h-[3px] border-none w-[60px]" />
            <h3 className="ms-3 text-red text-[20px] lg:text-[30px] tracking-wider font-bold uppercase">
              Message From CEO
            </h3>
          </div>
          <div className=" mt-3">
            <div className=" flex gap-2">
              <motion.h5
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
                className="uppercase text-[26px] font-bold"
              >
                Hikmat
              </motion.h5>

              <motion.h5
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
                transition={{ duration: 0.5, delay: 0.5 }}
                className="uppercase text-[26px] font-bold"
              >
                {" "}
                Ullah
              </motion.h5>
            </div>
            <p className="mt-6 text-[18px] lg:text-[20px]">
              I believe that the work done from a sincere heart with
              determination would be blessed by God and a distinguished career.
              Efficient workers pride themselves on making effective use of
              their time.
            </p>
            <p className="mt-3 text-[18px] lg:text-[20px]">
              Family-oriented company culture also gives employees the freedom
              to share their ideas and opinions and encourages active
              discussions on various topics that might concern most people in
              the workplace. Positive attitudes can make the work environment
              happy and a joy to be in. I would happily take an office full of
              positive attitudes over negative ones, without a doubt.
            </p>
            <p className="mt-3 text-[18px] lg:text-[20px]">
              The success of the Company depends on your commitment and
              teamwork, which would undoubtedly ensure that we provide the
              highest level of service needed to be the best in our business.
            </p>
          </div>
        </div>
        <div className=" lg:w-[40%] px-2 lg:px-5 relative">
          <img
            className=" rounded-lg w-[95%] lg:w-[550px] "
            src="./assets/CEO.jpeg"
            alt="ceo"
          />
          <div className=" bg-[#eef3fc] w-[]" />
        </div>
      </div>
    </div>
  );
};

export default Message;
