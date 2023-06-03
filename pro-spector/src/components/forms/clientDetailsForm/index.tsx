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

const ClientDetailsForm = () => {
  const navigate = useNavigate();

  const {
    ShowClientDetailsForm,
    ShowAddClientContactForm,
    ShowEditClientContactForm,
    ShowAddConversionForm,
    ShowEditConversionForm
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
        <h2>CLIENT DETAILS:</h2>

        <div className="divLabelAndInput">
          <label>Registered since:</label>
          <input value="27/03/2007" disabled />
        </div>

        <div className="divLabelAndInput">
          <label>Complete Name:</label>
          <input
            defaultValue="Reynhoml Industries"
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
            defaultValue="ReynhomlIndustries@ReynhomlIndustries.com"
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
            defaultValue="+55 359 666 584"
            placeholder="Type here your password"
            {...register("phone")}
          />
        </div>
        {errors.phone?.message && (
          <p className="pError" aria-label="error">
            {errors.phone.message}
          </p>
        )}

        <ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            <h3>Contacts:</h3>
            <button
              style={{
                border: "2pt solid #1a5f70",
                backgroundColor: "#1a5f70",
                color: "white",
                textShadow: "1px 1px 5px black",
              }}
              onClick={ShowAddClientContactForm}
            >
              Add new contact
            </button>
          </div>

          <li>
            <h4>Stewart Rollinsfaustar</h4>
            <p>+55 47 999 67 05 47</p>
            <p>Rollins@Fauster.com</p>
            <p>Registered since: 30/02/2016</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <button onClick={ShowEditClientContactForm}>Edit</button>
              <button style={{ color: "red" }}>Delete</button>
            </div>
          </li>

          <li>
            <h4>Stewart Rollinsfaustar</h4>
            <p>+55 47 999 67 05 47</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <button>Edit</button>
              <button style={{ color: "red" }}>Delete</button>
            </div>
          </li>

          <li>
            <h4>Stewart Rollinsfaustar</h4>
            <p>+55 47 999 67 05 47</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <button>Edit</button>
              <button style={{ color: "red" }}>Delete</button>
            </div>
          </li>

          <li>
            <h4>Stewart Rollinsfaustar</h4>
            <p>+55 47 999 67 05 47</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <button>Edit</button>
              <button style={{ color: "red" }}>Delete</button>
            </div>
          </li>
        </ul>

        <ul>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            <h3>Conversions:</h3>
            <button
              style={{
                border: "2pt solid #1a5f70",
                backgroundColor: "#1a5f70",
                color: "white",
                textShadow: "1px 1px 5px black",
              }}
              onClick={ShowAddConversionForm}
            >
              New Conversion Process
            </button>
          </div>

          <li>
            <h4>T-shirts Uniform for 160 employess</h4>
            <p>R$ 7.840,00</p>
            <p style={{ color: "orange", fontWeight: "bold" }}>
              In Progress...
            </p>
            <p style={{ fontSize: "10pt" }}>Process Started 01/04/2017</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <button onClick={ShowEditConversionForm}>Edit</button>
              <button style={{ color: "red" }}>Delete</button>
            </div>
          </li>

          <li>
            <h4>15 Windbanners to 20 stores</h4>
            <p>R$ 29.700,00</p>
            <p style={{ color: "green", fontWeight: "bold" }}>Success</p>
            <p style={{ fontSize: "10pt" }}>Process Started 01/05/2017</p>
            <p style={{ fontSize: "10pt", color: "green" }}>
              Process Succeeded 04/05/2017
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <button>Edit</button>
              <button style={{ color: "red" }}>Delete</button>
            </div>
          </li>
        </ul>

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Save
          </button>

          <button onClick={ShowClientDetailsForm} className="buttonCancelReg">
            Close
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default ClientDetailsForm;
