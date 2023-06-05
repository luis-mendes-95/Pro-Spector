import { useContext } from "react";
import { HeaderHome } from "../../../styles/headers";
import { DashboardContext } from "../../../contexts/dashboard";

const Header = () => {

  const { ShowContactsDashboard, ShowDashboardHome, logout } = useContext(DashboardContext);

  return (
    <HeaderHome>
      <h1>Pro-Spector</h1>

      <button onClick={ShowDashboardHome}>🏡</button>

      <button onClick={ShowContactsDashboard}>Clients</button>

      <button onClick={logout}>Logout</button>
    </HeaderHome>
  );
};

export default Header;
