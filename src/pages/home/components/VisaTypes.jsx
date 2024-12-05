import { FaBriefcase, FaGraduationCap, FaHeart, FaPlane } from "react-icons/fa"

const VisaTypes = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                    <h2 className="text-3xl font-bold">Explore Visa Types</h2>
                    <p className="text-lg">Discover the different visa options available for travel, work, study, and more. Find the one that fits your needs and start your journey today!
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 hover:drop-shadow-md transition-all duration-500">
                        <div className="text-blue-500 mb-4">
                            <FaPlane className="mx-auto text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Tourist Visa</h3>
                        <p className="text-gray-600 mt-2">For short-term visits, sightseeing, and leisure travel.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 hover:drop-shadow-md transition-all duration-500">
                        <div className="text-green-500 mb-4">
                            <FaBriefcase className="mx-auto text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Work Visa</h3>
                        <p className="text-gray-600 mt-2">For those seeking employment opportunities abroad.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 hover:drop-shadow-md transition-all duration-500">
                        <div className="text-orange-500 mb-4">
                            <FaGraduationCap className="mx-auto text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Student Visa</h3>
                        <p className="text-gray-600 mt-2">For international students pursuing education overseas.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 hover:drop-shadow-md transition-all duration-500">
                        <div className="text-red-500 mb-4">
                            <FaHeart className="mx-auto text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700">Family Visa</h3>
                        <p className="text-gray-600 mt-2">For individuals joining family members residing abroad.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default VisaTypes