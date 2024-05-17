import React, { FC } from "react";
import CustomImage from "./CustomImage.component";

interface ChipCardProps {
  title: string;
  crossAction: () => void;
}

const ChipCard: FC<ChipCardProps> = ({
  title = "Chip Name 01",
  crossAction = () => {},
}) => {
  return (
    <div className="flex">
      <div className="flex bg-[#FFFFFF] border-[#EEEEEE] border-[1px] pl-[12px] py-[9px] pr-[14px] gap-[20px] rounded-[10px] justify-center items-center">
        <p className="text-[#000000] text-[12px] font-[700]">{title}</p>
        <CustomImage
          name="crossGrayIcon"
          onClick={crossAction}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ChipCard;
