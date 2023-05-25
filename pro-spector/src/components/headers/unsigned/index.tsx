import React, { useContext } from "react";
import { HeaderHome } from "../../../styles/headers";
import { HomeContext } from "../../../contexts/home";

const Header = () => {
  const { ShowLoginForm, ShowRegisterForm } = useContext(HomeContext);

  return (
    <HeaderHome>
      <h1>Pro-Spector</h1>

      <button onClick={ShowRegisterForm}>
        Register
      </button>

      <button onClick={ShowLoginForm}>
        Login
        </button>
    </HeaderHome>
  );
};

export default Header;
