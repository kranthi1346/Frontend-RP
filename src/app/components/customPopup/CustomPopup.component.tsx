import React, { FC, ReactNode } from "react";
import CustomImage from "../CustomImage.component";
import CustomButtons from "../CustomButtons.component";
import { isNotNullAndUndefined } from "@/utils/common/helper";
import CustomModal from "../CustomModal.component";
type PopUpType = "POPUP" | "INPUT_POPUP";

interface CustomPopupProps {
  popUpType: PopUpType;
  titleText: string;
  subTitleText?: string;
  showPopUp: boolean;
  positiveActionBtnText?: string;
  negativeActionBtnText?: string;
  updateShowPopUp: () => void;
  positiveAction?: () => void;
  negativeAction?: () => void;
}

const CustomPopup: FC<CustomPopupProps> = ({
  popUpType = "POPUP",
  titleText = "Title",
  subTitleText = "Sub title",
  positiveActionBtnText = "Yes",
  negativeActionBtnText = "No",
  showPopUp = false,
  updateShowPopUp,
  positiveAction,
  negativeAction,
}) => {
  switch (popUpType) {
    case "POPUP":
      return (
        <CustomModal isOpen={showPopUp}>
          <div className="flex items-center justify-center rounded-[20px]  mx-auto w-1/3 h-1/2 my-20">
            <div className="relative bg-gray-50 flex flex-col items-center rounded-[20px] px-10 py-8 shadow-lg w-auto ">
              <div className="absolute right-6 top-6 w-5 h-5 flex  items-center justify-center bg-white border border-[#B0B0B0] rounded-full mb-4 ">
                <CustomImage
                  name="crossGrayIcon"
                  className="cursor-pointer"
                  onClick={() => {
                    if (isNotNullAndUndefined(updateShowPopUp)) {
                      updateShowPopUp();
                    }
                  }}
                />
              </div>
              <div className="w-24 h-24 bg-[#2578C3] rounded-full flex items-center justify-center mb-4 ">
                <CustomImage name="warningWhiteIcon" />
              </div>
              <div className="text-center mb-3">
                <p className="text-[24px] font-bold">{titleText}</p>
              </div>
              <div className="text-center mb-3">
                <p className="text-[16px] font-normal">{subTitleText}</p>
              </div>
              <div className="flex flex-row gap-6">
                <CustomButtons
                  buttonType="gradient"
                  title={negativeActionBtnText}
                  onClick={() => {
                    if (isNotNullAndUndefined(negativeAction)) {
                      negativeAction();
                    }
                  }}
                  paddingX="px-[30px]"
                  fontColor="white"
                  paddingY="py-[13px]"
                  gradientColor="bg-[#ADADAD]"
                  buttonColor="bg-[#ADADAD]"
                  hoverColor="bg-[#ADADAD]"
                />
                <CustomButtons
                  buttonType="border"
                  title={positiveActionBtnText}
                  onClick={() => {
                    if (isNotNullAndUndefined(positiveAction)) {
                      positiveAction();
                    }
                  }}
                  fontColor="white"
                  fontSize="12px"
                  paddingX="px-[30px]"
                  paddingY="py-[13px]"
                  borderColor="bg-[#2578C3]"
                  buttonColor="bg-[#2578C3]"
                  hoverColor="bg-[#2578C3]"
                />
              </div>
            </div>
          </div>
        </CustomModal>
      );

    case "INPUT_POPUP":
      return (
        <div className="flex items-center justify-center rounded-[20px] mx-auto w-1/2 h-1/2 my-20 ">
          <div className="relative bg-gray-50 flex flex-col items-center rounded-[20px] px-10 py-8 shadow-lg w-auto ">
            <div className="absolute right-6 top-6 w-5 h-5 flex  items-center justify-center bg-white border border-[#B0B0B0] rounded-full mb-4 ">
              <CustomImage
                name="crossGrayIcon"
                className="cursor-pointer"
                onClick={() => {
                  if (isNotNullAndUndefined(updateShowPopUp)) {
                    updateShowPopUp();
                  }
                }}
              />
            </div>
            <div className="w-24 h-24 bg-[#2578C3] rounded-full flex items-center justify-center mb-4 ">
              <CustomImage name="warningWhiteIcon" />
            </div>
            <div className="text-center mb-3">
              <p className="text-[24px] font-bold">
                Refreshing or leaving the page will lead to data loss.
              </p>
              <p className="text-[24px] font-bold"> Do you want to proceed?</p>
            </div>
            <div className="text-center mb-3">
              <p className="text-[16px] font-normal">
                Changes you made will not be saved.
              </p>
            </div>
            <div className="flex flex-row gap-6">
              <CustomButtons
                buttonType="gradient"
                title={negativeActionBtnText}
                onClick={() => {
                  if (isNotNullAndUndefined(negativeAction)) {
                    negativeAction();
                  }
                }}
                paddingX="px-[30px]"
                fontColor="white"
                paddingY="py-[13px]"
                gradientColor="bg-[#ADADAD]"
                buttonColor="bg-[#ADADAD]"
                hoverColor="bg-[#ADADAD]"
              />
              <CustomButtons
                buttonType="border"
                title={positiveActionBtnText}
                onClick={() => {
                  if (isNotNullAndUndefined(positiveAction)) {
                    positiveAction();
                  }
                }}
                fontColor="white"
                fontSize="12px"
                paddingX="px-[30px]"
                paddingY="py-[13px]"
                borderColor="bg-[#2578C3]"
                buttonColor="bg-[#2578C3]"
                hoverColor="bg-[#2578C3]"
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default CustomPopup;
