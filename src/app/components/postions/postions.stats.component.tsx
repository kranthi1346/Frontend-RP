import React, { FC } from "react";

interface StatisticBarProps {
    label: string;
    value: number;
    maxValue: number;
}

const StatisticBar: FC<StatisticBarProps> = ({ label, value, maxValue }) => {
    // Calculate the width of the bar
    const barWidth = (value / maxValue) * 100;
    //statsBarOptions will be dynamically binded to the API call for Data Snapshot.
    const statsBarOptions = [
        { name: 'Total Position', value: 0, hexColor: '#000000' },
        { name: 'Active Positions', value: 0, hexColor: '#048C84' },
        { name: 'Closed Positions', value: 0, hexColor: '#FF0000' },
        { name: 'Saved Positions', value: 0, hexColor: '#697785' },
        { name: 'On-Hold Positions', value: 0, hexColor: '#C68914' },
        { name: 'Completed Positions', value: 0, hexColor: '#2578C3' }
    ];


    return (<>
        <div className="h-50 border border-solid border-gray-300 rounded-lg bg-white bg-opacity-60 flex items-center">
            {statsBarOptions.map((option, index) => (
                <div key={index} className="p-2 flex-grow-0 min-w-[80px] sm:min-w-[90px] md:min-w-[140px] lg:min-w-[180px]" >
                    <div className="flex items-center gap-2">
                        <span className="font-lato font-bold text-3xl leading-9 text-left" style={option.hexColor ? { color: option.hexColor } : { color: '#000' }}>
                            {option.value}
                        </span>
                        <span className="font-lato text-sm font-normal leading-5 text-left w-16">
                            {option.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>

    </>
    );
};

export default StatisticBar;
