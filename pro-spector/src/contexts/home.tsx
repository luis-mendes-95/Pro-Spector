import React, { createContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

interface iHomeProviderFunctions {
  showRegisterForm: boolean;
  showLoginForm: boolean;
  ShowRegisterForm: () => void;
  ShowLoginForm: () => void;
}

interface iHomeProviderProps {
  children: React.ReactNode;
}

export const HomeContext = createContext<iHomeProviderFunctions>(
  {} as iHomeProviderFunctions
);

export const HomeProvider = ({ children }: iHomeProviderProps) => {
    
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const ShowRegisterForm = (): void => {
    setShowRegisterForm(!showRegisterForm);
  };

  const ShowLoginForm = (): void => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <HomeContext.Provider
      value={{
        showLoginForm,
        showRegisterForm,
        ShowRegisterForm,
        ShowLoginForm,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
