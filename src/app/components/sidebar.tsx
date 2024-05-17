"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
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
      <SidebarItem icon={icon1} pageToRedirect="" active={false} />
      <SidebarItem icon={icon2} pageToRedirect="" active={false} />
      <SidebarItem icon={icon3} pageToRedirect="" active={false} />
      <SidebarItem icon={icon4} pageToRedirect="" active={false} />
      <SidebarItem icon={icon5} pageToRedirect="" active={false} />
      <SidebarItem icon={icon6} pageToRedirect="" active={false} />
      <SidebarItem icon={icon7} pageToRedirect="upload_resume" active={true} />
    </div>
  );
};

interface SidebarItemProps {
  icon: string;
  pageToRedirect: string;
  active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, pageToRedirect, active = false }) => {
  const [selected, setSelected] = useState(false);
  const { push } = useRouter();

  const handleClick = (pagefor: string) => {
    switch (pagefor) {
      case "upload_resume":
        push('/upload_resume');
        return true;
      default: return true;
    }
  };
  const activeLink = (active: boolean) => {

  }
  activeLink(active);
  return (
    <div
      className={`h-[50px] w-[50px] p-[11px] ml-[22px] mt-[20px] ${active ? 'cursor-pointer hover:cursor-pointer' : ''} rounded-lg bg-gray-50  ${selected ? "bg-orange-500" : "bg-white"
        }`}

      onClick={() => active ? handleClick(pageToRedirect) : () => { }}
      style={active ? {} : { background: '#F0F0F0', opacity: '0.5' }}
    >
      <Image src={icon} alt="icon" className="" style={{ height: '30px', width: '30px' }} />
    </div>
  );
};

export default Sidebar;
