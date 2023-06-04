import { useContext, useEffect, useState } from "react";
import { DashboardBackground } from "../../../styles/main";
import { DashboardContext } from "../../../contexts/dashboard";
import AddClientForm from "../../forms/addClientForm";
import api from "../../../services/api";
import { iClient } from "../../../interfaces/client";

const ContactsDashboard = () => {
  
  useEffect(() => {

    const getClients = async () => {
      try {
        const token = localStorage.getItem("prospector_user_token");
        const response = await api.get("/clients", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setClients(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getClients();
    
  }, []);

  const [clients, setClients] = useState<any[]>();

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
    SetClientId
    
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
          {clients?.map((client) => {
            return (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td className="tdAsButton" onClick={()=>{
                  SetClientId(client.id)
                  ShowClientDetailsForm(currentClientId)
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
