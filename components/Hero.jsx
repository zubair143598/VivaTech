/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className=" hero  lg:h-[49rem] h-[40rem] relative">
      <div className="text-white   top-[8rem] lg:right-[200px] lg:w-[35%]  absolute">
        <div className=" flex ">
          <hr className="lg:block hidden bg-red mt-3 h-[3px] border-none w-[80px]" />
          <motion.p
            ref={ref}
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={
              isInView ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 } : {}
            }
            transition={{
              duration: 2,
            }}
            className=" font-bold lg:text-[18px] text-[14px] ms-3"
          >
            Turning Visions into Reality
          </motion.p>
        </div>
        <div className=" ps-3 ">
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
              duration: 2,
            }}
          >
            <h1 className="font-bold text-[26px] lg:text-[40px]">
              Commitment to Excellence
            </h1>
            <p className="mt-10  w-[70%] lg:text-[18px] text-[#e2e8f0] ">
              Focusing on Quality for Unmatched Outcomes. Prioritizing
              Perfection in Every Detail!
            </p>
          </motion.div>
          <Link href="/About">
            <motion.button
              ref={ref}
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={
                isInView ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 } : {}
              }
              transition={{
                duration: 2,
              }}
              className=" mt-10 bg-red text-[16px] font-semibold uppercase px-10 py-4"
            >
              Read more
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
