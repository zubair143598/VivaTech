/* eslint-disable @next/next/no-img-element */
import React from "react";

const AtViva = () => {
  const activities = [
    {
      title: "ANNUAL TOURS",
      imgs: [
        "./assets/h7_service3.jpg",
        "./assets/h7_service3.jpg",
        "./assets/h7_service3.jpg",
        "./assets/h7_service3.jpg",
        "./assets/h7_service3.jpg",
        "./assets/h7_service3.jpg",
        "./assets/h7_service3.jpg",
      ],
    },
    {
      title: "BIRTHDAY CELEBRATION",
      imgs: [
        "./assets/h7_service5.jpg",
        "./assets/h7_service5.jpg",
        "./assets/h7_service5.jpg",
        "./assets/h7_service5.jpg",
        "./assets/h7_service5.jpg",
        "./assets/h7_service5.jpg",
        "./assets/h7_service5.jpg",
        "./assets/h7_service5.jpg",
        "./assets/h7_service5.jpg",
      ],
    },
    {
      title: "PAKISTAN DAY",
      imgs: ["./assets/h7_service3.jpg"],
    },
  ];

  return (
    <div className=" py-[90px] lg:px-0 px-4">
      <div className=" lg:text-center">
        <h3 className="lg:text-[40px] text-[28px] font-bold">
          Life at Viva Tech Solution
        </h3>
        <div className=" font-serif space-y-5 font-bold text-[14px]">
          <div className=" space-x-4 ">

            <span>• Welcome</span>
            <span>• Birthday</span>
            <span>• WORK ANNIVERSARY </span>
            <span>• ANNUAL TOUR</span>
          </div>
         
          <div className=" space-x-4 ">
            <span>• Employee engagement activities </span>
            <span>• ANNUAL EVENT</span>
            <span>• ORANGE DAY</span>
            <span>• MANGO DAY</span>
          </div>
          <div className=" space-x-4 ">
            <span>• Pakistan day </span>
            <span>• Training</span>
          </div>
        </div>
      </div>

      <div className=" mt-5 space-y-10 lg:w-[70%] mx-auto">
        {activities.map((activity, index) => {
          return (
            <div key={index} className=" ">
              <div className="  flex">
                <hr className="bg-red mt-3 h-[3px] border-none w-[60px]" />
                <p className="font-semibold tracking-wider text-[20px] text-red ms-3 uppercase">
                  {activity.title}
                </p>
              </div>
              <div className=" grid mt-5 grid-cols-1 lg:grid-cols-4 gap-5">
                {activity.imgs.map((img, ind) => {
                  return (
                    <div className=" " key={ind}>
                      <img src={img} alt={activity.title} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AtViva;
