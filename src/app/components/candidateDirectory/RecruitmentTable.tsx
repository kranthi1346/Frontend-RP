"use client";

import React, { FC, Fragment } from "react";
import CustomButtons from "../CustomButtons.component";
import Image from "next/image";
import clipboardicon from "../../../../public/images/icons/svg/fluent-mdl2_clipboard-list.svg";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext/Global.context";

interface CandidateFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    file: File | null;
    timestamp: string;
}

interface RecruitmentTableProps {
    records: CandidateFormData[];
    setRecords: React.Dispatch<React.SetStateAction<CandidateFormData[]>>;
}

const RecruitmentTable: FC<RecruitmentTableProps> = ({ records, setRecords }) => {
    const router = useRouter();
    const { updateShowCustomToast } = useGlobalContext();

    const removeCandidate = (index: number) => {
        const updatedRecords = [...records];
        updatedRecords.splice(index, 1);
        setRecords(updatedRecords);
    };



    const uploadCandidate = async (candidate: any) => {
        const formData = new FormData();

        formData.append('firstName', candidate.firstName);
        formData.append('lastName', candidate.lastName);
        formData.append('email', candidate.email);
        formData.append('phone', candidate.phone);
        formData.append('file', candidate.file as File);

        const url = "https://karmik.carnationinfotech.com/upload";

        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            // Since we can't access response.ok with 'no-cors', check status code instead
            if (response.status >= 200 && response.status < 300) {
                // Request was successful (status 2xx)
            } else {
                // Request failed
                throw new Error("Failed to upload candidate");
            }
        } catch (error) {
            console.error("Error uploading candidate:", error);
            throw error;
        }
    };

    const handleUploadClick = async () => {
        try {
            // const uploadPromises = records.map(candidate=>uploadCandidate(candidate));
            // await Promise.all(uploadPromises);
            await Promise.all(records.map(uploadCandidate));
            updateShowCustomToast("SUCCESS", "Records added successfully");
            setRecords([])
            // router.push('/upload_resume')
        } catch (error) {
            alert('Error uploading candidates, Please try again.');
        }
    };

    const formatDate = (date: Date): string => { //Move to common global funtion
        const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day: number = date.getDate();
        const monthIndex: number = date.getMonth();
        const year: number = date.getFullYear();
        let hours: number = date.getHours();
        const minutes: number = date.getMinutes();
        const ampm: string = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // 12-hour clock
        const formattedDate: string = `${day} ${months[monthIndex]} ${year} | ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
        return formattedDate;
    };


    return (
        <div>
            {records?.length > 0 ? (
                <Fragment>
                    <div className="mt-6 overflow-y-auto max-h-[300px]">
                        <table className="w-full table-fixed ">
                            <thead className="top-0 sticky">
                                <tr className="text-left bg-[#697785] text-white text-sm ">
                                    <th className="font-normal pl-4 py-2 w-16">
                                        S.No.
                                    </th>
                                    <th className="font-normal pl-4 py-2">
                                        Candidate First Name
                                    </th>

                                    <th className=" font-normal pl-4 py-2">
                                        Candidate Last Name
                                    </th>
                                    <th className="font-normal pl-4 py-2">Email ID</th>
                                    <th className="font-normal pl-4 py-2">Mobile Number</th>
                                    <th className="font-normal pl-4 py-2 w-[25%]">Uploaded File Name</th>
                                    <th className="font-normal pl-4 py-2 w-32">Action</th>
                                </tr>
                            </thead>

                            <tbody className="bg-transparent align-center">
                                {records.map((candidate, index) => (
                                    <tr key={index} className="text-black text-base ">
                                        <td className=" border-r pl-4 py-2 w-16 border-gray-300">
                                            {index + 1}
                                        </td>
                                        <td className=" border-r pl-4 py-2 border-gray-300">
                                            {candidate.firstName}
                                        </td>
                                        <td className=" border-r pl-4 py-2 border-gray-300">
                                            {candidate.lastName}
                                        </td>
                                        <td className=" border-r pl-4 py-2 border-gray-300">
                                            {candidate.email}
                                        </td>
                                        <td className=" border-r pl-4 py-2 border-gray-300">
                                            {candidate.phone}
                                        </td>
                                        <td className=" border-r pl-4 py-2 border-gray-300">
                                            {candidate.file ? candidate.file.name : "N/A"}
                                            <tr className="text-center text-[14px] italic text-[#ADADAD] p-2">
                                                Added on this {formatDate(new Date(candidate?.timestamp))}
                                            </tr>
                                        </td>

                                        <td className="">
                                            <button className="text-orange-500 font-bold px-4 rounded"
                                                onClick={() => removeCandidate(index)}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex border-gray-300 justify-between tems-center text-right border-t py-3 px-4">
                        <div className="flex justify-between ">
                            <span className="italic ml-[5px] text-[12px] font-bold text-base">
                                *Note:
                            </span>
                            <span className="italic ml-[5px] text-[12px] font-normal text-base">
                                You can upload only&nbsp;
                                <span className="italic text-[12px] font-bold  text-base">
                                    10&nbsp;
                                </span>
                            </span>
                            <span className="italic font-normal text-[12px] text-base">
                                records in one time.
                            </span>

                        </div>
                        <div className="border-gray-300 ">
                            <CustomButtons
                                buttonType="border"
                                title="Upload All"
                                onClick={() => handleUploadClick()}
                                fontColor="white"
                                fontSize="12px"
                                paddingX="px-[12px]"
                                paddingY="py-[10px]"
                                borderColor="bg-[#2578C3]"
                                buttonColor="bg-[#2578C3]"
                                hoverColor="bg-[#2578C3]"
                            />
                        </div>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div className=" pt-2 mt-[1rem]">
                        <table className="w-full  ">
                            <thead>
                                <tr className="text-left bg-[#697785] text-white text-sm ">
                                    <th className="font-normal pl-4 py-2 w-16">
                                        S.No.
                                    </th>

                                    <th className="font-normal pl-4 py-2">
                                        Candidate First Name
                                    </th>
                                    <th className=" font-normal pl-4 py-2">
                                        Candidate Last Name
                                    </th>
                                    <th className=" font-normal pl-4 py-2">Email ID</th>
                                    <th className=" font-normal pl-4 py-2">Mobile Number</th>
                                    <th className=" font-normal pl-4 py-2">Uploaded File Name</th>
                                    <th className=" font-normal pl-4 py-2">Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="flex justify-center items-center flex-col ">
                        <div className="px-[200px] py-[90px] flex items-center flex-col">
                            <Image
                                src={clipboardicon}
                                alt="Upload Icon"
                                className="h-6 w-6 inline-block mr-2"
                            />
                            <h2>Currently, there are no records to be submitted.</h2>
                        </div>
                    </div>
                    <div className="border-gray-300 text-right border-t py-3 px-4">
                        <CustomButtons
                            buttonType="border"
                            title="Upload All"
                            onClick={() => handleUploadClick()}
                            fontColor="white"
                            fontSize="12px"
                            paddingX="px-[12px]"
                            paddingY="py-[10px]"
                            borderColor="bg-[#697785]"
                            buttonColor="bg-[#697785]"
                            hoverColor="bg-[#697785]"
                        />
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default RecruitmentTable;
