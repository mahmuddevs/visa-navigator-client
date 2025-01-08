import { Helmet } from "react-helmet-async"
import VisaCard from "../../components/VisaCard"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import NoData from "../../components/NoData"
import { useLocation } from "react-router-dom"
import Spinner from "../../components/Spinner"


const AllVisas = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const location = useLocation()

    const params = new URLSearchParams(location.search);
    const category = params.get('category');

    useEffect(() => {
        setLoading(true)
        if (category) {
            let visaType;
            if (category === 'student') {
                visaType = "Student Visa"
            }
            if (category === 'business') {
                visaType = "Business Visa"
            }
            fetch('https://visa-navigator-fawn.vercel.app/visas/filter-by-visa-type', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ visaType })
            })
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                })
            return
        }

        fetch('https://visa-navigator-fawn.vercel.app/all-visas')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => toast.error("Something Went Wrong!"))
    }, [])

    const handleFilter = (e) => {
        const visaType = e.target.value

        setLoading(true)
        fetch('https://visa-navigator-fawn.vercel.app/visas/filter-by-visa-type', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ visaType })
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }
    const handleSort = (e) => {
        const sort = e.target.value

        setLoading(true)
        fetch('https://visa-navigator-fawn.vercel.app/visas/sort-by-price', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sort })
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }

    return (
        <>
            <Helmet>
                <title>All Visas - Visa Navigator</title>
            </Helmet>
            <section className="w-11/12 sm:container mx-auto my-10 md:my-20 !mt-28">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10 dark:text-white">
                    <h2 className="text-3xl font-bold">All Visas</h2>
                    <p className="text-lg">Browse all visa categories in one place to find the perfect match for your travel needs.
                    </p>
                </div>
                <div className="ms-auto max-w-xl my-8 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <p>Fees:</p>
                        <select className="select w-full input input-bordered" name="visa_type" onChange={handleSort} required>
                            <option value="" defaultValue>Default</option>
                            <option value="1">Low to High</option>
                            <option value="-1">High to Low</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <p>Type:</p>
                        <select className="select w-full input input-bordered" name="visa_type" onChange={handleFilter} required>
                            <option value="" defaultValue>All Visas</option>
                            <option value="Tourist Visa">Tourist Visa</option>
                            <option value="Work Visa">Work Visa</option>
                            <option value="Student Visa">Student Visa</option>
                            <option value="Family Visa">Family Visa</option>
                            <option value="Business Visa">Business Visa</option>
                        </select>
                    </div>
                </div>
                {
                    loading ? <Spinner section={true} /> : (
                        <>
                            {data.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        {data.map((item) => {
                                            return <VisaCard key={item._id} item={item} />
                                        })}
                                    </div>
                                </>
                            ) : (
                                <NoData />
                            )}
                        </>
                    )
                }

            </section>
        </>
    )
}

export default AllVisas