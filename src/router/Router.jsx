import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Error from "../pages/error/Error";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import PrivateAlt from "./PrivateAlt";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
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