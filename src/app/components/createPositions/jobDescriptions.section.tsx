import React, { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const CKEditorComponent = dynamic(() => import("../editor/CKEditor.component"), { ssr: false });
import UploadResumeComponent from "../UploadResume.component";
import mammoth from "mammoth";

interface JobDescriptionComponentProps {
    setComponentState: (componentName: string, state: string) => void;
}

export const JobDescriptionComponent: FC<JobDescriptionComponentProps> = ({ setComponentState }) => {

    const [editorValue, setEditorValue] = useState<string>("");

    const handleEditorChange = (event: any, editor: any) => {
        const data = editor.getData();
        setEditorValue(data);
    };
    const handleFileChangeAndDrop = async (file: File) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            if (e.target?.result) {
                let result: ArrayBuffer;
                if (typeof e.target.result === "string") {
                    result = await fetch(e.target.result).then((res) => res.arrayBuffer());
                } else {
                    result = e.target.result as ArrayBuffer;
                }
                // Convert DOCX to HTML using mammoth library
                const { value } = await mammoth.convertToHtml({ arrayBuffer: result });
                // Set CKEditor content with the converted HTML
                setEditorValue(value);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            handleFileChangeAndDrop(file);
        }
    };

    const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files[0];
        if (file) {
            handleFileChangeAndDrop(file);
        }
    };

    useEffect(() => {
        setComponentState('addJobDescription', editorValue);
    }, [editorValue]);

    return (
        <div className="flex gap-2">
            <div style={{ flex: "3.5", overflow: "auto", maxHeight: "350px", overflowX: 'auto' }}>
                <CKEditorComponent
                    editorData={editorValue} // Pass editor content
                    placeholderText=""
                    onChange={handleEditorChange}
                />
            </div>
            <div style={{ flex: "0.1" }} className="flex self-end">
                <div className="">
                    <div className="bg-[#D4D4D4] w-[2px] h-[35px]  ml-[50%]" />
                    <p className="p-0 m-0 text-[#000000] text-[12px] font-[400]">or</p>
                    <div className="bg-[#D4D4D4] w-[2px] h-[35px]  ml-[50%]" />
                </div>
            </div>
            <div style={{ flex: "3.5" }}>
                <UploadResumeComponent
                    onChange={handleFileChange} // Handle file input change
                    onDrop={handleFileDrop} // Handle file drop
                    defaultError={""}
                />
            </div>
        </div>
    );
};
