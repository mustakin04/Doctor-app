import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./pages/Registration";
import RegistrationPatient from "./pages/RegistrationPatient";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import RootLayout from "./Layout/RootLayout";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/registrationPatient",
      element: <RegistrationPatient />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/layout",
      element: <RootLayout />,
      children: [
        { index: true, element: <Patient /> },
        { path: "patient", element: <Patient /> },
      ],
    },
    {
      path: "/doctor",
      element: <Doctor />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
