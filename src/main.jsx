import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import SideExpand from "../context/SideExpand";
import { useContext } from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
       path: "home",
       element: <Home />,
    }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
