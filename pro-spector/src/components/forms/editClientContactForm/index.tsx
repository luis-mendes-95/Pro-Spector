import Modal from "../../modal";
import { useContext } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iClientContact } from "../../../interfaces/client";
import "react-toastify/dist/ReactToastify.css";
import { ClientContactSchema } from "../../../schemas/client";
import { DashboardContext } from "../../../contexts/dashboard";
import { useNavigate } from "react-router-dom";

const EditClientContactForm = () => {

  const { ShowEditClientContactForm, currentClientId } = useContext(DashboardContext);

  const { register, handleSubmit, formState: { errors }, } = 
  useForm<iClientContact>({ resolver: yupResolver(ClientContactSchema) });

  const submit = (data: iClientContact) => {
    console.log("This is the data to send request:");
    console.log(data);
  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>EDIT CONTACT:</h2>

        <div className="divLabelAndInput">
          <label>Complete Name:</label>
          <input
            defaultValue="Gertrudes de Almeida Cruzes"
            placeholder="Type here your username"
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
          <input
            defaultValue="Gertrudes@gmail.com"
            placeholder="Type here your password"
            {...register("email")}
          />
        </div>
        {errors.email?.message && (
          <p className="pError" aria-label="error">
            {errors.email.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Phone:</label>
          <input
            defaultValue="+55 342 686 998"
            placeholder="Type here your password"
            {...register("phone")}
          />
        </div>
        {errors.phone?.message && (
          <p className="pError" aria-label="error">
            {errors.phone.message}
          </p>
        )}

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Save
          </button>

          <button
            onClick={()=>{
              ShowEditClientContactForm(currentClientId)
            }}
            className="buttonCancelReg"
          >
            Close
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default EditClientContactForm;
