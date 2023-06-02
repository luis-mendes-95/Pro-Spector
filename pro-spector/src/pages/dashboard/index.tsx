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

const Dashboard = () => {
  const {
    showDashboardHome,
    showAddClientForm,
    showClientDetailsForm,
    showAddClientContactForm,
    showEditClientContactForm,
    showAddConversionForm,
    showEditConversionForm
  } = useContext(DashboardContext);

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
