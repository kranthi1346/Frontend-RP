"use client";
import { FC, useEffect, useRef, useState } from "react";

import RadioButton from "../components/RadioButton.component";
import CheckButton from "../components/CheckButton.component";
import ChipCard from "../components/ChipCard.component";
import LinkButton from "../components/LinkButton.component";
import CustomImage from "../components/CustomImage.component";
import DropdownWithSearch from "../components/dropdowns/DropdownWithSearch.component";

const Dashboard: FC<{}> = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="pl-[24px] pr-[31px] pt-[10px]">
      <div className="bg=[#FFFFFF99] border-[1px] border-[#FFFFFF] rounded-[20px] p-[5px]">
        dashboard page
        <RadioButton
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <CheckButton
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <ChipCard title="qwerty 01" crossAction={() => {}} />
        <LinkButton title="Add Technologies & Skills" />
        <div className="w-[400px]">
          <DropdownWithSearch />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
