import React, { useState } from 'react';
import Select from 'react-select';
import ValueType from 'react-select';

interface DropdownOption {
    id: number;
    value: string;
}

interface DropdownSingleSelectWithLabelProps {
    title: string;
    name: string;
    value: string;
    options: DropdownOption[];
    setValue: (data: string) => void;
    handleChange: (name: string, selectedOption: DropdownOption | null) => void;
    placeholderText: string;
}

const DropdownSingleSelectWithLabel: React.FC<DropdownSingleSelectWithLabelProps> = ({ title, name, value, options, setValue, handleChange, placeholderText }) => {
    const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

    const toggleDropdown = () => {
        // Implement dropdown toggle logic if needed
    };

    const handleSelectChange = (selectedOption: any) => {
        setSelectedOption(selectedOption as DropdownOption);
        handleChange(name, selectedOption as DropdownOption);
    };

    return (
        <div className="w-full pb-[10px] bg-gray-100 rounded-lg top-[15px] shadow-[0_3px_6px_0px_rgba(126,123,160,0.08)]" style={{ background: '#FAFAFF', opacity: 1 }}>
            <label className="block text-[12px] ml-[10px] pt-[9px]">
                {title} <span className="text-red-500">*</span>
            </label>
            <Select
                name={name}
                className="h-[30px] w-full text-[16px] focus:outline-none mb-[2px] border-none customSelect"
                placeholder={placeholderText}
                value={selectedOption}
                onChange={handleSelectChange}
                options={options?.map(option => ({ value: option.value, label: option.value, id: option.id }))}
                classNamePrefix={"my-custom-react-select"}
                styles={{
                    placeholder: base => ({
                        ...base,
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        display: "initial"
                    })
                }}
            />
            <button className="absolute right-0 flex items-center px-4 bg-white rounded-lg" onClick={toggleDropdown}></button>
        </div>
    );
};

export default DropdownSingleSelectWithLabel;
