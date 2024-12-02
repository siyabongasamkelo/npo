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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/*" element={<HomePage />} />
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
