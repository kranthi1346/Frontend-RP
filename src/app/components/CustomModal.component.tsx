import React, { FC, ReactNode } from "react";
import Modal from "react-modal";

interface CustomModalProps {
  children: ReactNode;
  isOpen: boolean;
}

const CustomModal: FC<CustomModalProps | ReactModal.Props> = ({
  children,
  isOpen = false,
  ...props
}) => {
  return (
    <Modal
      isOpen={isOpen}
      className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      {...props}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
