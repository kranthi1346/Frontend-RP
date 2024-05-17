import React, {
  ChangeEvent,
  FC,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";

interface CustomInputFieldProps {
  value: any;
  inputHeaderText: string;
  placeholderText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorText: string;
  keyName: string;
  isRequiredField?: boolean;
  onBlur?: () => void;
  inputType?: HTMLInputTypeAttribute;
  maxLength?: number | undefined;
}

const CustomInputField: FC<CustomInputFieldProps> = ({
  inputHeaderText = "",
  placeholderText = "",
  onChange,
  errorText,
  value,
  keyName,
  isRequiredField = true,
  onBlur,
  inputType = "text",
  maxLength,
}) => {
  return (
    <div>
      <div
        className={`w-full pb-[10px]  bg-white rounded-lg top-[15px] shadow-[0_3px_6px_0px_rgba(126,123,160,0.08)] ${errorText.length ? "border-[2px] border-[#FF00000D]" : ""
          }`}
        style={{ background: '#FAFAFF', opacity: 1 }}
      >
        <label className="block text-[12px] ml-[10px] pt-[9px]">
          {inputHeaderText}{" "}
          {isRequiredField && <span className="text-red-500">*</span>}
        </label>
        <input
          name={keyName}
          value={value}
          onChange={onChange}
          type={inputType}
          placeholder={placeholderText}
          className={`h-[30px] w-[92%] text-[16px] ml-[10px] focus:outline-none mb-[2px]`}
          onBlur={onBlur}
          maxLength={maxLength}
          style={{
            background: '#FAFAFF', opacity: 1, textOverflow: "ellipsis",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "initial"
          }}

        />
      </div>
      {errorText.length > 0 && (
        <div className="flex px-[6px] py-[3px] bg-[#FF00000D] rounded-[4px] mt-[4px]">
          <p className="text-FF0000 text-[12px] font-[400]">{errorText}</p>
        </div>
      )}
    </div>
  );
};

export default CustomInputField;
