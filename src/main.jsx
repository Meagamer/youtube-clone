import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SmalNavSearch from "./components/SmalNavSearch";
import App from "./App";
import Home from "./components/Home";

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
