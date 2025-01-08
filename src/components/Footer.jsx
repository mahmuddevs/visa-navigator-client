import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

const Footer = () => {

    const handleSubscribe = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "Thank You For Subscribing!",
            text: "We will keep you updated!",
            icon: "success"
        });
    }

    return (
        <footer className="bg-base-200">
            <div className="grid py-14 md:py-24 gap-8 md:grid-cols-2 lg:grid-cols-4 text-base-content w-11/12 sm:container mx-auto">
                <aside className="">
                    <h2 className="text-2xl font-bold">Visa Navigator</h2>
                    <p>
                        Providing reliable service since 2015
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.facebook.com/" target="_blank">
                            <FaFacebook className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <FaInstagram className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        </a>
                        <a href="https://x.com/" target="_blank">
                            <FaX className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <FaLinkedin className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        </a>




                    </div>
                </aside>
                <nav className="flex flex-col gap-2">
                    <h6 className="text-lg text-black dark:text-white font-bold">Navigate</h6>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/visas' className="link link-hover">All Visas</Link>
                    <Link to='/visas?category=student' className="link link-hover">Student Visas</Link>
                    <Link to='/visas?category=business' className="link link-hover">Business Visas</Link>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="text-lg text-black dark:text-white font-bold">Company</h6>
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                </nav>
                <div>
                    <h6 className="text-lg text-black dark:text-white font-bold">Newsletter</h6>
                    <div className="flex justify-center items-center py-4">
                        <form className="flex w-full max-w-lg shadow-md rounded-lg overflow-hidden" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 focus:outline-none text-gray-800"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-light-primary text-white px-6 py-3 hover:bg-light-primary/80 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Visa Navigator Ltd.</p>
                </aside>
            </footer>
        </footer>
    )
}

export default Footer