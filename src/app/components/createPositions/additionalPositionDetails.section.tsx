import React, { useEffect, useState } from 'react';
import DatePicker from '../CustomDatePicker.component';
import CustomInputField from '../CustomInputField.component';

interface AdditionalPositionsDetailProps {
    setComponentState: (componentName: string, state: { [key: string]: string | Date | null }) => void;
}

const AdditionalPositionsDetail: React.FC<AdditionalPositionsDetailProps> = ({ setComponentState }) => {
    const [formData, setFormData] = useState<{ [key: string]: string | Date | null }>({});

    // Function to handle input change for hiring manager
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle date selection for date pickers
    const handleDateSelect = (date: Date | null, fieldName: string) => {
        const formattedDate = date ? formatDate(date) : null;
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: formattedDate
        }));
    };

    // Function to format date as "dd-mm-yyyy"
    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    useEffect(() => {
        // Example of calling setComponentState to update parent component state
        setComponentState("AdditionalPositionsDetail", formData);
    }, [formData]);

    return (
        <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 lg:w-[16%]  xl:w-[12%] p-2">
                <DatePicker
                    inputHeaderText={"Date Opened"}
                    placeholderText={'Select date'}
                    onChange={() => { }}
                    onBlur={() => { }}
                    onDateSelect={(date) => handleDateSelect(date, 'dateOpened')} />
            </div>
            <div className="w-full sm:w-1/3 lg:w-[16%]  xl:w-[12%] p-2">
                <DatePicker
                    inputHeaderText={"Target Date"}
                    placeholderText={'Select date'}
                    onChange={() => { }}
                    onBlur={() => { }}
                    onDateSelect={(date) => handleDateSelect(date, 'targetDate')} />
            </div>
            <div className="w-full sm:w-1/3 lg:w-[24%]  xl:w-[26%] p-2">
                <CustomInputField
                    keyName="hiringManager"
                    inputHeaderText="Hiring Manager*"
                    placeholderText="Enter Hiring Manager*"
                    errorText="" // Add error text logic if needed
                    value={formData.hiringManager || ''}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default AdditionalPositionsDetail;
