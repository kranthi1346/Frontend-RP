import React, { useEffect, useState } from 'react';
import DropdownSingleSelectWithLabel from '../dropdowns/DropdownSingleSelectWithLabel.component';
import CustomInputField from '../CustomInputField.component';

interface EssentialInformationSectionProps {
    masterData: {
        [key: string]: { id: number; value: string }[];
    };
    setComponentState: (componentName: string, state: { [key: string]: string }) => void;
}
interface DropdownOption {
    id: number;
    data: string;
}
const EssentialInformationSection: React.FC<EssentialInformationSectionProps> = ({ masterData, setComponentState }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [remoteAvailable, setRemoteAvailable] = useState(false);

    const handleChange = (name: string, selectedOption: any) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: selectedOption ? selectedOption?.id : ''
        }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setRemoteAvailable(checked);
        setFormData(prevState => ({
            ...prevState,
            [name]: checked.toString() // Convert boolean to string
        }));
    };


    useEffect(() => {
        setComponentState('essentialInfo', formData);
    }, [formData]);


    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/3 lg:w-[16%]  xl:w-[12%] p-2">
                    <DropdownSingleSelectWithLabel
                        title='Position Type'
                        name='positionType'
                        placeholderText={"Select position type"}
                        value={formData['positionType'] || ''}
                        options={masterData?.positionType || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'positionType': value }))}
                        handleChange={handleChange}
                    />

                </div>
                <div className="w-full sm:w-1/3 lg:w-[16%]  xl:w-[12%] p-2">
                    <DropdownSingleSelectWithLabel
                        title='Client Type'
                        name='clientType'
                        placeholderText={"Select client type"}
                        value={formData['clientType'] || ''}
                        options={masterData?.clientType || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'clientType': value }))}
                        handleChange={handleChange}
                    />


                </div>
                <div className="w-full sm:w-1/3 lg:w-[16%]  xl:w-[26%] p-2">
                    <CustomInputField
                        keyName="clientName"
                        inputHeaderText="Client Name"
                        placeholderText="Enter client name"
                        errorText="" // Add error text logic if needed
                        value={formData.clientName || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-full sm:w-1/3 lg:w-[16%]  xl:w-[12%] p-2">
                    <DropdownSingleSelectWithLabel
                        title='Position Priority'
                        name='positionPriority'
                        placeholderText={"Select priority"}
                        value={formData['positionPriority'] || ''}
                        options={masterData?.positionPriority || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'positionPriority': value }))}
                        handleChange={handleChange}
                    />

                </div>
                <div className="w-full sm:w-1/3 lg:w-[16%]  xl:w-[12%] p-2">
                    <DropdownSingleSelectWithLabel
                        title='Work Type'
                        name='workType'
                        placeholderText={"Select work type"}
                        value={formData['workType'] || ''}
                        options={masterData?.workType || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'workType': value }))}
                        handleChange={handleChange}
                    />

                </div>
                <div className="w-full sm:w-1/3 lg:w-[16%]  xl:w-[26%] p-2">
                    <CustomInputField
                        keyName="positionTitle"
                        inputHeaderText="Position Title"
                        placeholderText="Enter position title"
                        errorText="" // Add error text logic if needed
                        value={formData.positionTitle || ''}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="w-full sm:w-1/3 lg:w-[20%]  xl:w-[26%] p-2">

                    <DropdownSingleSelectWithLabel
                        title='Department'
                        name='department'
                        placeholderText={"Select department"}
                        value={formData['department'] || ''}
                        options={masterData?.department || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'department': value }))}
                        handleChange={handleChange}
                    />


                </div>
                <div className="w-full sm:w-1/3 lg:w-[14%]  xl:w-[12%] p-2">
                    <CustomInputField
                        keyName="totalPosition"
                        inputHeaderText="Number of Position"
                        placeholderText="Enter no of position"
                        errorText="" // Add error text logic if needed
                        value={formData.totalPosition || ''}
                        onChange={handleInputChange}
                    />

                </div>
                <div className="w-full sm:w-1/3 lg:w-[15%]  xl:w-[12%] p-2">
                    <DropdownSingleSelectWithLabel
                        title='Experience Level'
                        name='experienceLevel'
                        placeholderText={"Select level"}
                        value={formData['experienceLevel'] || ''}
                        options={masterData?.experienceLevel || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'experienceLevel': value }))}
                        handleChange={handleChange}
                    />

                </div>
                <div className="w-full sm:w-1/3 lg:w-[15%]  xl:w-[12%] p-2">
                    <DropdownSingleSelectWithLabel
                        title='Shift Timing'
                        name='shiftTiming'
                        placeholderText={"Select timing"}
                        value={formData['shiftTiming'] || ''}
                        options={masterData?.shiftTiming || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'shiftTiming': value }))}
                        handleChange={handleChange}
                    />

                </div>
                <div className="w-full sm:w-1/3 lg:w-[21%]  xl:w-[26%] p-2">
                    <CustomInputField
                        keyName="educationalRequirement"
                        inputHeaderText="Educational Requirement*"
                        placeholderText="Enter Educational Requirement*"
                        errorText="" // Add error text logic if needed
                        value={formData.educationalRequirement || ''}
                        onChange={handleInputChange}
                    />

                </div>
                <div className="w-full sm:w-1/3 lg:w-[14%]  xl:w-[12%] p-2">
                    <div className="flex  cursor-pointer">
                        <div className="relative mr-4">
                            <input
                                type="checkbox"
                                className="hidden"
                                name="remoteAvailable"
                                checked={remoteAvailable}
                                onChange={handleRadioChange}
                                defaultChecked={remoteAvailable}
                            />

                            <div
                                className={`toggle__line w-6 h-4 bg-[#DBE0E7] rounded-full shadow-inner ${remoteAvailable ? 'bg-[#0060A9]' : ''}`}
                            />
                            <div
                                className={`toggle__dot absolute w-3 h-3 bg-white rounded-full shadow left-0.5 top-0.5    transition transform ${remoteAvailable ? 'translate-x-full bg-blue-500' : ''}`}
                            />
                        </div>
                        <label className='text-[14px] font-bold'>Remote Available</label>

                    </div>
                </div>

            </div>
        </>
    );
};

export default EssentialInformationSection;
