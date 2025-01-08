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
            <li className="hover:underline decoration-4 underline-offset-4"><NavLink to="/">Home</NavLink></li>
            <li className="hover:underline decoration-4 underline-offset-4"><NavLink to="/visas">All Visas</NavLink></li>
            <li className="hover:underline decoration-4 underline-offset-4"><NavLink to="/about">About</NavLink></li>
            <li className="hover:underline decoration-4 underline-offset-4"><NavLink to="/contact">Contact</NavLink></li>
            {
                user && <>
                    <li className="hover:underline decoration-4 underline-offset-4"><NavLink to="/add-visa">Add Visa</NavLink></li>
                    <li className="hover:underline decoration-4 underline-offset-4"><NavLink to="/my-added-visas">My Added Visas</NavLink></li>
                    <li className="hover:underline decoration-4 underline-offset-4"><NavLink to="/my-visa-applications">My Visa Applications</NavLink></li>
                </>
            }
            {!user && <>
                <li className="hover:underline decoration-4 underline-offset-4"> <Link to='/auth/login'>Login</Link></li>
                <li className="hover:underline decoration-4 underline-offset-4"> <Link to='/auth/register'>Register</Link></li>
            </>
            }
        </>
    )

    return (
        <div className="bg-light-primary/70 drop-shadow-xl dark:bg-dark-background fixed top-0 z-50 w-full text-light-texts">
            <div className="w-11/12 sm:container mx-auto bg-transparent py-4">
                <div className="flex justify-between items-center">
                    <div className="place-self-center">
                        <div className="dropdown md:me-4 lg:me-0">
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
                    <div className="flex items-center">
                        <ul className="menu-horizontal hidden lg:flex px-1 gap-6 font-semibold dark:text-white">
                            {navItems}
                        </ul>
                        <button className="text-2xl mx-4 dark:text-white">{theme === "light" ? <AiFillMoon onClick={() => { setTheme('dark') }} /> : <IoMdSunny onClick={() => { setTheme('light') }} />}</button>
                        {user &&
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
                                                    className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:bg-light-primary/80 dark:hover:bg-dark-primary/80"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header