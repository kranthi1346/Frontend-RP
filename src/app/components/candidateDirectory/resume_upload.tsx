"use client";
import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import uploadicon from "../../../../public/images/icons/svg/feather_upload-cloud.svg";
import CustomButtons from "../CustomButtons.component";
import doclogo from "../../../../public/images/icons/svg/ph_file-doc-light.svg";
import pdflogo from "../../../../public/images/icons/svg/pdf.svg";

import cancelbutton from "../../../../public/images/icons/svg/charm_circle-cross.svg";
import RecruitmentTable from "./RecruitmentTable";
import CustomInputField from "../CustomInputField.component";
import {
  validateEmail,
  validateMobileNumber,
  validateName,
} from "@/utils/common/Validations.utils";
import { isEmpty } from "lodash";
import { useGlobalContext } from "@/context/GlobalContext/Global.context";
import { isNotNullAndUndefined } from "@/utils/common/helper";
import UploadResumeComponent from "../UploadResume.component";

interface ResumeUploadProps {}

interface CandidateFormDataError {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  file: string;
}
interface CandidateFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  file: File | null;
  timestamp: string;
}

const ResumeUpload: FC<ResumeUploadProps> = () => {
  const { updateShowCustomToast } = useGlobalContext();

  const [uploadedFileName, setUploadedFileName] = useState("");
  const [candidateFormData, setCandidateFormData] = useState<CandidateFormData>(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: null,
      timestamp: "",
    }
  );
  const [records, setRecords] = useState<CandidateFormData[]>([]);

  const [candidateFormDataError, setCandidateFormDataError] =
    useState<CandidateFormDataError>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: "",
    });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    const fileSize = isNotNullAndUndefined(event.target.files?.[0]?.size)
      ? event.target.files?.[0]?.size
      : 0;

    const fileSizeInKB = fileSize / 1024;

    const maxFileSizeKB = 1024 * 9.9;

    if (fileSizeInKB > maxFileSizeKB) {
      updateShowCustomToast(
        "WARNING",
        "File size exceeds the maximum allowed size."
      );
    } else {
      if (name === "file") {
        const file = event.target.files?.[0] || null;
        setCandidateFormData((prevData) => ({
          ...prevData,
          file: file,
        }));
        setUploadedFileName(file ? file.name : "");
        event.target.value = "";
      } else {
        setCandidateFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
    setCandidateFormDataError((prevData) => ({
      ...prevData,
      [name]: "",
    }));
  };
  const handleOnBlureChange = (inputType: string) => {
    // alert(inputType);
    if (inputType === "email") {
      const newErrors = {
        email: "",
      };
      if (candidateFormData?.email.trim() === "") {
        newErrors.email = "Email required";
      } else if (!validateEmail(candidateFormData?.email)) {
        newErrors.email = "incorrect email";
      }
      setCandidateFormDataError({
        ...candidateFormDataError,
        ...newErrors,
      });
    }
    if (inputType === "first_name") {
      const newErrors = {
        firstName: "",
      };
      if (candidateFormData?.firstName.trim() === "") {
        newErrors.firstName = "First name required";
      } else if (!validateName(candidateFormData?.firstName)) {
        newErrors.firstName = "no special characters or numbers";
      }
      setCandidateFormDataError({
        ...candidateFormDataError,
        ...newErrors,
      });
    }
    if (inputType === "last_name") {
      const newErrors = {
        lastName: "",
      };
      if (candidateFormData?.lastName.trim() === "") {
        newErrors.lastName = "Last name required";
      } else if (!validateName(candidateFormData?.lastName)) {
        newErrors.lastName = "No special characters or numbers";
      }
      setCandidateFormDataError({
        ...candidateFormDataError,
        ...newErrors,
      });
    }
    if (inputType === "phone_number") {
      const newErrors = {
        phone: "",
      };
      //   const numericRegex = /^(?!0+$)[1-9][0-9]{9,14}$/;
      //   if (numericRegex.test(candidateFormData?.phone)) {
      //   }
      if (candidateFormData?.phone.trim() === "") {
        newErrors.phone = "Phone number required";
      } else if (!validateMobileNumber(candidateFormData?.phone)) {
        newErrors.phone = "invalid number";
      }
      setCandidateFormDataError({
        ...candidateFormDataError,
        ...newErrors,
      });
    }
  };

  const isDuplicate = (
    email: string,
    phone: string,
    file: any,
    recordsCopy: CandidateFormData[]
  ): boolean => {
    return recordsCopy.some(
      (entry) =>
        entry.email === email ||
        entry.phone === phone ||
        entry.file?.name === file.name
    );
  };

  const validateForm = () => {
    let isValid = true;

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: "",
    };

    if (candidateFormData?.email.trim() === "") {
      newErrors.email = "Email required";
      isValid = false;
    } else if (!validateEmail(candidateFormData?.email)) {
      newErrors.email = "Incorrect email";
      isValid = false;
    }

    if (candidateFormData?.firstName.trim() === "") {
      newErrors.firstName = "First name required";
      isValid = false;
    } else if (!validateName(candidateFormData?.firstName)) {
      newErrors.firstName = "no special characters or numbers";
      isValid = false;
    }

    if (candidateFormData?.lastName.trim() === "") {
      newErrors.lastName = "Last name required";
      isValid = false;
    } else if (!validateName(candidateFormData?.lastName)) {
      newErrors.lastName = "No special characters or numbers";
      isValid = false;
    }

    if (candidateFormData?.phone.trim() === "") {
      newErrors.phone = "Phone number required";
      isValid = false;
    } else if (!validateMobileNumber(candidateFormData?.phone)) {
      newErrors.phone = "invalid number";
      isValid = false;
    }

    if (isEmpty(candidateFormData.file?.name)) {
      newErrors.file = "File required";
      isValid = false;
    }

    setCandidateFormDataError(newErrors);
    return isValid;
  };

  const handleAddClick = () => {
    if (validateForm()) {
      const { email, phone, file } = candidateFormData;
      const recordsCopy = [...records];
      if (isDuplicate(email, phone, file, recordsCopy)) {
        alert("Email or phone number or file already exist!");
      } else {
        const timeAdded = new Date().toLocaleString(); // Get the current timestamp
        const newRecord = { ...candidateFormData, timestamp: timeAdded }; // Add timestamp to the new record
        updateShowCustomToast("SUCCESS", "Records added successfully");
        setRecords((prevRecords) => [...prevRecords, newRecord]);
        handleCancelClick();
      }
    } else {
      //   alert("All fields are required.");
    }
  };

  const handleCancelClick = () => {
    setCandidateFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: null,
      timestamp: "",
    });
    setCandidateFormDataError({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: "",
    });
    setUploadedFileName("");
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const iconhandle = (fileName: string) => {
    return fileName.toLowerCase().endsWith(".doc") ||
      fileName.toLowerCase().endsWith(".docx")
      ? doclogo
      : pdflogo;
  };

  const handleClick = () => {
    setCandidateFormDataError({
      ...candidateFormDataError,
      file: "",
    });
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const uploadedFileName = files[0].name;
      setUploadedFileName(uploadedFileName);
      setCandidateFormData((prevData) => ({
        ...prevData,
        file: files[0],
      }));
    }
  };

  const handleCancelSelectFile = () => {
    setCandidateFormData((prevData) => ({
      ...prevData,
      file: null,
    }));
    setUploadedFileName("");
  };

  return (
    <div>
      <h2 className="font-bold font-lato text-[24px] pb-[5px] my-[18px]">
        Upload Resume
      </h2>
      <div className=" bg-gray-100 rounded-3xl h-[80vh]">
        <div className=" px-8 pt-4">
          <div className="flex bg-gray-100 rounded-xl gap-[28px] justify-between">
            {/* First column */}
            <CustomInputField
              keyName="firstName"
              inputHeaderText="First Name"
              placeholderText="Enter first name"
              errorText={candidateFormDataError.firstName}
              value={candidateFormData.firstName}
              onChange={handleChange}
              onBlur={() => handleOnBlureChange("first_name")}
            />

            {/* Second column */}
            <CustomInputField
              keyName="lastName"
              inputHeaderText="Last Name"
              placeholderText="Enter last name"
              errorText={candidateFormDataError.lastName}
              value={candidateFormData.lastName}
              onChange={handleChange}
              onBlur={() => handleOnBlureChange("last_name")}
            />

            {/* Third column */}
            <CustomInputField
              keyName="email"
              inputHeaderText="Email ID"
              placeholderText="Enter email id"
              errorText={candidateFormDataError.email}
              value={candidateFormData.email}
              onChange={handleChange}
              onBlur={() => handleOnBlureChange("email")}
            />

            {/* Forth column */}
            <CustomInputField
              keyName="phone"
              inputHeaderText="Mobile Number"
              placeholderText="Enter mobile number"
              errorText={candidateFormDataError.phone}
              value={candidateFormData.phone}
              onChange={(event) => {
                const value = event.target.value;
                const numericRegex = /^\+?\d*$/;
                if (numericRegex.test(value)) {
                  handleChange(event);
                }
              }}
              onBlur={() => handleOnBlureChange("phone_number")}
              maxLength={10}
            />
          </div>
          <div className=" ">
            <label className="block  font-[500] text-[12px] mt-[16px] mb-[8px]">
              Upload Resume <span className="text-red-500">*</span>
            </label>
            <div className="flex justify-between items-center h-[60px] ">
              <div className="flex items-center">
                {/* <div
                  style={{
                    borderColor:
                      candidateFormDataError?.file.length > 0
                        ? "#FF00000D"
                        : "#CBD5E0",
                    borderWidth:
                      candidateFormDataError?.file.length > 0 ? "2px" : "1px",
                  }}
                  className={`flex items-center bg-white rounded-lg border overflow-hidden px-[12px] py-[13px] border-dashed`}
                >
                  <div className="">
                    <Image
                      src={uploadicon}
                      alt="Upload Icon"
                      className="w-[48px]"
                    />
                  </div>
                  <div className="flex ml-2 items-center h-[48px]">
                    <div
                      className={`flex ${
                        uploadedFileName ? "border-white" : ""
                      }`}
                      onDragEnter={(e) => e.preventDefault()}
                      onDragOver={(e) => e.preventDefault()}
                      onDragLeave={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                    >
                      <div className="pr-8">
                        <p className="text-base text-black font-[400] mb-1">
                          Select a file or drag and drop here
                        </p>
                        <p className="text-sm text-[#ADADAD]">
                          DOC, DOCX and PDF, file size no more than 10MB
                        </p>
                      </div>
                      <div>
                        <CustomButtons
                          buttonType="border"
                          title="Select File"
                          onClick={handleClick}
                          fontColor="text-white"
                          fontSize="12px"
                          paddingX="px-[12px]"
                          paddingY="py-[10px]"
                          borderColor="bg-[#2578C3]"
                          buttonColor="bg-[#2578C3]"
                          hoverColor="bg-[#2578C3]"
                        />
                      </div>
                      <input
                        name="file"
                        id="file-upload"
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept=".doc,.pdf,.docx"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div> */}
                <UploadResumeComponent
                  onChange={handleChange}
                  onDrop={handleDrop}
                  selectFileClick={handleClick}
                  defaultError={candidateFormDataError?.file}
                />
                <div className="pl-2">
                  {uploadedFileName && (
                    <div className=" bg-[#EDF4FB] border rounded-md p-1 border-[#CFE1F3] flex items-center space-x-2">
                      <div>
                        <Image
                          src={iconhandle(uploadedFileName)}
                          alt="Upload Icon"
                          className=""
                        />
                      </div>
                      <div>
                        <span
                          className="truncate max-w-[270px] block text-base"
                          id="uploaded-file-name"
                        >
                          {uploadedFileName}
                        </span>
                      </div>
                      <Image
                        src={cancelbutton}
                        alt="Upload Icon"
                        className="cursor-pointer"
                        onClick={handleCancelSelectFile}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-1">
                <CustomButtons
                  buttonType="gradient"
                  title="Clear"
                  onClick={() => handleCancelClick()}
                  paddingX="px-[12px]"
                  fontColor="text-white"
                  paddingY="py-[10px]"
                  gradientColor="bg-[#ADADAD]"
                  buttonColor="bg-[#ADADAD]"
                  hoverColor="bg-[#ADADAD]"
                />
                <CustomButtons
                  buttonType="border"
                  title="Add"
                  onClick={() => handleAddClick()}
                  paddingX="px-[15px]"
                  paddingY="py-[10px]"
                  fontColor="text-white"
                  borderColor="bg-[#2578C3]"
                  buttonColor="bg-[#2578C3]"
                  hoverColor="bg-[#2578C3]"
                />
              </div>
            </div>
          </div>
        </div>

        <RecruitmentTable records={records} setRecords={setRecords} />
      </div>
    </div>
  );
};

export default ResumeUpload;
