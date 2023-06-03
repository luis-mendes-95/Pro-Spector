import Modal from "../../modal";
import { useContext, useState } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iLogin } from "../../../interfaces/user";
import "react-toastify/dist/ReactToastify.css";
import UserLoginSchema from "../../../schemas/login";
import { HomeContext } from "../../../contexts/home";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { UserContext } from "../../../contexts/user";

const FormLogin = () => {

  const navigate = useNavigate();

  const { ShowLoginForm } = useContext(HomeContext)
  const { setToken, tokenUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({ resolver: yupResolver(UserLoginSchema) });

  const submit = async (data: iLogin) => {
  
    try {
      const response = await api.post('/login', data);

      if (response.status === 200) {
        setToken(response.data.token)
        localStorage.setItem("prospector_user_token", response.data.token)
      }

    } catch (error) {
      console.error("Error making API request:", error);
    }   

    toast.success("Login efetuado com sucesso, você será redirecionado para a Dashboard")

    setTimeout(() => {
      ShowLoginForm()
      navigate("/dashboard")
    }, 5000);

  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
      <h2>LOGIN:</h2>

        <div className="divLabelAndInput">
          <label>E-mail:</label>
          <input
            placeholder="Type here your email"
            {...register("email")}
          />
        </div>
        {errors.email?.message && (
          <p className="pError" aria-label="error">
            {errors.email.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Password:</label>
          <input
            placeholder="Type here your password"
            {...register("password")}
          />
        </div>
        {errors.password?.message && (
          <p className="pError" aria-label="error">
            {errors.password.message}
          </p>
        )}

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Enter
          </button>

          <button onClick={ShowLoginForm} className="buttonCancelReg">
            Close
          </button>
        </div>

      </FormStyle>
    </Modal>
  );
};

export default FormLogin;