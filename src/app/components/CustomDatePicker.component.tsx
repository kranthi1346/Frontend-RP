import React, { ChangeEvent, FC, useState } from "react";

interface DatePickerProps {
    inputHeaderText: string;
    placeholderText: string;
    onChange: (date: Date | null) => void;
    onBlur?: () => void;
    onDateSelect: (date: Date | null) => void; // New prop
}

const DatePicker: FC<DatePickerProps> = ({
    inputHeaderText = "",
    placeholderText = "",
    onChange,
    onBlur,
    onDateSelect, // New prop
}) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // State to hold selected date

    // Function to handle date change
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const dateValue = event.target.value;
        if (dateValue) {
            const parsedDate = new Date(dateValue);
            if (!isNaN(parsedDate.getTime())) {
                setSelectedDate(parsedDate);
                onChange(parsedDate); // Call onChange from props
                onDateSelect(parsedDate); // Call onDateSelect with selected date
            }
        } else {
            setSelectedDate(null);
            onChange(null);
            onDateSelect(null); // Call onDateSelect with null if date is cleared
        }
    };

    return (
        <div>
            <div
                className={`w-full  rounded-lg top-[15px] shadow-[0_3px_6px_0px_rgba(126,123,160,0.08)] `}
                style={{ background: '#FAFAFF', opacity: 0.79 }}
            >
                <div className="relative">
                    <label className="block text-[12px] ml-[10px] pt-[9px]">
                        {inputHeaderText}
                    </label>
                    <div className="flex items-center mt-1 relative">
                        <input
                            type="date"
                            value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                            onChange={handleDateChange}
                            placeholder={placeholderText}
                            className="h-[30px] w-[92%] text-[16px] ml-[10px]  pr-3 focus:outline-none mb-[2px] rounded-lg border border-none"
                            onBlur={onBlur}
                            style={{ background: '#FAFAFF', opacity: 1 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatePicker;
