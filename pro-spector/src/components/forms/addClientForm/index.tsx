import Modal from "../../modal";
import { useContext, useState } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iClient, iClientContact } from "../../../interfaces/client";
import "react-toastify/dist/ReactToastify.css";
import { ClientSchema, ClientContactSchema } from "../../../schemas/client";
import { DashboardContext } from "../../../contexts/dashboard";
import { useNavigate } from "react-router-dom";

const AddClientForm = () => {
  const navigate = useNavigate();

  const {
    ShowAddClientForm,    ShowClientDetailsForm,    showAddClientForm,    showClientDetailsForm,
  } = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iClient>({ resolver: yupResolver(ClientSchema) });

  const submit = (data: iClient) => {
    console.log("This is the data to send request:");
    console.log(data);
  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>ADD NEW CLIENT:</h2>

        <div className="divLabelAndInput">
          <label>Complete Name:</label>
          <input
            placeholder="Type here your username"
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
          <input
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
            Enter
          </button>

          <button onClick={ShowAddClientForm} className="buttonCancelReg">
            Close
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default AddClientForm;
