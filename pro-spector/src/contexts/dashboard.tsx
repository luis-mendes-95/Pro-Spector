import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { iClient, iClientContact } from "../interfaces/client";
import { iConversion } from "../interfaces/conversion";

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
  ShowClientDetailsForm: (id: number) => void;
  ShowEditClientContactForm: (id: number) => void;
  ShowAddConversionForm: () => void;
  ShowEditConversionForm: (id: number) => void;
  SetClientId: (id: number) => void;
  SetContactId: (id: number) => void;
  SetConversionId: (id: number) => void;
  currentClient: any,
  currentClientId: number,
  currentContactId: number,
  currentConversionId: number,
  currentConversion: any;
  currentContact: any;
  setClientsByRequest: (data: any) => void;
  setContactsByRequest: (data: any) => void;
  setConversionsByRequest: (data: any) => void;
  clients: any,
  conversions: any,
  contacts: any
  SetClient: (data: any) => void;
  SetConversion: (data: any) => void;
  SetContact: (data: any) => void;
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
  const [currentClient, setCurrentClient] = useState<iClient>();
  const [currentClientId, setCurrentClientId] = useState<number>(0);
  const [currentContactId, setCurrentContactId] = useState<number>(0);
  const [currentContact, setCurrentContact] = useState<iClientContact>();
  const [currentConversion, setCurrentConversion] = useState<iConversion>();
  const [currentConversionId, setCurrentConversionId] = useState<number>(0);
  const [clients, setClients] = useState<iClient[]>([])
  const [conversions, setConversions] = useState<iConversion[]>([])
  const [contacts, setContacts] = useState<iClientContact[]>([])

  const navigate = useNavigate();

  const setClientsByRequest = (data: iClient[]) => {
    setClients(data)
  }

  const setConversionsByRequest = (data: iConversion[]) => {
    setConversions(data)
  }

  const setContactsByRequest = (data: iClientContact[]) => {
    setContacts(data)
  }

  const ShowDashboardHome = (): void => {
    setShowContactsDashboard(false);
    setShowDashboardHome(true);
  };

  const ShowContactsDashboard = (): void => {
    setShowDashboardHome(false);
    setShowContactsDashboard(true);
  };

  const logout = (): void => {
    localStorage.setItem("prospector_user_token", "");
    navigate("/");
  };

  const ShowAddClientForm = (): void => {
    setShowAddClientForm(!showAddClientForm);
  };

  const ShowClientDetailsForm = (): void => {
    setShowClientDetailsForm(!showClientDetailsForm);
  };

  const ShowAddClientContactForm = (): void => {
    setShowAddClientContactForm(!showAddClientContactForm);
  };

  const ShowEditClientContactForm = (): void => {
    setShowEditClientContactForm(!showEditClientContactForm);
  };

  const ShowAddConversionForm = (): void => {
    setShowAddConversionForm(!showAddConversionForm);
  };

  const ShowEditConversionForm = (id: number): void => {
    setCurrentConversionId(id)
    setShowEditConversionForm(!showEditConversionForm);
  };

  const SetClientId = (id: number) => {
    setCurrentClientId(id);
  };

  const SetClient = (data: iClient) => {
    setCurrentClient(data);
  };

  const SetConversion = (data: iConversion) => {
    setCurrentConversion(data);
  };
  
  const SetContact = (data: iClientContact) => {
    setCurrentContact(data);
  };

  const SetContactId = (id: number) => {
    setCurrentContactId(id);
  };

  const SetConversionId = (id: number) => {
    setCurrentConversionId(id);
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
        currentClient,
        currentClientId,
        currentContactId,
        currentConversionId,
        SetClientId,
        SetContactId,
        SetConversionId,
        setClientsByRequest,
        setContactsByRequest,
        setConversionsByRequest,
        clients,
        contacts, 
        conversions,
        SetClient,
        SetConversion,
        currentConversion,
        SetContact,
        currentContact
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
