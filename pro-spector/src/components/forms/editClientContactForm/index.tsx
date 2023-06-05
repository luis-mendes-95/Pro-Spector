import Modal from "../../modal";
import { useContext, useEffect } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iClientContact } from "../../../interfaces/client";
import "react-toastify/dist/ReactToastify.css";
import { ClientContactEditSchema } from "../../../schemas/client";
import { DashboardContext } from "../../../contexts/dashboard";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const EditClientContactForm = () => {

  const { currentContactId, setContactsByRequest, ShowEditClientContactForm, contacts, SetContact, currentContact, ShowClientDetailsForm, currentClientId } = useContext(DashboardContext)

  useEffect(() => {

    contacts.map((contact: any) => {
      if (contact.client.id === currentClientId) {
        SetContact(contact)
      }
    })

  }, [])
  

  const { register, handleSubmit, formState: { errors }, } = 
  useForm<iClientContact>({ resolver: yupResolver(ClientContactEditSchema) });

  const submit = async (data: any) => {

    if (data.name === "") {
      data.name = currentContact.name
    }

    if (data.email === "") {
      data.email = currentContact.email
    }

    let dataString = new Date().toLocaleDateString('en-US').replace(/\//g, '-');

    data.createdAt = currentContact.createdAt
    data.updatedAt = dataString
    data.deletedAt = ""
    data.clientId = currentClientId
 
    try {
      const token = localStorage.getItem("prospector_user_token");
  
      const response = await api.patch(`/contacts/${currentContact.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Contato editado com sucesso!")

        try {
          const token = localStorage.getItem("prospector_user_token");

          const response = await api.get("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          setContactsByRequest(response.data)
  
        } catch (error) {
          console.log(error);
        }

      }

    } catch (error: any) {
      if (error) {
        console.log(error)
        toast.error("ops! Alguma coisa está errada! Atualize a página e tente novamente!")
      }
    } 

    setTimeout(() => {
      ShowEditClientContactForm(currentContactId)
    }, 2000);

    SetContact("")

    ShowClientDetailsForm(currentClientId)
    
  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>EDIT CONTACT:</h2>

        <div className="divLabelAndInput">
          <label>Complete Name:</label>
          <input
            defaultValue={currentContact?.name}
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
            defaultValue={currentContact?.email}
            placeholder="Type here your password"
            {...register("email")}
          />
        </div>
        {errors.email?.message && (
          <p className="pError" aria-label="error">
            {errors.email.message}
          </p>
        )}

        {/* <div className="divLabelAndInput">
          <label>Phone:</label>
          <input
            defaultValue={currentContact?.phone}
            placeholder="Type here your password"
            {...register("phone")}
          />
        </div>
        {errors.phone?.message && (
          <p className="pError" aria-label="error">
            {errors.phone.message}
          </p>
        )} */}

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Save
          </button>

          <button
            onClick={()=>{
              ShowEditClientContactForm(currentClientId)
              SetContact("")
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
