import { FC, useEffect, useState } from "react";
import CustomImage from "../CustomImage.component";
import dynamic from "next/dynamic";
const CKEditorComponent = dynamic(
  () => import("../editor/CKEditor.component"),
  { ssr: false }
);

const TitleHeader: FC<{
  title: string;
  isRequiredField?: boolean;
  showIIcon?: boolean;
}> = ({ title = "", isRequiredField = true, showIIcon = true }) => {
  return (
    <div className="flex mb-[11px]">
      <p className="text-[#000000] text-[12px] font-[400]">{title}</p>
      {isRequiredField ? (
        <p className="text-[#FF0000] text-[12px] font-[400]">*</p>
      ) : null}
      {showIIcon ? (
        <CustomImage name="iOrangeIcon" className="ml-[3px]" />
      ) : null}
    </div>
  );
};

interface AdditionalDetailComponentProps {
  setComponentState: (componentName: string, state: string) => void;
}

export const AdditionalDetailComponent: FC<AdditionalDetailComponentProps> = ({
  setComponentState,
}) => {
  const [editorValue, setEditorValue] = useState<string>("");
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorValue(data);
  };

  useEffect(() => {
    setComponentState("additionalDetails", editorValue);
  }, [editorValue]);

  return (
    <div className="flex gap-2">
      <div style={{ flex: "3.5", overflow: "auto", maxHeight: "350px", overflowX:'auto' }}>
        <TitleHeader
          title="Additional Details"
          isRequiredField={false}
          showIIcon={false}
        />
        <CKEditorComponent
          editorData={editorValue}
          placeholderText="Add a job additional details"
          onChange={handleEditorChange}
        />
      </div>
      <div style={{ flex: "0.1" }} className="flex self-end">
        <div className=""></div>
      </div>
      <div style={{ flex: "3.5" }}></div>
    </div>
  );
};
