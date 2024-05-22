import React, { useEffect, useState } from 'react';
import DropdownSingleSelectWithLabel from '../dropdowns/DropdownSingleSelectWithLabel.component';
import CustomInputField from '../CustomInputField.component';

interface PositionDetailsSectionProps {
    masterData: {
        [key: string]: { id: number; data: string }[];
    };
    setComponentState: (componentName: string, state: { [key: string]: string }) => void;
}
interface DropdownOption {
    id: number;
    data: string;
}
const PositionDetailsSection: React.FC<PositionDetailsSectionProps> = ({ masterData, setComponentState }) => {
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

    useEffect(() => {
        setComponentState('positionDetails', formData);
    }, [formData]);



    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-[16%]  xl:w-[14%] p-2">
                    <DropdownSingleSelectWithLabel
                        title='Billability Type'
                        name='billabilityType'
                        value={formData['billabilityType'] || ''}
                        options={masterData?.billabilityType || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'billabilityType': value }))}
                        handleChange={handleChange}
                        placeholderText={"Select type"}
                    />

                </div>
                <div className="w-full sm:w-1/2 lg:w-[16%]  xl:w-[14%] p-2">
                    <DropdownSingleSelectWithLabel
                        title='Billable Hours'
                        name='billableHours'
                        value={formData['billableHours'] || ''}
                        options={masterData?.billableHours || []}
                        setValue={(value) => setFormData(prevState => ({ ...prevState, 'billableHours': value }))}
                        handleChange={handleChange}
                        placeholderText={"Select hours "}
                    />


                </div>
                <div className="w-full sm:w-1/2 lg:w-[16%]  xl:w-[24%] p-2">
                    <CustomInputField
                        keyName="city"
                        inputHeaderText="City"
                        placeholderText="Select City"
                        errorText="" // Add error text logic if needed
                        value={formData.city || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-full sm:w-1/2 lg:w-[16%]  xl:w-[24%] p-2">
                    <CustomInputField
                        keyName="state"
                        inputHeaderText="State"
                        placeholderText="Select State"
                        errorText="" // Add error text logic if needed
                        value={formData.state || ''}
                        onChange={handleInputChange}
                    />

                </div>
                <div className="w-full sm:w-1/2 lg:w-[16%]  xl:w-[24%] p-2">
                    <CustomInputField
                        keyName="country"
                        inputHeaderText="Country"
                        placeholderText="Select Country"
                        errorText="" // Add error text logic if needed
                        value={formData.country || ''}
                        onChange={handleInputChange}
                    />
                </div>

            </div>
            <div className="flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 lg:w-[20%]  xl:w-[26%] p-2">



                </div>
                <div className="w-full sm:w-1/2 lg:w-[14%]  xl:w-[12%] p-2">

                </div>

            </div>
        </>
    );
};

export default PositionDetailsSection;
