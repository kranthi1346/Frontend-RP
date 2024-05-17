import { isEmpty } from "lodash";
import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name?: string;
}

interface ImageData {
  [key: string]: { src: string; alt: string };
}

const CustomImage: React.FC<ImageProps> = ({ name = "", ...props }) => {
  const images: ImageData = {
    tickWhiteIcon: {
      src: "icons/svg/tick_white_icon.svg",
      alt: "tick_white_icon",
    },
    crossGrayIcon: {
      src: "icons/svg/cross_gray_icon.svg",
      alt: "cross_gray_icon",
    },
    crossRedIcon: {
      src: "icons/svg/cross_red_icon.svg",
      alt: "cross_red_icon",
    },
    squareAddOrangeIcon: {
      src: "icons/svg/square_add_orange_icon.svg",
      alt: "square_add_orange_icon",
    },
    warningOrangeIcon: {
      src: "icons/svg/warning_orange_icon.svg",
      alt: "warning_orange_icon",
    },
    crossBlackIcon: {
      src: "icons/svg/cross_black_icon.svg",
      alt: "cross_black_icon",
    },
    sucessIcon: {
      src: "icons/svg/sucess_icon.svg",
      alt: "sucess_icon",
    },
    errorIcon: {
      src: "icons/svg/error_icon.svg",
      alt: "error_icon",
    },
    warningWhiteIcon: {
      src: "icons/svg/fluent_warning_icon.svg",
      alt: "fluent_warning_icon",
    },
    arrowDownGrayIcon: {
      src: "icons/svg/arrow_down_gray_icon.svg",
      alt: "arrow_down_gray_icon",
    },
    searchBlueIcon: {
      src: "icons/svg/search_blue_icon.svg",
      alt: "search_blue_icon",
    },
    noRecord: {
      src: "icons/svg/norecord.svg",
      alt: "norecord",
    },
    noResult: {
      src: "icons/svg/noresult.svg",
      alt: "noresult",
    },
    leftArrow: {
      src: "icons/svg/leftarrow.svg",
      alt: "leftarrow",
    },
    rightArrow: {
      src: "icons/svg/rightarrow.svg",
      alt: "rightarrow",
    },
    downArrow:{
      src: "icons/svg/downArrow.svg",
      alt: "downArrow",
    },
    addIcon:{
      src: "icons/svg/Add icon.svg",
      alt: "Add icon",
    },
    orangeAddIcon:{
      src: "icons/svg/add.svg",
      alt: "add",
    },
    iOrangeIcon: {
      src: "icons/svg/i_orange_icon.svg",
      alt: "i_orange_icon",
    },
    lineIcon: {
      src: "icons/svg/line_icon.svg",
      alt: "line_icon",
    },
    uploadCloudIcon: {
      src: "icons/svg/feather_upload-cloud.svg",
      alt: "feather_upload-cloud",
    },

    // Add more images and svgs here
  };

  const imageSrc = name && images[name]?.src ? images[name]?.src : props.src;
  const imageAlt = name && images[name]?.alt ? images[name]?.alt : props.alt;

  return (
    <img
      src={isEmpty(props.src) ? `/images/${imageSrc}` : props.src}
      alt={imageAlt}
      {...props}
    />
  );
};

export default CustomImage;
