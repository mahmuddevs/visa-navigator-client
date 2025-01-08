import { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { loginUser, loginWithGoogle, setLoading } = useContext(AuthContext);
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const formValues = Object.fromEntries(formData);

        const { email, password } = formValues;
        loginUser(email, password)
            .then(() => {
                e.target.reset();
                toast.success("Login Successful");
                navigate(location?.state ? location.state : "/");
            })
            .catch(() => {
                setLoading(false);
                toast.error("Invalid Credentials Try Again");
            });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                toast.success("Sign In Successful");
                navigate(location?.state ? location.state : "/");
            })
            .catch(() => {
                setLoading(false);
                toast.error("Sign In Failed");
            });
    };

    return (
        <>
            <Helmet>
                <title>Login - Visa Navigator</title>
            </Helmet>
            <div className="flex justify-center items-center mt-28 md:mt-36 mb-14 md:mb-24">
                <div className="card w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl flex flex-col md:flex-row rounded-lg  pt-10 md:pt-0">
                    <div className="w-1/2 mx-auto md:mx-0">
                        <img
                            src="/auth/login.gif"
                            alt="Login Illustration"
                            className="rounded-full md:rounded-none md:rounded-l-lg w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    ref={emailRef}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPass ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <div
                                        onClick={handleShowPass}
                                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                                    >
                                        {showPass ? (
                                            <FaEyeSlash className="text-lg" />
                                        ) : (
                                            <FaEye className="text-lg" />
                                        )}
                                    </div>
                                </div>
                                <label className="label">
                                    <a className="label-text hover:underline cursor-pointer">
                                        Forgot Password?
                                    </a>
                                </label>
                                <label className="label text-sm">
                                    Don't Have an Account?{" "}
                                    <Link to="/auth/register" className="label-text-alt link link-hover">
                                        Register
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn dark:text-white bg-light-primary hover:bg-light-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="text-center text-sm mt-4">Or Sign In With</div>
                        <div className="form-control mt-2">
                            <button
                                onClick={handleGoogleLogin}
                                className="btn btn-ghost border border-gray-400"
                            >
                                <FcGoogle className="w-8 h-8" />
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
