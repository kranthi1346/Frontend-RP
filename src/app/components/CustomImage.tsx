import { cx } from "@emotion/css";
import { isEmpty } from "lodash";
import React from "react";

export const CustomImage = ({ name = "", ...props }) => {
  const images = {
    backArrow: { src: "path_of_image/svg", alt: "alt_name" },

    //add images and svgs here
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
