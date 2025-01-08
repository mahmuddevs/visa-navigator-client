import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const StartJourney = () => {
    return (
        <section className="w-11/12 sm:container mx-auto my-14 md:my-24 rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-black/10">
            <div className="text-center max-w-4xl mx-auto space-y-4 my-8 md:my-14">
                <h2 className="text-3xl font-bold dark:text-white">Ready to Start Your Visa Journey?</h2>
                <p className="text-lg dark:text-white">
                    Our easy-to-use visa navigator will guide you through every step of the process.
                </p>
                <Link to='/visas' className="btn bg-light-primary hover:bg-light-primary/80 text-white">Start Your Application <FaArrowRight /></Link>
            </div>
        </section>
    )
}

export default StartJourney