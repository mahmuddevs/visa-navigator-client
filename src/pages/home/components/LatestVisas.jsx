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
        <section id="visa-list" className="my-10 lg:my-20 w-11/12 lg:w-8/12 mx-auto">
            <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                <h2 className="text-3xl font-bold dark:text-white">Latest Visa Updates</h2>
                <p className="text-lg dark:text-white">Stay informed with the newest visa opportunities and requirements. Explore the most recent options to make your travel, study, or work plans a reality.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-full mx-auto">
                {data.map((item) => {
                    return <VisaCard key={item._id} item={item} />
                })}
            </div>
            <div className="flex justify-center">
                <Link to='/visas'
                    className="btn border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg my-8">
                    See all Visas
                </Link>
            </div>
        </section>
    )
}

export default LatestVisas