/* eslint-disable @next/next/no-img-element */
import React from 'react'

const UIDesigning = () => {
  return (
    <div className="p-4 h-full bg-white">
      <div className="py-[28px] px-[14px]">
        <img src="../assets/services.png" className="mx-auto " alt="services" />
        <div className=" leading-[30px] space-y-4">
          <p>
          Creating an exceptional user experience is crucial for the success of any app. Our UX and UI design services are dedicated to ensuring your app is not only functional but also visually appealing, providing users with an engaging and intuitive experience.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            Prototyping:{" "}
            </span>{" "}
            Creating basic layouts and interactive prototypes to simulate user experience and gather feedback.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            Visual Design: {" "}
            </span>{" "}
            Crafting appealing interfaces, style guides, and subtle animations to enhance user interaction.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            Usability Testing: {" "}
            </span>{" "}
            Conducting A/B tests, gathering user feedback, and ensuring designs meet usability standards.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            Responsive Design:{" "}
            </span>{" "}
            Ensuring your app works seamlessly across various devices and screen sizes.
          </p>
         
         
        </div>
      </div>
    </div>
  )
}

export default UIDesigning