import { Helmet } from "react-helmet-async"
import VisaCard from "../../components/VisaCard"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import NoData from "../../components/NoData"


const AllVisas = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/all-visas')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => toast.error("Something Went Wrong!"))
    }, [])

    const handleFilter = (e) => {
        const visaType = e.target.value

        fetch('http://localhost:3000/visas/filter-by-visa-type', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ visaType })
        })
            .then(res => res.json())
            .then(data => setData(data))
    }

    return (
        <>
            <Helmet>
                <title>All Visas - Visa Navigator</title>
            </Helmet>
            <div className="w-11/12 sm:container mx-auto mb-10 md:mb-20">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                    <h2 className="text-3xl font-bold">All Visas</h2>
                    <p className="text-lg">Browse all visa categories in one place to find the perfect match for your travel needs.
                    </p>
                </div>
                <div className="ms-auto w-40 my-8">
                    <select className="select w-full input input-bordered" name="visa_type" onChange={handleFilter} required>
                        <option value="" defaultValue>All Visas</option>
                        <option value="Tourist Visa">Tourist Visa</option>
                        <option value="Work Visa">Work Visa</option>
                        <option value="Student Visa">Student Visa</option>
                        <option value="Family Visa">Family Visa</option>
                        <option value="Business Visa">Business Visa</option>
                    </select>
                </div>
                {data.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {data.map((item) => {
                            return <VisaCard key={item._id} item={item} />
                        })}
                    </div>
                ) : (
                    <NoData />
                )}
            </div>
        </>
    )
}

export default AllVisas