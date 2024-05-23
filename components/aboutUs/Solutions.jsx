/* eslint-disable @next/next/no-img-element */
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Solutions = () => {
  return (
    <div className=" lg:w-[80%] lg:ps-0 ps-3 mx-auto mt-[9rem]">
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="  flex">
            <hr className="bg-red mt-3 h-[3px] border-none w-[80px]" />
            <p className="font-semibold tracking-wider text-[20px] text-red ms-3 uppercase">
              About Us
            </p>
          </div>
          <h1 className=" text-[40px] font-bold font-serif">
            We help to get Solutions!
          </h1>
          <div className="lg:me-16 space-y-7">
            <p className=" text-[22px] text-[#6EC1E4] ">
              Our agency can only be as strong as our people & because of this,
              our team have designed game changing products.
            </p>
            <p className="text-[18px]">
              Intime is a design studio founded in London. Nowadays, we’ve grown
              and expanded our services, and have become a multinational firm,
              offering a variety of services and solutions Worldwide.
            </p>
          </div>
          <div className=" flex lg:flex-row flex-col lg:space-y-0 mb-5 lg:mb-0 space-y-5  justify-center gap-x-10 me-16 mt-16">
            <div className=" border-l-2 lg:w-[50%] ps-5">
              <h5 className=" flex space-x-3 items-center">
                <IoShieldCheckmarkSharp className=" text-red" size={40} />
                <span className=" text-[20px] font-serif font-bold">
                  Risk Free
                </span>
              </h5>
              <p>We offer risk free business for tension free life.</p>
            </div>
            <div className=" border-l-2 lg:w-[50%] ps-5">
              <h5 className=" flex space-x-3 items-center">
                <IoShieldCheckmarkSharp className=" text-red" size={40} />
                <span className=" text-[20px] font-bold font-serif">
                  Business Growth
                </span>
              </h5>
              <p>We ensure the business growth without conditions.</p>
            </div>
          </div>
        </div>
        <div className=" px-4">
            <img className=" rounded-xl" src="./assets/about_banner1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
