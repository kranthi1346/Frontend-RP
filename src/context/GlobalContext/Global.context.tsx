'use client'
import React, { createContext, useContext, ReactNode, useState } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

interface GlobalContextType {
  toastText: string;
  toastType: string;
  showCustomToast: boolean;
  updateShowCustomToast: (
    _toastType: "WARNING" | "ERROR" | "SUCCESS",
    _toastText: string
  ) => void;
  hideToast: () => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [toastText, setToastText] = useState<string>("");
  const [toastType, setToastType] = useState<"WARNING" | "ERROR" | "SUCCESS">(
    "SUCCESS"
  );
  const [showCustomToast, setShowCustomToast] = useState<boolean>(false);

  const hideToast = () => {
    setShowCustomToast(false);
  };
  const updateShowCustomToast = (
    _toastType: "WARNING" | "ERROR" | "SUCCESS",
    _toastText: string
  ) => {
    setShowCustomToast(true);
    setToastType(_toastType);
    setToastText(_toastText);
  };
  return (
    <Provider store={store}>
    <GlobalContext.Provider
      value={{
        toastText,
        toastType,
        updateShowCustomToast,
        showCustomToast,
        hideToast,
      }}
    >
      {children}
    </GlobalContext.Provider>
    </Provider>
  );
};

const useGlobalContext = (): GlobalContextType => {
  const GlobalContextObject = useContext(GlobalContext);
  if (GlobalContextObject === null) {
    throw new Error("useGlobalContext() called outside of a GlobalProvider?");
  }
  return GlobalContextObject;
};

export { GlobalProvider, useGlobalContext };
