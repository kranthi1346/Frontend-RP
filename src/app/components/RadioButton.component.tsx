"use client";
import { FC } from "react";

interface RadioButtonProps {
  checked: boolean;
  onChange: () => void;
  activeColor?: string;
  inactiveColor?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  checked = false,
  onChange,
  activeColor = "#FF6000",
  inactiveColor = `#E0E4FF`,
}) => {
  return (
    <div className="flex">
      <div
        onClick={() => onChange()}
        className={`flex w-[20px] h-[20px] rounded-[10px] bg-[#FFFFFF] justify-center items-center cursor-pointer ${
          checked ? "border-[2px]" : "border-[1px]"
        }`}
        style={{
          borderColor: checked ? activeColor : inactiveColor,
        }}
      >
        <div
          className="w-[10px] h-[10px] rounded-[10px]"
          style={{
            backgroundColor: checked ? activeColor : "transparent",
          }}
        ></div>
      </div>
    </div>
  );
};

export default RadioButton;
