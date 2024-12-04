import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Error from "../pages/error/Error";
import Auth from "../layouts/Auth";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <h1>hello</h1>
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
            },
            {
                path: '/auth/register',
            },
            {
                path: '/auth/forget-password',
            },
        ]
    }
])

export default router