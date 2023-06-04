import AppRoutes from "./AppRoutes";
import GlobalStyle from "./styles/GlobalStyles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer/>
    </>
  );
}

export default App;
