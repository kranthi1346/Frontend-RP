import React from 'react';
import DropdownWithSearch from '../dropdowns/DropdownWithSearch.component';
import Image from 'next/image';
import searchicon from "../../../../public/images/icons/svg/Search-icon.svg";

const PositionsFiltersSection: React.FC = () => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="w-[80%]">
                <div className="flex items-center w-[70%] gap-2">
                    <span className="mr-2">Filter:</span>
                    <div style={{ flex: '3.5' }}>
                        <DropdownWithSearch />
                    </div>
                    <div style={{ flex: '2.5' }}>
                        <DropdownWithSearch />
                    </div>
                    <div style={{ flex: '2.5' }}>
                        <DropdownWithSearch />
                    </div>

                </div>
            </div>
            <div className="w-[20%]">

                <div
                    className="relative flex items-center ml-auto rounded-lg"
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
                        placeholder="Search position"
                        className="py-[11px] px-[14px] pl-[10px] pr-[40px] w-[280px] bg-transparent focus:outline-none"
                    />
                    <button className="absolute top-[8px] right-[13px] bg-transparent rounded-full p-[3px]">
                        <Image
                            src={searchicon}
                            alt="Search"
                            className="h-[24px] w-[24px] text-gray-300 top-[8px] left-[244px] p-[3px] "
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PositionsFiltersSection;
