import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPass from "./components/ForgotPass";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Assets from "./components/Assets";
import Maintenance from "./components/Maintenance";
import Audit from "./components/Audit";

const AppLayout = () => {
  return (
    <>
      <Outlet/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element:<Signin/>
      },
      {
        path: "register",
        element: <Signup />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPass />,
      },
    ]
  },
  {
    path:"/app",
    element:<App/>,
    children:[
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"inventory",
        element:<Inventory/>
      },
      {
        path:"assets",
        element:<Assets/>
      },
      {
        path:"maintenance",
        element:<Maintenance/>
      },
      {
        path:"audits",
        element:<Audit/>
      }
    ]
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
