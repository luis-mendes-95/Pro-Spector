import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iDashboardProviderFunctions {
  showDashboardHome: boolean;
  showContactsDashboard: boolean;
  showAddClientForm: boolean;
  showAddClientContactForm: boolean;
  showClientDetailsForm: boolean;
  showEditClientContactForm: boolean;
  showAddConversionForm: boolean;
  showEditConversionForm: boolean;
  logout: () => void;
  ShowDashboardHome: () => void;
  ShowContactsDashboard: () => void;
  ShowAddClientForm: () => void;
  ShowAddClientContactForm: () => void;
  ShowClientDetailsForm: () => void;
  ShowEditClientContactForm: () => void;
  ShowAddConversionForm: () => void;
  ShowEditConversionForm: () => void;
}

interface iDashboardProviderProps {
  children: React.ReactNode;
}

export const DashboardContext = createContext<iDashboardProviderFunctions>(
  {} as iDashboardProviderFunctions
);

export const DashboardProvider = ({ children }: iDashboardProviderProps) => {
    
  const [showDashboardHome, setShowDashboardHome] = useState(true);
  const [showContactsDashboard, setShowContactsDashboard] = useState(false);
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showClientDetailsForm, setShowClientDetailsForm] = useState(false);
  const [showAddClientContactForm, setShowAddClientContactForm] = useState(false);
  const [showEditClientContactForm, setShowEditClientContactForm] = useState(false);
  const [showAddConversionForm, setShowAddConversionForm] = useState(false);
  const [showEditConversionForm, setShowEditConversionForm] = useState(false);

  const navigate = useNavigate();

  const ShowDashboardHome = (): void => {
    setShowContactsDashboard(false)
    setShowDashboardHome(true)
  };

  const ShowContactsDashboard = (): void => {
    setShowDashboardHome(false)
    setShowContactsDashboard(true)
  };

  const logout = (): void => {
    localStorage.setItem("prospector_user_token", "")
    navigate("/")
  }

  const ShowAddClientForm = (): void => {
    setShowAddClientForm(!showAddClientForm)
  };

  const ShowClientDetailsForm = (): void => {
    setShowClientDetailsForm(!showClientDetailsForm)
  };
  
  const ShowAddClientContactForm = (): void => {
    setShowAddClientContactForm(!showAddClientContactForm)
  };

  const ShowEditClientContactForm = (): void => {
    setShowEditClientContactForm(!showEditClientContactForm)
  };

  const ShowAddConversionForm = (): void => {
    setShowAddConversionForm(!showAddConversionForm)
  };

  const ShowEditConversionForm = (): void => {
    setShowEditConversionForm(!showEditConversionForm)
  };

  

  return (
    <DashboardContext.Provider
      value={{
        showDashboardHome,
        showContactsDashboard,
        showAddClientForm,
        showClientDetailsForm,
        showAddClientContactForm,
        showEditClientContactForm,
        showAddConversionForm,
        showEditConversionForm,
        ShowDashboardHome,
        ShowContactsDashboard,
        ShowAddClientForm,
        ShowClientDetailsForm,
        ShowAddClientContactForm,
        ShowEditClientContactForm,
        ShowAddConversionForm,
        ShowEditConversionForm,
        logout,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
