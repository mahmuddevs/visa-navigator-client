import { useContext } from "react"
import Spinner from "../components/Spinner"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider"

const PrivateAlt = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Spinner />
    }

    if (!user) {
        return children
    }

    return (
        <Navigate to='/' />
    )
}

export default PrivateAlt