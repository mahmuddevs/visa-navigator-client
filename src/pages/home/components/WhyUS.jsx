import { FaBalanceScale, FaHeadset, FaLock, FaUserShield } from "react-icons/fa"

const WhyUS = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-green-200 to-blue-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-purple-900">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 dark:text-white">Why Choose Us?</h2>
                    <p className="text-gray-700 mb-6 text-lg dark:text-white">
                        With our services, you’ll find everything you need to apply for an e-visa right here.
                        An easy and stress-free application process without navigating complex embassy websites.
                        Simply provide basic information, and we’ll take care of the rest for a small service fee.
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg">
                        Get Started!
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="bg-yellow-100 p-3 rounded-full mb-4 inline-block">
                            <FaBalanceScale className="text-yellow-500 text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Transparency</h3>
                        <p className="text-gray-600 mt-2">
                            We provide clear, upfront details on fees and processes with no hidden costs.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="bg-red-100 p-3 rounded-full mb-4 inline-block">
                            <FaLock className="text-red-500 text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Data Security</h3>
                        <p className="text-gray-600 mt-2">
                            Your data is completely secure with our state-of-the-art SSL encryption.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="bg-green-100 p-3 rounded-full mb-4 inline-block">
                            <FaUserShield className="text-green-500 text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Privacy</h3>
                        <p className="text-gray-600 mt-2">
                            We follow GDPR and industry standards to safeguard your personal data.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="bg-blue-100 p-3 rounded-full mb-4 inline-block">
                            <FaHeadset className="text-blue-500 text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Support</h3>
                        <p className="text-gray-600 mt-2">
                            Our 24/7 support ensures you’re never alone. Assistance is just a call or email away.
                        </p>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default WhyUS