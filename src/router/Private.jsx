import { useContext } from "react"

import Spinner from "../components/Spinner"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider"

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to='/auth/login' />
    )
}

export default Private