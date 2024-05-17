"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon1 from "../../../public/images/icons/svg/Add icon.svg";
import icon2 from "../../../public/images/icons/svg/dashboard icon.svg";
import icon3 from "../../../public/images/icons/svg/Resources icon.svg";
import icon4 from "../../../public/images/icons/svg/Client Icon.svg";
import icon5 from "../../../public/images/icons/svg/Project icon.svg";
import icon6 from "../../../public/images/icons/svg/Timesheet.svg";
import icon7 from "../../../public/images/icons/svg/briefcase.svg";

const Sidebar: React.FC = () => {
  return (
    <div className="text-white ">
      <SidebarItem icon={icon1} />
      <SidebarItem icon={icon2} />
      <SidebarItem icon={icon3} />
      <SidebarItem icon={icon4} />
      <SidebarItem icon={icon5} />
      <SidebarItem icon={icon6} />
      <SidebarItem icon={icon7} />
    </div>
  );
};

interface SidebarItemProps {
  icon: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`h-[50px] w-[50px] p-[11px] ml-[22px] mt-[20px] hover:cursor-pointer rounded-lg bg-gray-50 cursor-pointer ${
        selected ? "bg-orange-500" : "bg-white"
      }`}
      onClick={handleClick}
    >
      <Image src={icon} alt="icon" className="" />
    </div>
  );
};

export default Sidebar;
