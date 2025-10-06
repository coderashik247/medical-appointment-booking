import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
// import DoctorProvider from "./Context/DoctorProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DoctorProvider>
      <RouterProvider router={router}></RouterProvider>
    </DoctorProvider> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
