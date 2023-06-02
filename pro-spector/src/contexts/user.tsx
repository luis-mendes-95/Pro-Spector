import React, { createContext, useState, useEffect } from "react";
import { iRegisterUser, iLogin } from "../interfaces/user";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iUserProviderFunctions {
  login: (data: iLogin) => void;
  register: (data: iRegisterUser) => void;
  tokenUser: string;
  setToken: (str: string) => void;
}

interface iUserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<iUserProviderFunctions>(
  {} as iUserProviderFunctions
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [UserDatabase, setUserDatabase] = useState([] as iRegisterUser[]);
  const [tokenUser, setTokenUser] = useState("");

  const setToken = (str: string) => {
    setTokenUser("");
  };

  const register = (data: iRegisterUser) => {
    const newUser = {
      completeName: data.completeName,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };

    //REQUISIÇÃO DE POST DE USUÁRIO STAFF NA API
    toast.success("USUÁRIO CADASTRADO");
    return console.log("retorno da requisição");
  };

  const login = (data: iLogin) => {
    const loginData = {
      username: data.username,
      password: data.password,
    };

    //REQUISIÇÃO POST DE LOGIN NA API

    setTokenUser("resultado do login");

    //ENCAMINHA PARA A HOME LOGADA
  };

  return (
    <UserContext.Provider
      value={{
        tokenUser,
        login,
        register,
        setToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
