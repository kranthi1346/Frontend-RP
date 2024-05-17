"use client";
import { FC } from "react";
import CustomImage from "./CustomImage.component";
import { isNotNullAndUndefined } from "@/utils/common/helper";

interface CheckButtonProps {
  checked: boolean;
  onChange?: () => void;
  activeColor?: string;
  inactiveColor?: string;
  disabled?: boolean;
  disabledBgColor?: string;
  disabledBorderColor?: string;
}

const CheckButton: FC<CheckButtonProps> = ({
  checked = false,
  onChange,
  activeColor = `#2578C3`,
  inactiveColor = `#E0E4FF`,
  disabled = false,
  disabledBgColor = "#EAEAEA",
  disabledBorderColor = "#E0E0E0",
}) => {
  return (
    <div className="flex self-center">
      <div
        onClick={() => {
          if (!disabled) {
            if (isNotNullAndUndefined(onChange)) {
              onChange();
            }
          }
        }}
        className={`flex w-[20px] h-[20px] rounded-[10px] justify-center items-center cursor-pointer ${
          checked ? "border-[2px]" : "border-[1px]"
        }`}
        style={{
          borderColor: disabled
            ? disabledBorderColor
            : checked
            ? activeColor
            : inactiveColor,
          backgroundColor: disabled
            ? disabledBgColor
            : checked
            ? activeColor
            : "#FFFFFF",
        }}
      >
        {checked && <CustomImage name="tickWhiteIcon" />}
      </div>
    </div>
  );
};

export default CheckButton;
