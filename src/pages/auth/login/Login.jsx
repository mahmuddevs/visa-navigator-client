import { useContext, useRef, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { AuthContext } from "../../../contexts/AuthProvider"
import { toast } from "react-toastify"

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const { loginUser, loginWithGoogle, setLoading } = useContext(AuthContext)
    const emailRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const formValues = Object.fromEntries(formData)

        const { email, password } = formValues
        loginUser(email, password)
            .then(() => {
                e.target.reset()
                toast.success("Login Successful")
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                setLoading(false)
                toast.error("Invalid Credentials Try Again")
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
            <div className="sm:hero bg-base-200 min-h-[70vh]">
                <div className="w-full hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h2 className="text-center text-inherit text-3xl font-bold pt-8">Login</h2>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" ref={emailRef} required />
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
                                    <label className="label text-sm">
                                        Don't Have an Account?
                                        <Link to='/auth/register' className="label-text-alt link link-hover">Register</Link>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <button className="btn bg-primaryBtn rounded-2xl text-white hover:text-black">Login</button>
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

export default Login