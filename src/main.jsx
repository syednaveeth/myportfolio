import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Error from "./Components/Error.jsx";
import Project from "./Components/Project.jsx";
import Aboutme from "./Components/Aboutme.jsx";

const approut = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Aboutme />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project",
        element: <Project />,
      },
    ],

    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approut} />
  </StrictMode>
);
