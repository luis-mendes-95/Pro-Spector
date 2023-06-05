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
import api from "../../../services/api";

const AddClientContactForm = () => {

  const navigate = useNavigate();

  const {
    ShowAddClientForm,    ShowClientDetailsForm,    showAddClientForm,    showClientDetailsForm,
    ShowAddClientContactForm, showAddClientContactForm,
     currentClientId
  } = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iClientContact>({ resolver: yupResolver(ClientContactSchema) });

  const submit = async (data: iClientContact) => {

    data.clientId = currentClientId

    let dataString = new Date().toLocaleDateString('en-US').replace(/\//g, '-');

    data.createdAt = dataString
    data.updatedAt = dataString
    data.deletedAt = ""
 
    try {
      const token = localStorage.getItem("prospector_user_token");
  
      const response = await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        toast.success("Contato cadastrado com sucesso!")
      }

    } catch (error: any) {
      if (error) {
        console.log(error)
        toast.error("ops! Alguma coisa está errada! Atualize a página e tente novamente!")
      }
    } 

    setTimeout(() => {
      ShowAddClientContactForm()
      ShowClientDetailsForm(1)
    }, 2000);

  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>ADD NEW CONTACT:</h2>

        <div className="divLabelAndInput">
          <label>Complete Name:</label>
          <input
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
            Save
          </button>

          <button onClick={ShowAddClientContactForm} className="buttonCancelReg">
            Close
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default AddClientContactForm;
