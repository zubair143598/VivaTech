/* eslint-disable @next/next/no-img-element */
import React from "react";

const TeamMembers = () => {
  const teamMembers = [
    {
      img: "./assets/member1.png",
      name: "Hikmat Bazid",
      position: "CEO",
    },
    {
      img: "./assets/member1.png",
      name: "Hikmat 1",
      position: "CEO1",
    },
    {
      img: "./assets/member1.png",
      name: "Hikmat 2",
      position: "CEO2",
    },
    {
      img: "./assets/member1.png",
      name: "Hikmat 3",
      position: "CEO3",
    },
    {
      img: "./assets/member1.png",
      name: "Hikmat 4",
      position: "CEO4",
    },
    {
      img: "./assets/member1.png",
      name: "Hikmat 5",
      position: "CEO5",
    },
  ];

  return (
    <div>
      <div className=" py-[64px] bg-[#F4F2EF] team  mx-auto">
        <div className=" text-red flex justify-center">
          <hr className="bg-red mt-3 h-[3px] border-none w-[60px]" />
          <p className="font-bold tracking-wider uppercase lg:text-[20px] mx-3">
            TEAM MEMBERS
          </p>
          <hr className="bg-red mt-3 h-[3px] border-none w-[60px]" />
        </div>
        <h3 className=" text-[36px] lg:text-[40px] text-center font-serif font-bold">
          Our Expert Team Member will <br className=" lg:block hidden" />
          Help Your Business.
        </h3>
      </div>

      <div className=" py-[64px] lg:w-[65%] mx-auto">
        <div className=" grid gap-10 grid-cols-1 px-3 lg:px-0 lg:grid-cols-4 ">
          {teamMembers.map((member, index) => {
            return (
              <div className="shadow-md group hover:shadow-xl hover:border-b-4 border-red  " key={index}>
                <img className=" w-[100%]" src={member.img} alt=" ceo" />
                <div className=" mx-10 py-5 pb-20  ">
                  <h6 className=" text-[24px] font-bold">{member.name}</h6>
                  <p className=" text-red group-hover:border-b-2 inline-block border-red text-[18px] ">{member.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
