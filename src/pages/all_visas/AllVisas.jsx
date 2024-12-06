import { Helmet } from "react-helmet-async"
import VisaCard from "../../components/VisaCard"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


const AllVisas = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/all-visas')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => toast.error("Something Went Wrong!"))
    }, [])

    console.log(data)

    return (
        <>
            <Helmet>
                <title>All Visas - Visa Navigator</title>
            </Helmet>
            <div className="container mx-auto mb-10 md:mb-20">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                    <h2 className="text-3xl font-bold">All Visas</h2>
                    <p className="text-lg">Browse all visa categories in one place to find the perfect match for your travel needs.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.map((item) => {
                        return <VisaCard key={item._id} item={item} />
                    })}
                </div>
            </div>
        </>
    )
}

export default AllVisas