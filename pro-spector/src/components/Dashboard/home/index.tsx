import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { DashboardContext } from "../../../contexts/dashboard";

const DashboardHome = () => {

  const { setClientsByRequest, setContactsByRequest, setConversionsByRequest } = useContext(DashboardContext)

  useEffect(() => {

    const getClients = async () => {

      try {
        const token = localStorage.getItem("prospector_user_token");
        const response = await api.get("/clients", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setClientsByRequest(response.data)
        setQtyClients(response.data.length)

      } catch (error) {
        console.log(error);
      }
    };
    getClients();

    const getContacts = async () => {
      try {
        const token = localStorage.getItem("prospector_user_token");
        const response = await api.get("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setContactsByRequest(response.data)
        setQtyContacts(response.data.length)

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

        setConversionsByRequest(response.data)
        setQtyConversions(response.data.length)

      } catch (error) {
        console.log(error);
      }
    };
    getConversions();

  }, []);

  const [ qtyClients, setQtyClients ] = useState(0)
  const [ qtyContacts, setQtyContacts ] = useState(0)
  const [ qtyConversions, setQtyConversions ] = useState(0)

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

      <h2 style={{ margin: "0 0 50px 0" }}>General Details:</h2>

      <ul style={{ listStyle: "none", textAlign: "center" }}>
        
        <li>
          <h3>🏢Number of clients:</h3>
          <p>{qtyClients}</p>
        </li>

        <li>
          <h3>☎️Number of contacts:</h3>
          <p>{qtyContacts}</p>
        </li>

        <li>
          <h3>🥇Conversions:</h3>
          <p>{qtyConversions}</p>
        </li>
      </ul>
    </div>
  );
};

export default DashboardHome;
