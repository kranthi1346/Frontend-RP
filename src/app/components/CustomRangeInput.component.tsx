import React, { useEffect, useState } from 'react';

interface IncomeButtonProps {
    title?: string;
    label1?: string;
    label2: string;
    onValuesChange: (minValue: string, maxValue: string) => void; // Callback function to notify parent component
}

const IncomeButton: React.FC<IncomeButtonProps> = ({ title, label2, label1, onValuesChange }) => {
    const [minValue, setMinValue] = useState<string>('');
    const [maxValue, setMaxValue] = useState<string>('');

    useEffect(() => {
        // Notify parent component whenever values change
        onValuesChange(minValue, maxValue);
    }, [minValue, maxValue]);


    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d*$/.test(value) || value === '') {
            setMinValue(value);
        }
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d*$/.test(value) || value === '') {
            setMaxValue(value);
        }
    };

    useEffect(() => {
        // Ensure minimum value is less than or equal to maximum value
        if (minValue !== '' && maxValue !== '' && parseFloat(minValue) > parseFloat(maxValue)) {
            // If minimum value is greater than maximum, set maximum to minimum
            setMaxValue(minValue);
        }
    }, [minValue, maxValue]);


    return (
        <div>
            <div className='relative flex bg-white p-5 rounded-xl w-max'>
                <label className="absolute top-2 left-6 text-[12px] font-normal ">
                    {title} <span className="text-red-500">*</span>
                </label>
                <div className='flex pt-3 '>
                    <div className="px-3 pb-[10px] sm:w-[150 px]  lg:w-[180px] xl:w-[200px] bg-gray-50 rounded-lg top-[15px] shadow-[0_4px_6px_0px_rgba(126,123,160,0.08)] ">
                        <label className="block text-[12px] pt-[9px]">
                            {label1} <span className="text-red-500">*</span>
                        </label>
                        <div className='flex justify-between'>
                            <div className='pr-2 pt-2'>
                                <h3 className='font-bold text-normal text-[#ADADAD]'>INR/hrs</h3>
                            </div>
                            <div className='pt-1 overflow-hidden'>
                                <input
                                    className="h-[30px] bg-transparent text-[16px] focus:outline-none text-black font-normal  border-none customSelect"
                                    placeholder="Enter Amount"
                                    value={minValue}
                                    defaultValue={0}
                                    onChange={handleMinChange}
                                />
                            </div>

                        </div>
                    </div>

                    <div className='px-4 py-6'>-</div>

                    <div className="px-3 pb-[10px] sm:w-[150 px] lg:w-[180px] xl:w-[200px] bg-gray-50 rounded-lg top-[15px] shadow-[0_4px_6px_0px_rgba(126,123,160,0.08)] ">
                        <label className="block text-[12px] pt-[9px]">
                            {label2}<span className="text-red-500">*</span>
                        </label>
                        <div className='flex justify-between'>
                            <div className='pr-2 pt-2'>
                                <h3 className='font-bold text-normal text-[#ADADAD]'>INR/hrs</h3>
                            </div>
                            <div className='pt-1 overflow-hidden'>
                                <input
                                    className="h-[30px] bg-transparent text-[16px] focus:outline-none text-black font-normal  border-none customSelect"
                                    placeholder="Enter Amount"
                                    value={maxValue}
                                    onChange={handleMaxChange}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeButton;