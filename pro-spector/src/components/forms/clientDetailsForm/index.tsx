import Modal from "../../modal";
import { useContext, useEffect, useState } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iClient, iClientContact } from "../../../interfaces/client";
import "react-toastify/dist/ReactToastify.css";
import { ClientSchema } from "../../../schemas/client";
import { DashboardContext } from "../../../contexts/dashboard";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { iConversion } from "../../../interfaces/conversion";

const ClientDetailsForm = () => {
  
  const navigate = useNavigate();

  const { ShowClientDetailsForm, ShowAddClientContactForm, ShowEditClientContactForm, ShowAddConversionForm,
          ShowEditConversionForm,setClientsByRequest, currentClient, currentClientId, SetContactId } = useContext(DashboardContext);

  const [currentClientConversions, setCurrentClientConversions] = useState<iConversion[]>();
  const [currentClientContacts, setCurrentClientContacts] = useState<iClientContact[]>();

  useEffect(() => {

    const getContacts = async () => {
      try {
        const token = localStorage.getItem("prospector_user_token");
        const response = await api.get("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allContacts = response.data;
        setCurrentClientContacts(allContacts);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();

    const getConversions = async () => {
      try {
        const token = localStorage.getItem("prospector_user_token");
        const response = await api.get("/conversions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allConversions = response.data;
        setCurrentClientConversions(allConversions);
      } catch (error) {
        console.log(error);
      }
    };
    getConversions();

  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iClient>({ resolver: yupResolver(ClientSchema) });

  const submit = async (data: iClient) => {

    let dataString = new Date().toLocaleDateString("en-US").replace(/\//g, "-");

    data.createdAt = currentClient.createdAt;
    data.updatedAt = dataString;
    data.deletedAt = "";

    try {
      const token = localStorage.getItem("prospector_user_token");

      const response = await api.patch(`/clients/${currentClientId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Cliente editado com sucesso!");

        try {
          const token = localStorage.getItem("prospector_user_token");
          const response = await api.get("/clients", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setClientsByRequest(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
        toast.error(
          "ops! Alguma coisa está errada! Atualize a página e tente novamente!"
        );
      }
    } finally {
      navigate("/dashboard");
    }
  };

  const deleteConversion = async (id: number) => {

    try {
      const token = localStorage.getItem("prospector_user_token");
      const response = await api.delete(`/conversions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 204) {
        toast.success("Conversão deletada com sucesso!");

        try {
          const token = localStorage.getItem("prospector_user_token");
          const response = await api.get("/conversions", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const allConversions = response.data;
          setCurrentClientConversions(allConversions);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClient = async (id: number) => {
    try {
      const token = localStorage.getItem("prospector_user_token");
      const response = await api.delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 204) {
        toast.success("Cliente deletado com sucesso!");

        try {
          const token = localStorage.getItem("prospector_user_token");
          const response = await api.get("/clients", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const allClients = response.data;
          setClientsByRequest(allClients);
          ShowClientDetailsForm(currentClientId);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id: number) => {
    try {
      const token = localStorage.getItem("prospector_user_token");
      const response = await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 204) {
        toast.success("Contato deletado com sucesso!");

        try {
          const token = localStorage.getItem("prospector_user_token");
          const response = await api.get("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const allContacts = response.data;
          setCurrentClientContacts(allContacts);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>CLIENT DETAILS:</h2>

        <div className="divLabelAndInput">
          <label>Registered since:</label>
          <input value={currentClient?.createdAt} disabled />
        </div>

        <div className="divLabelAndInput">
          <label>Complete Name:</label>
          <input defaultValue={currentClient?.name} placeholder="Type here your username" {...register("name")} />
        </div>
        {errors.name?.message && ( <p className="pError" aria-label="error"> {errors.name.message} </p> )}

        <div className="divLabelAndInput">
          <label>E-mail:</label>
          <input defaultValue={currentClient?.email} placeholder="Type here your password" {...register("email")} />
        </div>
        {errors.email?.message && ( <p className="pError" aria-label="error"> {errors.email.message} </p> )}

        <div className="divLabelAndInput">
          <label>Phone:</label>
          <input defaultValue={currentClient?.phone} placeholder="Type here your password" {...register("phone")} />
        </div>
        {errors.phone?.message && ( <p className="pError" aria-label="error"> {errors.phone.message} </p> )}

        <ul>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}>
            <h3>Contacts:</h3>

            <button style={{border: "2pt solid #1a5f70",backgroundColor: "#1a5f70", color: "white",textShadow: "1px 1px 5px black" }}
              onClick={() => { ShowAddClientContactForm(); ShowClientDetailsForm(currentClient.id) }}>
              Add new contact
            </button>

          </div>

          {currentClientContacts?.map((contact: iClientContact) => {
            if (contact.client?.id === currentClientId) {
              return (
                <li key={contact.id}>
                  <h4>{contact.name}</h4>
                  <p>{contact.phone}</p>
                  <p>{contact.email}</p>
                  <p>Registered since: {contact.createdAt}</p>

                  <div style={{display: "flex", justifyContent: "space-between", width: "50%"}}>

                    <p style={{cursor: "pointer"}}onClick={() => { 
                      ShowEditClientContactForm(contact.id); ShowClientDetailsForm(currentClientId); SetContactId(contact.id)}}>
                      Edit
                    </p>

                    <p style={{ color: "red" , cursor: "pointer"}} onClick={() => {deleteContact(contact.id)}}>
                      Delete
                    </p>

                  </div>

                </li>
              );
            }
          })}
        </ul>

        <ul>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}>
            <h3>Conversions:</h3>

            <button style={{ border: "2pt solid #1a5f70", backgroundColor: "#1a5f70", color: "white", textShadow: "1px 1px 5px black"}}
              onClick={() => {ShowAddConversionForm(); ShowClientDetailsForm(currentClient.id) }} >
              New Conversion Process
            </button>

          </div>

          {currentClientConversions?.map((conversion: any) => {
            if (conversion.client.id === currentClientId) {
              return (

                <li key={conversion.id}>

                  <p>$ {conversion.value}</p>

                  <p style={{ fontSize: "10pt" }}>
                    Process Started {conversion.createdAt}
                  </p>

                  <p>{conversion.details}</p>

                  <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>

                    <p style={{cursor: "pointer"}} onClick={() => { ShowEditConversionForm(conversion.id); ShowClientDetailsForm(currentClientId) }}>
                      Edit
                    </p>

                    <p style={{ color: "red" , cursor: "pointer"}} onClick={() => { deleteConversion(conversion.id) }}>
                      Delete
                    </p>
                    
                  </div>
                </li>
              );
            }
          })}
        </ul>

        <div className="DivButtonsReg" style={{display: "flex"}}>
          <button type="submit" className="buttonSaveReg">
            Save
          </button>

          <button
            onClick={() => {
              ShowClientDetailsForm(currentClient.id);
            }}
            className="buttonCancelReg"
          >
            Close
          </button>

          <button
            style={{ backgroundColor: "orangered", color: "white" }}
            onClick={() => {
              ShowClientDetailsForm(currentClientId)
              deleteClient(currentClientId);
            }}
          >
            Delete
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default ClientDetailsForm;
