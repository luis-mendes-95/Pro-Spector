import {  BrowserRouter as Router,  Route,  Routes,  Navigate, } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Homepage from "./pages/home";
import { UserProvider } from "./contexts/user";

const AppRoutes = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default AppRoutes;
