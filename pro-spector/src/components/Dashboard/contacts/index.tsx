import { useContext } from "react";
import { DashboardBackground } from "../../../styles/main";
import { DashboardContext } from "../../../contexts/dashboard";
import { iClient } from "../../../interfaces/client";

const ContactsDashboard = () => {
  
  const { ShowAddClientForm, ShowClientDetailsForm, SetClient, SetClientId, clients } = useContext(DashboardContext);

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

          {clients?.map((client: iClient) => {
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
