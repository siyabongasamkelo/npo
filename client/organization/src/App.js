import { Container } from "react-bootstrap";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
// import "bootstrap/dist/css/bootstrap.min.css";
// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//     </div>
//   );
// }

// export default App;
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
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
