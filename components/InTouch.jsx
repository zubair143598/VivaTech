import { motion, useInView } from "framer-motion";
import Form from "./Form";
import { useRef } from "react";

const InTouch = () => {

  const appointment = [' Book' ,'an' ,'Appointment']

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const baseDuration = 0.5;

  return (
    <div className=" flex justify-center my-[7rem]">
      <div className=" lg:w-[77%] w-[90%] grid grid-cols-1 lg:grid-cols-2 ">
        <div className="  ">
          <div className="flex  ">
            <hr className="bg-red mt-3 h-[3px] border-none w-[60px]" />
            <p className="ms-3 text-red lg:text-[20px] text-[18px] tracking-wider font-bold uppercase">
              Get in touch
            </p>
          </div>
          <div>
            <motion.h2
              ref={ref}
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={
                isInView ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 } : {}
              }
              transition={{
                duration: 2,
              }}
              className=" font-bold text-[34px] lg:text-[40px]"
            >
              ABOUT US
            </motion.h2>
            <p className="text-[20px] lg:pe-5 mt-10">
              VivaTech Solutions Pvt Ltd, founded in 2017, is a Dubai-based
              company specializing in cutting-edge mobile applications, digital
              marketing, web development, ASO, and app development. We
              prioritize top-tier UI and UX design, ensuring the best experience
              for our users. Explore our latest features and enhancements as we
              focus on expanding our core businesses and driving rapid growth.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] mt-10 lg:mt-0 pe-4">
            We value simplicity and effective communication in all our endeavors
          </p>
          <div className=" flex space-x-3">

          {
            appointment.map((val,index)=>{
              const currentDuration = baseDuration + index * 0.2
              const currentDelay = index * 0.3
              return(
                <motion.h5
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={
                  isInView ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 } : {}
                }
                transition={{
                  duration: currentDuration,
                  delay:currentDelay
                }}
                key={index}
                className=" lg:text-[36px] text-[26px] mt-12  font-semibold"
                >
            {val}
          </motion.h5>
              )
            })
          }
          </div>
          
          <Form />
        </div>
      </div>
    </div>
  );
};

export default InTouch;
