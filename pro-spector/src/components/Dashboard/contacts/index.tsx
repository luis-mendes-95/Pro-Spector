import { useContext, useEffect, useState } from "react";
import { DashboardBackground } from "../../../styles/main";
import { DashboardContext } from "../../../contexts/dashboard";
import AddClientForm from "../../forms/addClientForm";
import api from "../../../services/api";
import { iClient } from "../../../interfaces/client";

const ContactsDashboard = () => {
  
  const {
    ShowContactsDashboard,
    ShowDashboardHome,
    showContactsDashboard,
    showDashboardHome,

    logout,

    ShowAddClientForm,
    ShowClientDetailsForm,
    showAddClientForm,
    showClientDetailsForm,

    currentClientId,
    currentClient,
    SetClient,
    SetClientId,

    clients,
    contacts,
    conversions,
    setClientsByRequest
    
    
  } = useContext(DashboardContext);

  return (
    <DashboardBackground>
      <table>
        <thead>
          <tr>
            <th>Clients:</th>
            <td
              className="tdAsButton"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={ShowAddClientForm}
            >
              Add new
            </td>
          </tr>
        </thead>

        <tbody>

          {clients?.map((client: any) => {
            return (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td className="tdAsButton" onClick={()=>{
                  SetClient(client)
                  SetClientId(client.id)
                  ShowClientDetailsForm(client.id)
                }}>
                  See more
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </DashboardBackground>
  );
};

export default ContactsDashboard;
