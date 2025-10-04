import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import MyBooking from "../pages/My-Booking/MyBooking";
import Blogs from "../pages/Blogs/Blogs";
import ContactUs from "../pages/ContactUs/ContactUs";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('../../public/doctor.json')
            },
            {
                path:"myBooking",
                element:<MyBooking></MyBooking>
            },
            {
                path:"blogs",
                element:<Blogs></Blogs>,
            },
            {
                path:"contactUs",
                element:<ContactUs></ContactUs>
            }
        ]
    }
])