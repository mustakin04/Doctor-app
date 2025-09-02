import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from './pages/registration';
import RegistrationPatient from './pages/RegistrationPatient';
import Login from './pages/Login';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration></Registration>,
  },
  {
    path: "/registrationPatient",
    element: <RegistrationPatient></RegistrationPatient>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/patient",
    element: <Patient></Patient>,
  },
  {
    path: "/doctor",
    element: <Doctor></Doctor>,
  },
  
]);
  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App
