import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import MyBooking from "../pages/My-Booking/MyBooking";
import Blogs from "../pages/Blogs/Blogs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Profile from "../Components/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/doctor.json"),
      },
      {
        path: "doctor/:registration_number",
        element: <Profile></Profile>,
        // loader: ({params}) => fetch(`/doctor.json/${params.registration_number}`),
        loader: async ({ params }) => {
          const res = await fetch("/doctor.json");
          const data = await res.json();
          return data.find(
            (doctor) =>
              doctor.registration_number.toString() ===
              params.registration_number
          );
        },
      },
      {
        path: "myBooking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
