import Link from "next/link";
import { MdMail, MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { usePathname } from "next/navigation";

export const menuItems = [
  { name: "Apps Development", link: "/services/AppDevelopment" },
  { name: "App Planning and Monetization", link: "/services/AppPlanning" },
  { name: "UI/UX Designing", link: "/services/UIDesigning" },
  { name: "ASO", link: "/services/Aso" },
  { name: "Marketing", link: "/services/Marketing" },
  { name: "Publishing", link: "/services/Publishing" },
];
const Sidebar = () => {

 const pathName = usePathname()

  return (
    <div className="flex flex-col lg:w-[22.4rem] h-[100%] bg-white py-8 px-6">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.link} className={` ${pathName=== item.link ?" bg-red text-white":" "} mb-2 hover:bg-red hover:text-white text-black bg-[#F5F3F0]`}>
            <Link className="" href={item.link}>
              <p className="text-[20px] p-3">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className=" space-y-8 mt-10">
        <h3 className="text-[24px] font-bold">Contact Us</h3>
        <div className="flex items-center space-x-2">
          <div className=" ">
            <IoLocation className=" text-red" size={20} />
          </div>
          <div>
            <p className=" text-[16px] text-[#5a5a5a]">
              Office No. 9N, Alaseel Plaza, I10 Markaz, Islamabad, Pakistan
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className=" ">
            <MdMail className=" text-red" size={20} />
          </div>
          <div>
            <p className=" text-[16px] text-[#5a5a5a]">hrvivatech@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className=" ">
            <FaPhoneAlt className=" text-red" size={20} />
          </div>
          <div>
            <p className=" text-[16px] text-[#5a5a5a]">+92 514430962</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className=" ">
            <MdOutlineAccessTimeFilled className=" text-red" size={20} />
          </div>
          <div>
            <p className=" text-[16px] text-[#5a5a5a]">
              Mon to Fri - 08:30 to 6:00
            </p>
            <p className=" text-[16px] text-[#5a5a5a]">
              (Saturday, Sunday Closed)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
