import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { PayButtonContextProvider } from "./context/PayButtonContext";
import HomePage from "./pages/HomePage";
import DonationPage from "./pages/DonationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PayButtonPage from "./pages/PayButtonPage";
import ThankYouPage from "./pages/ThankYouPage";
import PrevousProjectsPage from "./pages/PrevousProjectsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/donate/paybutton" element={<PayButtonPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/cancel" element={<ThankYouPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/projects" element={<PrevousProjectsPage />} />
      </Route>
    )
  );
  return (
    <>
      <div>
        <PayButtonContextProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </PayButtonContextProvider>
      </div>
    </>
  );
}

export default App;
