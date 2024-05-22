import React, { useEffect, useState } from 'react';
import CustomInputSkill from "../../components/CustomInputSkill.component";

interface KeySkillsSectionProps {
    setComponentState: (componentName: string, state: { primarySkills: string[], secondarySkills: string[] }) => void;
}


const KeySkillsSection: React.FC<KeySkillsSectionProps> = ({ setComponentState }) => {
    const [formData, setFormData] = useState<{ primarySkills: string[], secondarySkills: string[] }>({
        primarySkills: [],
        secondarySkills: [],
    });

    const handlePrimarySkillsChange = (newSkills: string[]) => {
        setFormData({ ...formData, primarySkills: newSkills });
    };

    const handleSecondarySkillsChange = (newSkills: string[]) => {
        setFormData({ ...formData, secondarySkills: newSkills });
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
