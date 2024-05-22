"use client";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditorComponent: React.FC<{
  onChange: (_event: any, _editor: any) => void;
  placeholderText: string;
  editorData: string;
}> = ({ onChange, placeholderText = "", editorData = "" }) => {
  const handleReady = (editor: any) => {
    //     editor.plugins.get(
    //         "FileRepository"
    //     ).createUploadAdapter = (loader) => {
    //         return new CustomUploadAdapter(loader);
    //     };
  };

  const handleChange = (event: any) => {
    // const data = editor.getData();
    // console.log('handleChange ck data',data );
  };

  const handleBlur = (event: any, editor: any) => {
    const data = editor.getData();
    console.log("handleBlur ck data", data);
  };

  const handleFocus = (event: any, editor: any) => {
    console.log("Focus.", editor);
  };

  return (
    <div className="border-[1px] border-[#0000001F] bg-[#FFFFFF] rounded-[6px]">
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        config={{
          placeholder: placeholderText,
          toolbar: [
            "heading",
            "|",
            "bold",
            "|",
            "italic",
            "|",
            "underline",
            "|",
            "strikethrough",
            "|",
            "bulletedList",
            "|",
            "numberedList",
            "|",
            "link",
            "|",
            "codeBlock",
            "|",
            "imageUpload",
            "|",
            "video",
            "|",
            "mediaEmbed",
            "|",
            "alignment:left",
            "|",
            "alignment:center",
            "|",
            "alignment:right",
            "|",
            "alignment:justify",
            "|",
            "fontColor",
            "|",
            "fontSize",
            "|",
            "highlight",
          ],
        }}
        onReady={handleReady}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default CKEditorComponent;
