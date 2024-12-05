import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { FcGoogle } from "react-icons/fc"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { AuthContext } from "../../../contexts/AuthProvider"


const Register = () => {
    const { registerUser, updateDetails, setLoading, loginWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState({})
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const formValues = Object.fromEntries(formData)

        const { name, email, photoUrl, password } = formValues

        if (!name) {
            setError({ ...error, name: 'Name Is Required' })
            return
        }
        if (!email) {
            setError({ ...error, email: 'Email Is Required' })
            return
        }
        if (!photoUrl) {
            setError({ ...error, photoUrl: 'Photo Url Is Required' })
            return
        }
        if (!password) {
            setError({ ...error, password: 'Password Is Required' })
            return
        }

        const passRegEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/

        if (!password.match(passRegEx)) {
            setError({ ...error, password: 'Password Must Be of 6 Character, Must Contain 1 Uppercase and 1 Lowercase Letter' })
            return
        }

        registerUser(email, password)
            .then(() => {
                toast.success("Registration Successful")
                updateDetails(name, photoUrl)
                    .then(() => { navigate('/') })
                    .catch(() => {
                        setLoading(false)
                        toast.error("User Update Failed")
                    })
            })
            .catch(() => {
                setLoading(false)
                toast.error("Registration Failed")
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                toast.success("Sign In Successful")
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                setLoading(false)
                toast.error("Sign In Faild")
            })
    }

    return (
        <>
            <div className="sm:hero min-h-[70vh] py-4">
                <div className="w-full hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h2 className="text-center text-inherit text-3xl font-bold pt-8">Register</h2>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                                    {error.name && <span className="text-red-600 text-xs mt-2 ms-1">{error.name}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                    {error.email && <span className="text-red-600 text-xs mt-2 ms-1">{error.email}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name="photoUrl" type="url" placeholder="URL of Your Photo" className="input input-bordered" required />
                                    {error.photoUrl && <span className="text-red-600 text-xs mt-2 ms-1">{error.photoUrl}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input name="password" type={showPass ? 'text' : 'password'}
                                            placeholder="password" className="input input-bordered w-full" required />
                                        <div onClick={handleShowPass} className="absolute top-1/2 transform -translate-y-1/2 right-4">
                                            {
                                                showPass ? <FaEyeSlash className="text-lg" />
                                                    :
                                                    <FaEye className="text-lg" />
                                            }
                                        </div>
                                    </div>
                                    {error.password && <span className="text-red-600 text-xs mt-2 ms-1">{error.password}</span>}
                                    <label className="label text-sm">
                                        Already Have an Account?<Link to='/auth/login' className="label-text-alt link link-hover">Login</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-gradient-to-r from-green-200 to-blue-300">Register</button>
                                </div>
                            </form>
                            <div className="text-center text-md font-semi">Or SignIn With</div>
                            <div className="form-control">
                                <button onClick={handleGoogleLogin} className="btn btn-ghost border-2 border-gray-400">
                                    <FcGoogle className="w-8 h-8" />
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register