"use client";
import React, { FC, useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext/Global.context";
import CustomImage from "./CustomImage.component";

interface CustomToastProps {}

const CustomToast: FC<CustomToastProps> = ({}) => {
  const {
    toastText,
    toastType,
    updateShowCustomToast,
    showCustomToast,
    hideToast,
  } = useGlobalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
      //   if (closeAction) {
      //     closeAction();
      //   }
    }, 3000);
    return () => clearTimeout(timer);
  }, [showCustomToast]);

  const headingTextColor = () => {
    switch (toastType) {
      case "WARNING":
        return "#EC721C";
      case "SUCCESS":
        return "#048C84";
      case "ERROR":
        return "#FF0000";
      default:
        return "";
    }
  };

  const headingText = () => {
    switch (toastType) {
      case "WARNING":
        return "Warning";
      case "SUCCESS":
        return "Success";
      case "ERROR":
        return "Error";
      default:
        return "";
    }
  };

  const toastIcon = () => {
    switch (toastType) {
      case "WARNING":
        return "warningOrangeIcon";
      case "SUCCESS":
        return "sucessIcon";
      case "ERROR":
        return "errorIcon";
      default:
        return "";
    }
  };

  return (
    <>
      {showCustomToast && (
        <div
          style={{ borderLeftColor: headingTextColor() }}
          className="absolute w-[500px] h-[54px] bg-[#FFFFFF] right-[31px] top-[95px] rounded-[4px] border-l-[2px] pt-[6px] pl-[9px] pr-[6px] pb-[4px]"
        >
          <div className="flex gap-[7px]">
            <CustomImage name={toastIcon()} className="self-start" />
            <div className="flex justify-between w-full">
              <div>
                <p
                  style={{ color: headingTextColor() }}
                  className="text-[14px] font-[700]"
                >
                  {headingText()}
                </p>
                <p className="text-[#000000] text-[12px] font-[400] mt-[2px]">
                  {toastText}
                </p>
              </div>
              <CustomImage
                name="crossBlackIcon"
                className="self-start"
                onClick={() => {
                  hideToast();
                  //   if (closeAction) {
                  //     closeAction();
                  //   }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomToast;
