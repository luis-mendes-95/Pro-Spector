import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Homepage from "./pages/home";
import { HomeProvider } from "./contexts/home";
import { DashboardProvider } from "./contexts/dashboard";

const AppRoutes = () => {
  return (
    <Router>
        <HomeProvider>
          <DashboardProvider>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </DashboardProvider>
        </HomeProvider>
    </Router>
  );
};

export default AppRoutes;
