import React, { ChangeEvent, useState } from "react";

interface CustomInputSkillProps {
    inputHeaderText: string;
    placeholderText: string;
    onChange: (newSkills: string[]) => void;
}

const CustomInputSkill: React.FC<CustomInputSkillProps> = ({
    inputHeaderText,
    placeholderText,
    onChange,
}) => {
    const [inputValue, setInputValue] = useState<string>(""); // State to hold input value
    const [skills, setSkills] = useState<string[]>([]); // State to hold entered skills

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddSkill = () => {
        const trimmedSkill = inputValue.trim().toLowerCase();
        if (skills.length < 10 && trimmedSkill !== "" && !skills.includes(trimmedSkill)) {
            const newSkills = [...skills, trimmedSkill];
            setSkills(newSkills);
            onChange(newSkills);
            setInputValue("");
        }
    };

    const handleRemoveSkill = (index: number) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
        onChange(newSkills);
    };

    return (
        <div>
            <div
                className={`w-full sm:w-[70%]  lg:w-[300px] xl:w-[362px]  rounded-lg top-[15px] shadow-[0_3px_6px_0px_rgba(126,123,160,0.08)] `}
                style={{ background: '#FAFAFF' }}
            >
                <div className="relative">
                    <label className="block text-[12px] ml-[10px] pt-[9px]">{inputHeaderText}
                        {true
                            && <span className="text-red-500">*</span>}</label>
                    <div className="flex items-center mt-1 relative">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleAddSkill();
                                }
                            }}
                            type="text"
                            placeholder={placeholderText}
                            className="h-[30px] w-[92%] text-[16px] ml-[10px]  pr-3 focus:outline-none mb-[2px] rounded-lg border border-none"
                            style={{ background: '#FAFAFF', opacity: 0.79 }}
                        />
                        <svg
                            className="h-5 w-5 text-gray-400 absolute right-3 top-0 transform -translate-y-1/2 cursor-pointer"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={handleAddSkill}
                        >
                            <path d="M12 4v16m8-8H4"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Render skills */}
            <div className="mt-2 flex flex-wrap">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative bg-[#fff] rounded-lg px-6 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        style={{ paddingLeft: '5px', minWidth: '128px' }}
                    >
                        <div className="text-left">{skill}</div>
                        <svg
                            className="h-4 w-4 text-gray-600 absolute right-2 cursor-pointer"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => handleRemoveSkill(index)}
                            style={{ top: '0.95rem' }}
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomInputSkill;
