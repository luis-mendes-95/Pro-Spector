import { useContext } from "react";
import ContactsDashboard from "../../components/Dashboard/contacts";
import DashboardHome from "../../components/Dashboard/home";
import Footer from "../../components/footer";
import Header from "../../components/headers/signed";
import { DashboardContext } from "../../contexts/dashboard";
import AddClientForm from "../../components/forms/addClientForm";
import ClientDetailsForm from "../../components/forms/clientDetailsForm";
import AddClientContactForm from "../../components/forms/addClientContactForm";
import EditClientContactForm from "../../components/forms/editClientContactForm";
import AddConversionForm from "../../components/forms/addConversionForm";
import EditConversionForm from "../../components/forms/editConversionForm";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const Dashboard = () => {
  const {
    showDashboardHome,
    showAddClientForm,
    showClientDetailsForm,
    showAddClientContactForm,
    showEditClientContactForm,
    showAddConversionForm,
    showEditConversionForm,
  } = useContext(DashboardContext);

  const navigate = useNavigate()

  const validateLogin = async () => {

    try {
      const token = localStorage.getItem("prospector_user_token");
  
      const response = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    } catch (error: any) {
      if (error) {
        navigate("/")
      }
    } 

  }

  validateLogin()

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {showAddClientForm && <AddClientForm />}
      {showClientDetailsForm && <ClientDetailsForm />}
      {showAddClientContactForm && <AddClientContactForm />}
      {showEditClientContactForm && <EditClientContactForm />}
      {showAddConversionForm && <AddConversionForm />}
      {showEditConversionForm && <EditConversionForm />}
      <Header />
      {showDashboardHome ? <DashboardHome /> : <ContactsDashboard />}
      <Footer />
    </div>
  );
};

export default Dashboard;
