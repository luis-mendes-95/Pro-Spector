import React, { createContext, useState } from "react";
import {
  iUserProviderProps,
  iLogin,
  iUserProviderFunctions,
} from "../interfaces/user";

export const UserContext = createContext<iUserProviderFunctions>(
  {} as iUserProviderFunctions
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  const register_user = (data: iLogin) => {
    console.log("login for: ");
    console.log(data);
  };

  const login = (data: iLogin) => {
    console.log("login for: ");
    console.log(data);
  };

  const logout = () => {
    console.log("Logout");
  };

  return (
    <UserContext.Provider
      value={{
        login,
        register_user,
        logout,
        authenticated,
      }}
    ></UserContext.Provider>
  );
};
