"use client"
import React, { useState } from 'react';
import Select from 'react-select';

interface DropdownSingleSelectProps {
    onChange: (selectedOption: { id: string, label: string } ) => void;
}

const DropdownSingleSelect: React.FC<DropdownSingleSelectProps> = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const options = [
        { id: 'Technical', label: 'Technical' },
        { id: 'Managerial', label: 'Managerial' },
        { id: 'Assessment', label: 'Assessment' },
        { id: 'Stability', label: 'Stability' },
        { id: 'Client', label: 'Client' },
    ];

    const SelectPage = () => {
        const [selectedOption, setSelectedOption] = useState<{ id: string; label: string } | null>();
        return (

            <div>
                <div className="relative rounded-2xl  ">
                    <Select
                        className=" rounded-xl border-none customSelect w-52 "
                        placeholder="Select level type"
                        onChange={(e) => { setSelectedOption(e) }}
                        options={options}
                    />
                    <button
                        className="absolute  right-0 flex items-center px-4 bg-white rounded-lg"
                        onClick={toggleDropdown}
                    >
                    </button>
                </div>
            </div>
        );
    };
    return <SelectPage />;
};
export default DropdownSingleSelect;