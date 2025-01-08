import { IoDocumentTextOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const ApplicationProcess = () => {
    const steps = [
        { icon: <IoDocumentTextOutline />, title: 'Submit Application', description: 'Fill out the application form with all necessary details.' },
        { icon: <CiClock2 />, title: 'Processing', description: 'Wait for your application to be processed by the authorities.' },
        { icon: <IoMdCheckmarkCircleOutline />, title: 'Approval', description: 'Once approved, you\'ll receive your visa to travel.' },
    ]
    return (
        <>
            <section className="w-11/12 sm:container mx-auto mb-10 md:mb-20">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10 dark:text-white">
                    <h2 className="text-3xl font-bold">Visa Application Process</h2>
                    <p className="text-lg">Follow these easy steps to successfully apply for your visa.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-8 relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center w-full md:w-1/3"
                        >
                            <div className="relative">
                                <div className="relative p-3 bg-white text-gray-800 rounded-full mb-6 shadow-lg transform transition duration-500 hover:scale-110 text-4xl">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">{`Step ${index + 1}: ${step.title}`}</h3>
                            <p className="text-center text-gray-600 max-w-xs dark:text-white/80">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ApplicationProcess