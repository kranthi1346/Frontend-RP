"use client"
import React, { useState } from 'react';
import CustomButtons from '../CustomButtons.component';
import DropdownSingleSelect from '../dropdowns/DropdownSingleSelect.component';
import CustomImage from '../CustomImage.component';

interface PositionInterviewProcessProps {
    initialState?: boolean;
    onToggle: (state: boolean) => void;
}

const PositionInterviewProcess: React.FC<PositionInterviewProcessProps> = ({ initialState = false, onToggle }) => {
    const [documentSubmission, setDocumentSubmission] = useState<boolean>(initialState);
    const [fitmentApproval, setFitmentApproval] = useState<boolean>(initialState);
    const [salaryNegotiation, setSalaryNegotiation] = useState<boolean>(initialState);
    const [showInterview, setShowInterview] = useState(false);
    const [newlevel, setnewLevel] = useState(false);
    const [numInterviewers, setNumInterviewers] = useState(1);
    const [selectedOption, setSelectedOption] = useState<{ id: string; label: string }>()






    const handleDocumentSubmissionClick = () => {
        const newState = !documentSubmission;
        setDocumentSubmission(newState);
        onToggle(newState);
    };

    const handleFitmentApprovalClick = () => {
        const newState = !fitmentApproval;
        setFitmentApproval(newState);
        onToggle(newState);
    };

    const handleSalaryNegotiationClick = () => {
        const newState = !salaryNegotiation;
        setSalaryNegotiation(newState);
        onToggle(newState);
    };



    const toggleDropdown = () => {
        setShowInterview(!showInterview);
    };


    const addInterviewer = () => {
        if (numInterviewers < 5) {
            setNumInterviewers(numInterviewers + 1);
        }
    };

    const [nextId, setNextId] = useState(1);

    const addNewLevel = () => {
        setNextId(nextId + 1);
    };


    const formatedindex = (index: number) => {
        return String(index + 1).padStart(2, '0')
    }

    const handleDropdownChange = (selectedOption: { id: string; label: string }) => {
        setSelectedOption(selectedOption);
        console.log("Selected Option:", selectedOption);
    };

    return (
        <div>
            <div className="relative bg-gray-100 rounded-3xl  overflow-hidden p-2">

                <div className='flex flex-col '>
                    <div className="flex items-center cursor-pointer mb-4">
                        <label className='text-[14px] font-bold'>Document Submission : </label>
                        <div className="relative ml-4">
                            <input type="checkbox" className="hidden" checked={documentSubmission} onChange={handleDocumentSubmissionClick} />
                            <div className={`toggle__line w-6 h-4 bg-[#DBE0E7] rounded-full shadow-inner ${documentSubmission ? 'bg-[#0060A9]' : ''}`} />
                            <div className={`toggle__dot absolute w-3 h-3 bg-white rounded-full shadow left-0.5 top-0.5    transition transform ${documentSubmission ? 'translate-x-full bg-blue-500' : ''}`} />
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer mb-4">
                        <label className='text-[14px] font-bold'>Fitment Approval:</label>
                        <div className="relative ml-14">
                            <input type="checkbox" className="hidden" checked={fitmentApproval} onChange={handleFitmentApprovalClick} />
                            <div className={`toggle__line w-6 h-4 bg-[#DBE0E7] rounded-full shadow-inner ${fitmentApproval ? 'bg-[#0060A9]' : ''}`} />
                            <div className={`toggle__dot absolute w-3 h-3 bg-white rounded-full shadow left-0.5 top-0.5 transition transform ${fitmentApproval ? 'translate-x-full bg-blue-500' : ''}`} />
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer mb-4">
                        <label className='text-[14px] font-bold'>Salary Negotiation: </label>
                        <div className="relative ml-12">
                            <input type="checkbox" className="hidden" checked={salaryNegotiation} onChange={handleSalaryNegotiationClick} />
                            <div className={`toggle__line w-6 h-4 bg-[#DBE0E7] rounded-full shadow-inner ${salaryNegotiation ? 'bg-[#0060A9]' : ''}`} />
                            <div className={`toggle__dot absolute w-3 h-3 bg-white rounded-full shadow left-0.5 top-0.5 transition transform ${salaryNegotiation ? 'translate-x-full bg-blue-500' : ''}`} />
                        </div>
                    </div>
                </div>

                <div className=' rounded-lg  border-b border-[#D4D4D4]  mt-4  '>
                    <table className="w-full ">
                        <thead className="top-0 sticky">
                            <tr className="">
                                <th className="font-bold text-[14px] " colSpan={5}>
                                    <div className='rounded-t-lg bg-[#D3E3F5]  py-2 px-5 text-left text-black text-[12px]'>
                                        Interview Process
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {[...Array(nextId)].map((_, index) => (
                                <tr key={index + 1} className='bg-white rounded-b-lg mb-5' >
                                    <td className="py-2 px-5 border-r border-l w-[3%]">
                                        <div className="w-8 h-8 flex text-white items-center justify-center  bg-[#697785] rounded-full">
                                            {formatedindex(index)}
                                        </div>
                                    </td>
                                    <td className="py-2 px-5 border-r w-[3%]">Level{formatedindex(index)}</td>
                                    <td className="py-4 px-5 border-r w-[5%]" >
                                        <DropdownSingleSelect onChange={(selectedOption) => handleDropdownChange(selectedOption)} />                                    </td>
                                    <td className="py-4 px-4 border-r w-[58%]">
                                        <div className='flex mb-2'>
                                            {showInterview ? (
                                                <div className="flex flex-wrap items-center">
                                                    {[...Array(numInterviewers)].map((_, index) => (
                                                        <div key={index} className="">
                                                            <div>
                                                                <div className=''>
                                                                    <DropdownSingleSelect onChange={function (selectedOption: { id: string; label: string; }): void {
                                                                        throw new Error('Function not implemented.');
                                                                    }} />;
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div>
                                                        <CustomImage name='orangeAddIcon' />
                                                    </div>
                                                    <button className='px-1 py-1 rounded-lg' onClick={addInterviewer}>
                                                        <h3 className='text-[#FF6000] text-xs font-bold'>Add interviewer</h3>
                                                    </button>
                                                </div>
                                            ) : (
                                                <button className='bg-gray-100 px-40 py-[3px] rounded-lg' onClick={toggleDropdown}>
                                                    <h3 className='text-[#697785] font-bold'>Add interviewer</h3>
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-2 px-8 border-r  w-[20%]">
                                        <button onClick={addNewLevel} className=" font-bold text-xs">
                                            Add New Level
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className='pt-40 pb-1 flex justify-end '>
                        <div className='flex '>
                            <div className='gap-2'>
                                <CustomButtons
                                    buttonType="gradient"
                                    title="Cancel"
                                    onClick={() => { }}
                                    paddingX="px-[30px]"
                                    fontColor="black"
                                    fontWeight='700'
                                    paddingY="py-[13px]"
                                    gradientColor="bg-[#CDCDCD]"
                                    buttonColor="bg-[#CDCDCD]"
                                    hoverColor="bg-[#CDCDCD]"
                                />
                            </div>
                            <div className=''>
                                <CustomButtons
                                    buttonType="border"
                                    title="Save as Draft"
                                    onClick={() => { }}
                                    fontColor="text-[#2578C3]"
                                    fontWeight='700'
                                    fontSize="12px"
                                    paddingX="px-[30px]"
                                    paddingY="py-[13px]"
                                    borderColor="border-[#2578C3]"
                                />
                            </div>
                            <div className=''>
                                <CustomButtons
                                    buttonType="border"
                                    title="Assign "
                                    onClick={() => { }}
                                    fontColor="text-white"
                                    fontSize="12px"
                                    fontWeight='700'
                                    paddingX="px-[30px]"
                                    paddingY="py-[13px]"
                                    borderColor="bg-[#0A477D]"
                                    buttonColor="bg-[#0A477D]"
                                    hoverColor="bg-[#2578C3]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PositionInterviewProcess;

