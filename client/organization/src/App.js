import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import DonationPage from "./pages/DonationPage";

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
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
