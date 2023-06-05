import Modal from "../../modal";
import { useContext } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iRegisterUser } from "../../../interfaces/user";
import "react-toastify/dist/ReactToastify.css";
import UserRegisterSchema from "../../../schemas/register";
import { HomeContext } from "../../../contexts/home";
import api from "../../../services/api"

const FormRegister = () => {

  const { ShowRegisterForm } = useContext(HomeContext);

  const { register, handleSubmit, formState: { errors }} = useForm<iRegisterUser>({ resolver: yupResolver(UserRegisterSchema) });

  const submit = async (data: iRegisterUser) => {
    
    data.admin = true;
  
    try {
      const response = await api.post('/users', data);
      console.log("Response from API:");
      console.log(response.data);
    } catch (error) {
      console.error("Error making API request:", error);
    } finally {
      toast.success("Cadastro efetuado com sucesso")
      ShowRegisterForm()
    }
  
  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>REGISTER:</h2>

        <div className="divLabelAndInput">
          <label>Complete Name:</label>
          <input
            placeholder="Type here your complete name"
            {...register("name")}
          />
        </div>
        {errors.name?.message && (
          <p className="pError" aria-label="error">
            {errors.name.message}
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
          <label>Password:</label>
          <input placeholder="Choose a password" type="password" {...register("password")} />
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
