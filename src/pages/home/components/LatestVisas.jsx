import { Link } from "react-router-dom"
import VisaCard from "../../../components/VisaCard"
import { useEffect, useState } from "react"

const LatestVisas = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://visa-navigator-fawn.vercel.app/latest-visas')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => toast.error("Something Went Wrong!"))
    }, [])

    return (
        <section id="visa-list" className="w-11/12 sm:container mx-auto my-14 md:my-24">
            <div className="text-center max-w-4xl mx-auto space-y-4 mb-8 md:mb-14">
                <h2 className="text-3xl font-bold dark:text-white">Latest Visa Updates</h2>
                <p className="text-lg dark:text-white">Stay informed with the newest visa opportunities and requirements. Explore the most recent options to make your travel, study, or work plans a reality.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
                {data.map((item) => {
                    return <VisaCard key={item._id} item={item} />
                })}
            </div>
            <div className="flex justify-center">
                <Link to='/visas'
                    className="btn border-0 bg-light-primary dark:bg-dark-primary hover:bg-light-secondary text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg">
                    See all Visas
                </Link>
            </div>
        </section>
    )
}

export default LatestVisas