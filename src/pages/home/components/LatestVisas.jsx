import VisaCard from "./VisaCard"

const LatestVisas = () => {
    return (
        <div className="my-10 lg:my-20">
            <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                <h2 className="text-3xl font-bold">Latest Visa Updates</h2>
                <p className="text-lg">Stay informed with the newest visa opportunities and requirements. Explore the most recent options to make your travel, study, or work plans a reality.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-9/12 mx-auto">
                <VisaCard />
                <VisaCard />
                <VisaCard />
                <VisaCard />
                <VisaCard />
                <VisaCard />
            </div>
        </div>
    )
}

export default LatestVisas