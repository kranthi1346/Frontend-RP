"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/images/icons/svg/logo.svg";
import searchicon from "../../../public/images/icons/svg/Search-icon.svg";
import line from "../../../public/images/icons/svg/Line1.svg";
import settingicon from "../../../public/images/icons/svg/setting-icon.svg";
import notification from "../../../public/images/icons/svg/Notification.svg";

const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [buttonColor, setButtonColor] = useState<{ [key: string]: string }>({});
  const [divColor, setDivColor] = useState<{ [key: string]: string }>({});

  const handleButtonClick = (buttonId: string) => {
    setButtonColor({ ...buttonColor, [buttonId]: "orange" });
  };

  const handleDivClick = (divId: string) => {
    setDivColor({ ...divColor, [divId]: "orange" });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5 border-b-2 border-gray-950 border-opacity-10 py-[10x] ">
      <nav className="flex">
        <div className="flex items-center">
          <div className="flex  ">
            <Image src={logo} alt="Logo" className="rounded-full mr-6" />
          </div>
          <div
            className="relative flex items-center  rounded-lg"
            style={{
              background:
                "linear-gradient(241.25deg, rgba(250, 250, 255, 0.35)  4.4%, rgba(255, 255, 255, 0.83) 119.94%)",
              borderImageSource:
                "linear-gradient(62.65deg, rgba(237, 237, 237, 0.49) 15.08%, rgba(255, 255, 255, 0) 90.38%)",
              boxShadow: "0px 4px 6px 0px rgba(126, 123, 160, 0.08)",
            }}
          >
            <input
              type="text"
              placeholder="Search Project, Resource Client and more"
              className="py-[11px] px-[14px] pl-[10px] pr-[32px] w-[280px] bg-transparent"
              style={{
                paddingRight: "40px",
              }}
            />
            <button className="absolute top-[8px] right-[13px] bg-transparent rounded-full p-[3px] focus:outline-none">
              <Image
                src={searchicon}
                alt="Search"
                className="h-24 w-24 text-gray-300"
                width={24}
                height={24}
                style={{
                  width: "24px",
                  height: "24px",
                  top: "8px",
                  left: "244px",
                  padding: "3px",
                  gap: "0px",
                  opacity: "0px",
                }}
              />
            </button>
          </div>
          {currentTime && (
            <div className="ml-[9px] font-lato">
              <span className="text-3xl w-[68px] h-[48px] font-normal ">
                {currentTime.slice(0, -3)}
              </span>
              <span className="">{currentTime.slice(-2)}</span>
            </div>
          )}
        </div>
        <div className="flex ml-auto space-x-[10px] items-center">
          <button
            className="bg-gray-100 text-gray-950 rounded-lg font-[14px] text-base px-[12px] py-[6px] hover:cursor-pointer flex items-center justify-center shadow-md-[--tw-shadow: 1px 2px -1px ] border border-solid"
            style={{
              backgroundColor: buttonColor["home"],
              border: "1.11px solid",
              borderImageSource:
                "linear-gradient(62.65deg, rgba(237, 237, 237, 0.49) 15.08%, rgba(255, 255, 255, 0) 90.38%)",
              boxShadow: "0px 4px 6px 0px rgba(126, 123, 160, 0.08)", // Box shadow added here
              backgroundImage:
                "linear-gradient(241.25deg, rgba(250, 250, 255, 0.35) 4.4%, rgba(255, 255, 255, 0.83) 119.94%)",
              fontFamily: "Lato, sans-serif", // Set font family to Lato
              fontSize: "14px", // Set font size to 14px
            }}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </button>

          <button
            className="bg-gray-100 text-gray-950 rounded-lg font-[14px] text-base px-[12px] py-[6px] hover:cursor-pointer flex items-center justify-center shadow-md-[--tw-shadow: 1px 20px -1px ] border border-solid"
            style={{
              backgroundColor: buttonColor["position"],
              border: "1.11px solid",
              borderImageSource:
                "linear-gradient(62.65deg, rgba(237, 237, 237, 0.49) 15.08%, rgba(255, 255, 255, 0) 90.38%)",
              boxShadow: "0px 4px 6px 0px rgba(126, 123, 160, 0.08)",
              backgroundImage:
                "linear-gradient(241.25deg, rgba(250, 250, 255, 0.35) 4.4%, rgba(255, 255, 255, 0.83) 119.94%)",
              fontFamily: "Lato, sans-serif",
              fontSize: "14px",
            }}
            onClick={() => handleButtonClick("position")}
          >
            Position
          </button>

          <button
            className="bg-gray-100 text-gray-950  rounded-lg font-[14px] text-base px-[12px] py-[6px] hover:cursor-pointer flex items-center justify-center"
            style={{
              backgroundColor: buttonColor["requirements"],
              border: "1.11px solid",
              borderImageSource:
                "linear-gradient(62.65deg, rgba(237, 237, 237, 0.49) 15.08%, rgba(255, 255, 255, 0) 90.38%)",
              boxShadow: "0px 4px 6px 0px rgba(126, 123, 160, 0.08)",
              backgroundImage:
                "linear-gradient(241.25deg, rgba(250, 250, 255, 0.35) 4.4%, rgba(255, 255, 255, 0.83) 119.94%)",
              fontFamily: "Lato, sans-serif",
              fontSize: "14px",
            }}
            onClick={() => handleButtonClick("requirements")}
          >
            Requirements
          </button>
          <Image
            src={line}
            alt="Line"
            className="h-8 w-8 ml-2 "
            width={50}
            height={50}
          />
        </div>
        <div className="flex space-x-[10px] items-center">
          <div
            className="h-[50px] w-[50px] p-[11px] ml-2 hover:cursor-pointer rounded-lg bg-gray-50"
            style={{
              backgroundColor: buttonColor["setting"],
              borderImageSource:
                "linear-gradient(62.65deg, rgba(237, 237, 237, 0.49) 15.08%, rgba(255, 255, 255, 0) 90.38%)",
              backgroundImage:
                "linear-gradient(241.25deg, rgba(250, 250, 255, 0.35) 4.4%, rgba(255, 255, 255, 0.83) 119.94%)",
            }}
            onClick={() => handleDivClick("setting")}
          >
            <Image
              src={settingicon}
              alt="Setting Icon"
              className="w-full h-full"
            />
          </div>
          <div
            className="h-[50px] w-[50px] p-[11px] ml-2 hover:cursor-pointer rounded-lg bg-white"
            style={{ backgroundColor: divColor["notification"] }}
            onClick={() => handleDivClick("notification")}
          >
            <Image
              src={notification}
              alt="Notification Icon"
              className="w-full h-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
