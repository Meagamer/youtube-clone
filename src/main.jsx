import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SmalNavSearch from "./components/SmalNavSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
      path: "/Navsearch",
      element: <SmalNavSearch />,
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
