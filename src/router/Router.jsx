import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Error from "../pages/error/Error";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import PrivateAlt from "./PrivateAlt";
import Home from "../pages/home/Home";
import AddVisa from "../pages/add_visa/AddVisa";
import AllVisas from "../pages/all_visas/AllVisas";
import MyAddedVisas from "../pages/my_added_visas/MyAddedVisas";
import VisaApplications from "../pages/visa_applications/VisaApplications";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-visas',
                element: <AllVisas />
            },
            {
                path: '/add-visa',
                element: <AddVisa />
            },
            {
                path: '/my-added-visas',
                element: <MyAddedVisas />
            },
            {
                path: '/my-visa-applications',
                element: <VisaApplications />
            }
        ]
    },
    {
        path: '/auth',
        element: <Auth />,
        errorElement: <Error />,
        children: [
            {
                path: '/auth',
                element: <Navigate to='/auth/login' />
            },
            {
                path: '/auth/login',
                element: <PrivateAlt><Login /></PrivateAlt>
            },
            {
                path: '/auth/register',
                element: <PrivateAlt><Register /></PrivateAlt>
            },
        ]
    }
])

export default router