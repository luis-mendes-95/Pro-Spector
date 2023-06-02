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

const FormLogin = () => {

  const navigate = useNavigate();

  const { ShowLoginForm } = useContext(HomeContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({ resolver: yupResolver(UserLoginSchema) });

  const submit = (data: iLogin) => {
    console.log('This is the data to send request:')
    console.log(data)
    navigate("/dashboard")
  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
      <h2>LOGIN:</h2>

        <div className="divLabelAndInput">
          <label>Username:</label>
          <input
            placeholder="Type here your username"
            {...register("username")}
          />
        </div>
        {errors.username?.message && (
          <p className="pError" aria-label="error">
            {errors.username.message}
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