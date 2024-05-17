"use client";
import React, { ChangeEvent, FC, useRef } from "react";
import { isNotNullAndUndefined } from "@/utils/common/helper";
import CustomImage from "./CustomImage.component";
import CustomButtons from "./CustomButtons.component";

interface UploadResumeComponentProps {
  onDrop: (_e: React.DragEvent<HTMLDivElement>) => void;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  defaultError?: string;
  selectFileClick?: () => void;
}

const UploadResumeComponent: FC<UploadResumeComponentProps> = ({
  onDrop,
  onChange,
  selectFileClick,
  defaultError = "",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      style={{
        borderColor: defaultError?.length > 0 ? "#FF00000D" : "#CBD5E0",
        borderWidth: defaultError?.length > 0 ? "2px" : "1px",
      }}
      className={`flex bg-white rounded-lg border  px-[12px] py-[13px] border-dashed`}
    >
      <div className="">
        <CustomImage name="uploadCloudIcon" />
      </div>
      <div
        onDragEnter={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="flex items-center justify-between flex-[1] ml-2"
      >
        <div className="pr-8">
          <p className="text-base text-black font-[400] mb-1">
            Select a file or drag and drop here
          </p>
          <p className="text-sm text-[#ADADAD]">
            DOC, DOCX and PDF, file size no more than 10MB
          </p>
        </div>
        <CustomButtons
          buttonType="border"
          title="Select File"
          onClick={() => {
            if (isNotNullAndUndefined(selectFileClick)) {
              selectFileClick();
            }
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}
          fontColor="white"
          fontSize="12px"
          paddingX="px-[12px]"
          paddingY="py-[10px]"
          borderColor="bg-[#2578C3]"
          buttonColor="bg-[#2578C3]"
          hoverColor="bg-[#2578C3]"
        />
        <input
          name="file"
          id="file-upload"
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".doc,.pdf,.docx"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default UploadResumeComponent;
