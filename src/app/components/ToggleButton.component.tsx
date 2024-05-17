"use client"
import React, { useState } from 'react';

interface ToggleButtonProps {
    initialState?: boolean;
    onToggle: (state: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ initialState = false, onToggle }) => {
    const [documentSubmission, setDocumentSubmission] = useState<boolean>(initialState);

    const handleDocumentSubmissionClick = () => {
        const newState = !documentSubmission;
        setDocumentSubmission(newState);
        onToggle(newState);
    };

    return (
        <div>
            <div className="flex items-center cursor-pointer mb-4 bg-white">
                <label className='text-[14px] font-bold'>Document Submission : </label>
                <div className="relative ml-4">
                    <input type="checkbox" className="hidden" checked={documentSubmission} onClick={handleDocumentSubmissionClick} />
                    <div className={`toggle__line w-6 h-4 bg-[#DBE0E7] rounded-full shadow-inner ${documentSubmission ? 'bg-[#0060A9]' : ''}`} />
                    <div className={`toggle__dot absolute w-3 h-3 bg-white rounded-full shadow left-0.5 top-0.5    transition transform ${documentSubmission ? 'translate-x-full bg-blue-500' : ''}`} />
                </div>
            </div>
        </div>
    );
};

export default ToggleButton;