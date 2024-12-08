import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { Link, NavLink } from "react-router-dom"
import { toast } from "react-toastify"
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AiFillMoon } from "react-icons/ai";
import { IoMdSunny } from "react-icons/io";
import { ThemeContext } from "../contexts/ThemeProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const { theme, setTheme } = useContext(ThemeContext)

    const handleLogout = () => {
        logOut()
            .then(() => { toast.warn("User Logged Out") })
            .catch(() => { toast.error("Something Went Wrong") })
    }

    const navItems = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/visas">All Visas</NavLink></li>
            <li><NavLink to="/add-visa">Add Visa</NavLink></li>
            <li><NavLink to="/my-added-visas">My Added Visas</NavLink></li>
            <li><NavLink to="/my-visa-applications">My Visa Applications</NavLink></li>
        </>
    )

    return (
        <div className="bg-gradient-to-r from-green-200 to-blue-300 dark:bg-gradient-to-r dark:from-purple-800 dark:to-gray-800">
            <div className="container mx-auto bg-transparent">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2 z-50">
                                {navItems}
                            </ul>
                        </div>
                        <Link to='/' className="text-xl ms-4 md:ms-0 font-semibold dark:text-white">Visa Navigator</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1 gap-6 dark:text-white">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="text-2xl me-4 dark:text-white">{theme === "light" ? <AiFillMoon onClick={() => { setTheme('dark') }} /> : <IoMdSunny onClick={() => { setTheme('light') }} />}</button>
                        {user ?
                            <div className="flex items-center gap-4">
                                <div className="z-30 relative">
                                    <div className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full" id="profile-pic">
                                            <img
                                                alt={user?.displayName}
                                                src={user?.photoURL} />
                                        </div>
                                        <Tooltip
                                            anchorSelect="#profile-pic"
                                            place="bottom"
                                            className="!p-2 !rounded-lg !bg-gray-700 !text-white !h-24" clickable
                                        >
                                            <div className="flex flex-col justify-center items-center space-y-2 py-2">
                                                <p className="font-bold text-md">{user?.displayName}</p>
                                                <button
                                                    onClick={handleLogout}
                                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="space-x-4">
                                <Link to='/auth/login' className="btn btn-sm">Login</Link>
                                <Link to='/auth/register' className="btn btn-sm">Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header