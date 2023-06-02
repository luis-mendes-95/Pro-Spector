import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Homepage from "./pages/home";
import { UserProvider } from "./contexts/user";
import { HomeProvider } from "./contexts/home";
import { DashboardProvider } from "./contexts/dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <UserProvider>
        <HomeProvider>
          <DashboardProvider>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </DashboardProvider>
        </HomeProvider>
      </UserProvider>
    </Router>
  );
};

export default AppRoutes;
