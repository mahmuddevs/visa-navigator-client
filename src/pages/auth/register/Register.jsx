import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { registerUser, updateDetails, setLoading, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        const { name, email, photoUrl, password } = formValues;

        if (!name) {
            setError({ ...error, name: "Name Is Required" });
            return;
        }
        if (!email) {
            setError({ ...error, email: "Email Is Required" });
            return;
        }
        if (!photoUrl) {
            setError({ ...error, photoUrl: "Photo Url Is Required" });
            return;
        }
        if (!password) {
            setError({ ...error, password: "Password Is Required" });
            return;
        }

        const passRegEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!password.match(passRegEx)) {
            setError({
                ...error,
                password: "Password Must Be of 6 Character, Must Contain 1 Uppercase and 1 Lowercase Letter",
            });
            return;
        }

        registerUser(email, password)
            .then(() => {
                toast.success("Registration Successful");
                updateDetails(name, photoUrl)
                    .then(() => {
                        navigate("/");
                    })
                    .catch(() => {
                        setLoading(false);
                        toast.error("User Update Failed");
                    });
            })
            .catch(() => {
                setLoading(false);
                toast.error("Registration Failed");
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
                <title>Register - Visa Navigator</title>
            </Helmet>
            <div className="flex justify-center items-center mt-28 md:mt-36 mb-14 md:mb-24">
                <div className="flex flex-col-reverse md:flex-row bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-5xl pt-10 md:pt-0">
                    <div className="w-full md:w-1/2 px-8 py-10">
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                            Register
                        </h2>
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                    required
                                />
                                {error.name && (
                                    <span className="text-red-600 text-xs mt-1">{error.name}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                    required
                                />
                                {error.email && (
                                    <span className="text-red-600 text-xs mt-1">{error.email}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300">Photo URL</span>
                                </label>
                                <input
                                    name="photoUrl"
                                    type="url"
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full"
                                    required
                                />
                                {error.photoUrl && (
                                    <span className="text-red-600 text-xs mt-1">{error.photoUrl}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPass ? "text" : "password"}
                                        placeholder="Password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <div
                                        onClick={handleShowPass}
                                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-gray-700 dark:text-gray-300"
                                    >
                                        {showPass ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                                {error.password && (
                                    <span className="text-red-600 text-xs mt-1">{error.password}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <button className="btn dark:text-white bg-light-primary hover:bg-light-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90">
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                            Already have an account?{" "}
                            <Link
                                to="/auth/login"
                                className="text-blue-500 hover:underline dark:text-blue-400"
                            >
                                Login
                            </Link>
                        </div>
                        <div className="divider">OR</div>
                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-ghost border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2 mx-auto"
                        >
                            <FcGoogle className="w-6 h-6" />
                            Sign in with Google
                        </button>
                    </div>
                    <div className="w-1/2 mx-auto md:mx-0">
                        <img
                            src="/auth/register.gif"
                            alt="Register Illustration"
                            className="rounded-full md:rounded-none md:rounded-r-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
