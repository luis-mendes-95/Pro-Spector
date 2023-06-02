import { useContext, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/headers/unsigned";
import Main from "../../components/main";
import LoginForm from "../../components/forms/loginForm";
import RegisterForm from "../../components/forms/registerForm";
import { HomeContext } from "../../contexts/home";

const Homepage = () => {

  const {showLoginForm, showRegisterForm} = useContext(HomeContext)
  console.log(showLoginForm, showRegisterForm)
  return (
    <div style={{height: "100vh", display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
      <Header />
      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
      <Main />
      <Footer />
    </div>
  );
};

export default Homepage;
