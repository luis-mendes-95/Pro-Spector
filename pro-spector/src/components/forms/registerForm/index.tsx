import Modal from "../../modal";
import { useContext, useState } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iRegisterUser } from "../../../interfaces/user";
import "react-toastify/dist/ReactToastify.css";
import UserRegisterSchema from "../../../schemas/register";
import { HomeContext } from "../../../contexts/home";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {

  const navigate = useNavigate();

  const { ShowRegisterForm } = useContext(HomeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({ resolver: yupResolver(UserRegisterSchema) });

  const submit = (data: iRegisterUser) => {
    console.log("This is the data to send request:");
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>REGISTER:</h2>

        <div className="divLabelAndInput">
          <label>Complete Name:</label>
          <input
            placeholder="Type here your complete name"
            {...register("completeName")}
          />
        </div>
        {errors.completeName?.message && (
          <p className="pError" aria-label="error">
            {errors.completeName.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>E-mail:</label>
          <input placeholder="Type here your e-mail" {...register("email")} />
        </div>
        {errors.email?.message && (
          <p className="pError" aria-label="error">
            {errors.email.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Phone:</label>
          <input placeholder="Type here your phone" {...register("phone")} />
        </div>
        {errors.phone?.message && (
          <p className="pError" aria-label="error">
            {errors.phone.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Password:</label>
          <input placeholder="Choose a password" {...register("password")} />
        </div>
        {errors.password?.message && (
          <p className="pError" aria-label="error">
            {errors.password.message}
          </p>
        )}

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Register
          </button>

          <button onClick={ShowRegisterForm} className="buttonCancelReg">
            Close
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default FormRegister;
