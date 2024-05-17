import React, { FC } from "react";

interface CopyRightFooterProps {}

const CopyRightFooter: FC<CopyRightFooterProps> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="text-[#000000] text-[12px] font-[400] ml-[31px] mt-[15px]">{`Copyright © ${currentYear} Carnation Infotech Pvt Ltd. All Rights Reserved`}</p>
  );
};
export default CopyRightFooter;
