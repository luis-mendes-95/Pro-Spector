import { useContext } from "react";
import { DashboardBackground } from "../../../styles/main";
import { DashboardContext } from "../../../contexts/dashboard";
import AddClientForm from "../../forms/addClientForm";

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
    showClientDetailsForm
    
  } = useContext(DashboardContext);

  return (
    <DashboardBackground>

      <table>

        <thead>
          <tr>
            <th>Clients:</th>
            <button style={{backgroundColor:"green", color:"white"}} onClick={ShowAddClientForm}>Add new</button>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Coca-Cola Company</td>
            <button onClick={ShowClientDetailsForm}>See more</button>
          </tr>

          <tr>
            <td>Tesla Automotives</td>
            <button>See more</button>
          </tr>

          <tr>
            <td>Reynholm Industries</td>
            <button>See more</button>
          </tr>
        </tbody>

      </table>
    </DashboardBackground>
  );
};

export default ContactsDashboard;
