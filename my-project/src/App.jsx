import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from './pages/registration';
import RegistrationPatient from './pages/RegistrationPatient';
import Login from './pages/Login';

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
]);
  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App
