import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from './pages/registration';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration></Registration>,
  },
]);
  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App
