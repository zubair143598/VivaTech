import React from "react";
import { useRouter } from "next/router";
import AppDevelopment from "@/components/services/AppDevelopment";
import AppPlanning from "@/components/services/AppPlanning";
import Hero from "@/components/services/Hero";
import Sidebar from "@/components/services/Sidebar";
import { menuItems } from "@/components/services/Sidebar";
import UIDesigning from "@/components/services/UIDesigning";
import Aso from "@/components/services/Aso";
import Marketing from "@/components/services/Marketing";
import Publishing from "@/components/services/Publishing";

const Service = () => {
  const router = useRouter();
  const { Service } = router.query; 

  console.log("Service parameter:", Service);

  const renderServiceComponent = () => {
    switch (Service) {
      case "AppDevelopment":
        return <AppDevelopment />;
      case "AppPlanning":
        return <AppPlanning />;
      case "UIDesigning":
        return <UIDesigning/>
      case "Aso":
        return <Aso/>
      case "Marketing":
        return <Marketing/>
      case "Publishing":
        return <Publishing/>;
      default:
        return <div>Default Content: Select a service from the sidebar</div>;
    }
  };
  const serviceName = menuItems.find(item => item.link.split('/').pop() === Service)?.name || 'Services';

  return (
    <>
      <Hero title={serviceName} />
      <div className="sidebarbg">
        <div className=" py-[90px] w-[90%] lg:w-[77%] mx-auto ">
          <div className=" flex flex-col lg:flex-row  ">
            <div>
              <Sidebar />
            </div>
            <div className="flex-grow lg:ps-8 mt-3 lg:mt-0  ">{renderServiceComponent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
