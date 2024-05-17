import React, { useEffect, useState } from 'react';
import CustomInputSkill from "../../components/CustomInputSkill.component";

interface KeySkillsSectionProps {
    setComponentState: (componentName: string, state: { addPrimarySkills: string[], addSecondarySkills: string[] }) => void;
}


const KeySkillsSection: React.FC<KeySkillsSectionProps> = ({ setComponentState }) => {
    const [formData, setFormData] = useState<{ addPrimarySkills: string[], addSecondarySkills: string[] }>({
        addPrimarySkills: [],
        addSecondarySkills: [],
    });

    const handlePrimarySkillsChange = (newSkills: string[]) => {
        setFormData({ ...formData, addPrimarySkills: newSkills });
    };

    const handleSecondarySkillsChange = (newSkills: string[]) => {
        setFormData({ ...formData, addSecondarySkills: newSkills });
    };
    useEffect(() => {
        setComponentState('keySkills', formData);
    }, [formData]);

    return (
        <div className="flex justify-between items-flex-start w-full px-[10px] lg:px-[15px] xl:px-[30px] py-[10px]">
            <div className="w-[50%]">
                <CustomInputSkill
                    inputHeaderText="Add Primary Skills"
                    placeholderText="Enter skill name here"
                    onChange={handlePrimarySkillsChange}
                />
            </div>
            <div className="w-[50%]">
                <CustomInputSkill
                    inputHeaderText="Add Secondary Skills"
                    placeholderText="Enter skill name here"
                    onChange={handleSecondarySkillsChange}
                />
            </div>
        </div>
    );
};

export default KeySkillsSection;
