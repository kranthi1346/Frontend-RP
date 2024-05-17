import React, { useEffect, useState } from 'react';
import DropdownSingleSelectWithLabel from '../dropdowns/DropdownSingleSelectWithLabel.component';
import CustomInputField from '../CustomInputField.component';
import IncomeButton from '../CustomRangeInput.component';

interface PositionDetailsSectionProps {
    masterData: {
        [key: string]: { id: number; value: string }[];
    };
    setComponentState: (componentName: string, state: { [key: string]: string }) => void;
}
interface DropdownOption {
    id: number;
    data: string;
}
const PositionDetailsSection: React.FC<PositionDetailsSectionProps> = ({ masterData, setComponentState }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        minBudget: '',
        maxBudget: '',
        minPayScale: '',
        maxPayScale: ''
    });
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

    // Function to handle values change from IncomeButton component for Budget
    const handleBudgetChange = (minValue: string, maxValue: string) => {
        setFormData(prevState => ({
            ...prevState,
            minBudget: minValue,
            maxBudget: maxValue
        }));
    };

    // Function to handle values change from IncomeButton component for Pay Scale
    const handlePayScaleChange = (minValue: string, maxValue: string) => {
        setFormData(prevState => ({
            ...prevState,
            minPayScale: minValue,
            maxPayScale: maxValue
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
            <div className="flex flex-wrap items-center gap-4">
                <div className="w-full sm:w-1/2 lg:w-[49%]  xl:w-[40%] p-2">
                    <IncomeButton
                        title={'Enter Budget Range'}
                        label2={'Max Budget*'}
                        label1={'Min Budget'}
                        onValuesChange={handleBudgetChange} // Pass the callback function for Budget
                    />
                </div>
                <div className="w-full sm:w-1/2 lg:w-[49%]  xl:w-[40%] p-2">
                    <IncomeButton
                        title={'Enter Pay Scale*'}
                        label2={'Max Pay Scale'}
                        label1={'Min Pay Scale*'}
                        onValuesChange={handlePayScaleChange} // Pass the callback function for Pay Scale
                    />
                </div>
            </div>
        </>
    );
};

export default PositionDetailsSection;
