import { PiMapPinFill } from "react-icons/pi";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmit = (e) => {
        const name = e.target.name.value
        e.preventDefault();
        Swal.fire({
            title: `Thanks You ${name} For Your Message!`,
            text: "We Will Talk to you Shortly!",
            icon: "success"
        });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Visa Navigator</title>
            </Helmet>
            <div className="w-11/12 sm:container mx-auto my-10 md:my-20 !mt-28 dark:text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-white/70">
                            We're here to help with your visa inquiries
                        </p>
                    </div>

                    <div className="bg-white shadow-xl rounded-lg overflow-hidden dark:bg-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="bg-light-primary dark:bg-dark-primary p-8 md:p-12 content-center">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start text-white gap-4">
                                        <PiMapPinFill className="text-2xl" />
                                        <p>123 Visa Street, Global City, 10001</p>
                                    </div>
                                    <div className="flex items-center text-white gap-4">
                                        <FaPhoneAlt className="text-2xl" />
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                    <div className="flex items-center text-white gap-4">
                                        <FaEnvelopeOpen className="text-2xl" />
                                        <p>contact@visanavigator.com</p>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <h4 className="text-xl font-semibold text-white mb-4">
                                        Office Hours
                                    </h4>
                                    <p className="text-blue-100">
                                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                                        Saturday: 10:00 AM - 2:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                            <div className="p-8 md:p-12">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white/70">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="mt-1 block w-full border input input-bordered rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white/70">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="mt-1 block w-full border input input-bordered rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white/70">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            className="mt-1 block w-full border input input-bordered rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white/70">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            required
                                            className="mt-1 block w-full border input input-bordered rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-light-secondary hover:bg-light-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            <span>Send Message</span>
                                            <BsFillSendFill />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

