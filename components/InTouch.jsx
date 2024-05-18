import React from "react";
import { FaPlus } from "react-icons/fa";

const InTouch = () => {
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
            <h2 className=" font-bold text-[34px] lg:text-[40px]">ABOUT US</h2>
            <p className="text-[20px] lg:pe-5 mt-10">
              Devsky was founded in 2019 in a partnership with Funsol. We create
              cutting-edge mobile applications for sophisticated users. We only
              make use of excellent UI and UX. Join us for the most recent
              features and improvements. We are concentrating on gaining
              traction and accelerating growth in our core businesses.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] mt-10 lg:mt-0 pe-4">
            We understand the importance of approaching each work integrally and
            believe in the power of simple and easy communication
          </p>
          <h2 className=" lg:text-[36px] text-[26px] mt-12  font-semibold">
            Book an Appointment
          </h2>

          <form className=" mt-4" action="">
            <div className="flex flex-col lg:flex-row gap-x-5">
              <div>
                <label className=" text-[18px]" htmlFor="Name">Full name*</label>
                <br />
                <input
                  placeholder="Name"
                  type="text"
                  className="p-[6px] w-full mt-2 focus:outline-red px-5 bg-[#eceeef] border-[1px] rounded  hover:border-red"
                  name="name"
                  id="Name"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email">Mail address*</label>
                <br />
                <input
                  placeholder="example@gmail.com"
                  type="email"
                  className="p-[6px] w-full mt-3 focus:outline-red px-5 bg-[#eceeef] border-[1px] rounded  hover:border-red"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className=" mt-3">

            <label className=" text-[18px]" htmlFor="text">Type your message*</label>
            <br />
            <textarea
              rows="5"
              className="p-[6px] w-full mt-3 focus:outline-red px-5 bg-[#eceeef] border-[1px] rounded  hover:border-red lg:w-[77%]"
              name=""
              id="text"
              placeholder="Type your message*"
            />
              </div>
            <br />
            <div className=" group items-center flex">
              <button
                className="uppercase font-bold w-full lg:w-[70%] bg-black transition-colors duration-1000  group-hover:bg-red  text-white my-2 py-3"
                type="submit"
              >
                Send Your message
              </button>
              <FaPlus className=" py-4 hover:transition-colors duration-1000 group-hover:bg-black text-white bg-red  w-11 h-12 " />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InTouch;
