/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Marketing = () => {
  return (
    <div className="p-4 h-full bg-white">
    <div className="py-[28px] px-[14px]">
      <img src="../assets/services.png" className="mx-auto " alt="services" />
      <div className=" leading-[30px] space-y-4">
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            Social Media Marketing:{" "}
            </span>{" "}
            Promoting your app on popular social media platforms such as Facebook, Instagram, Twitter, and LinkedIn to increase brand awareness and drive app downloads.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            Paid Advertising:{" "}
            </span>{" "}
            Running targeted advertising campaigns across various channels, including social media, search engines, and app stores, to increase app visibility and attract users.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            Content Marketing: {" "}
            </span>{" "}
            Creating and sharing informative and engaging content, such as blog posts, articles, videos, and infographics, to showcase your app's features and benefits and attract potential users.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            Email Marketing: {" "}
            </span>{" "}
            Building and nurturing a loyal user base through personalized email campaigns, newsletters, and updates to encourage app downloads and user engagement.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            App Install Campaigns:{" "}
            </span>{" "}
            Running advertising campaigns specifically designed to drive app installs, often through incentivized promotions or discounts.
          </p>
          <p>
            {" "}
            <span className=" text-[18px] font-bold">
            App Store Optimization (ASO):  {" "}
            </span>{" "}
            Optimizing various elements of your app's listing in the app stores to improve visibility and ranking in search results.
          </p>
         
        </div>
    </div>
  </div>
  )
}

export default Marketing