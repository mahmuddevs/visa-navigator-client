import { Helmet } from "react-helmet-async"
import AddedVisaCards from "./components/AddedVisaCards"
import { toast } from "react-toastify"
import Swal from 'sweetalert2'
import NoData from "../../components/NoData"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import AddedVisasRow from "./components/AddedVisasRow"
import Spinner from "../../components/Spinner"

const MyAddedVisas = () => {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const email = user.email
    const [visas, setVisas] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://visa-navigator-fawn.vercel.app/my-visas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                setVisas(data)
                setLoading(false)
            })
    }, [])

    const handleDeleteVisa = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-fawn.vercel.app/visas/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Visa has been deleted.",
                                icon: "success"
                            });
                            const remainingData = visas.filter(item => item._id !== id)
                            setVisas(remainingData)
                        }
                    })
                    .catch(err => toast.error("Something Went Wrong!"))
            }
        });
    }


    return (
        <>
            <Helmet>
                <title>My Added Visas - Visa Navigator</title>
            </Helmet>
            <div className="w-11/12 sm:container mx-auto my-10 md:my-20 !mt-28 dark:text-white">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                    <h2 className="text-3xl font-bold">My Added Visas</h2>
                </div>
                {
                    loading ? <Spinner section={true} /> : (
                        <>
                            {
                                visas.length > 0 ? (
                                    <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
                                        <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            <tr>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">#</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Country Name</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flag</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Visa Type</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Processing Time</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fee</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Validity</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Application Method</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {visas?.map((item, index) => {
                                                return <AddedVisasRow key={item._id} index={index} item={item} deleteVisa={handleDeleteVisa} visas={visas} setVisas={setVisas} />
                                            })}
                                        </tbody>
                                    </table>
                                ) : (
                                    <NoData />
                                )
                            }
                        </>
                    )
                }

            </div>
        </>
    )
}

export default MyAddedVisas