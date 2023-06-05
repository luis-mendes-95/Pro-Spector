import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/headers/unsigned";
import Main from "../../components/main";
import LoginForm from "../../components/forms/loginForm";
import RegisterForm from "../../components/forms/registerForm";
import { HomeContext } from "../../contexts/home";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { showLoginForm, showRegisterForm } = useContext(HomeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const validateLogin = async () => {
      try {
        const token = localStorage.getItem("prospector_user_token");
        const response = await api.get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          navigate("/dashboard");
        }
      } catch (error) {
        navigate("/");
      }
    };

    validateLogin();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
      <Main />
      <Footer />
    </div>
  );
};

export default Homepage;
