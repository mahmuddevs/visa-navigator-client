import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="bg-base-200">
            <div className="footer text-base-content p-10 container mx-auto">
                <aside className="self-center">
                    <h2 className="text-2xl font-bold">Visa Navigator</h2>
                    <p>
                        Providing reliable service since 2015
                    </p>
                    <div className="flex gap-4 mt-2">
                        <FaFacebook className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        <FaInstagram className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        <FaX className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        <FaLinkedin className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                    </div>
                </aside>
                <nav>
                    <h6 className="text-lg text-black dark:text-white font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-lg text-black dark:text-white font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-lg text-black dark:text-white font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
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