import React, { FC } from "react";
import CustomImage from "./CustomImage.component";

interface LinkButtonProps {
  title: string;
  onClick?: () => void;
  titleTextColor?: string;
  isUnderline?: boolean;
}

const LinkButton: FC<LinkButtonProps> = ({
  title = "",
  onClick = () => {},
  titleTextColor = "FF6000",
  isUnderline = true,
}) => {
  return (
    <div className="flex">
      <div
        onClick={onClick}
        className="flex justify-center items-center gap-[8px] cursor-pointer"
      >
        <CustomImage name="squareAddOrangeIcon" />
        <div className="">
          <p className={`text-FF6000 text-[14px] font-[700]}`}>{title}</p>
          {isUnderline && <div className={`border-[0.8px] border-FF6000`} />}
        </div>
      </div>
    </div>
  );
};

export default LinkButton;
