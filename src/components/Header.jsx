import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [showMenu, setShowMenu] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then(() => { console.log("log out successful") })
            .catch(() => { console.log("error logging out") })
    }

    const handleShowMenu = () => {
        setShowMenu(true)
    }
    const handleHideMenu = () => {
        setShowMenu(false)
    }

    const navItems = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">All Visas</NavLink></li>
            {user && <li><NavLink to="/">Add Visa</NavLink></li>}
            {user && <li><NavLink to="/">My Added Visas</NavLink></li>}
            {user && <li><NavLink to="/">My Visa applications</NavLink></li>}
        </>
    )

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
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
                    <Link to='/' className="text-xl ms-4 md:ms-0 font-semibold">Visa Navigator</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-6">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="flex items-center gap-4">
                            <div className="z-30 relative">
                                <div className="btn btn-ghost btn-circle avatar" onMouseEnter={handleShowMenu} onMouseLeave={handleHideMenu}>
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <div className={`absolute top-[80%] ${showMenu ? "flex" : "hidden"}`} onMouseEnter={handleShowMenu} onMouseLeave={handleHideMenu}>
                                    <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li><a className="font-bold">Welcome, {user?.displayName}</a></li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
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
    )
}

export default Header