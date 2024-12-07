import { Helmet } from "react-helmet-async"
import AddedVisaCards from "./components/AddedVisaCards"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { toast } from "react-toastify"
import Swal from 'sweetalert2'
import UpdateModal from "./components/UpdateModal"
import NoData from "../../components/NoData"

const MyAddedVisas = () => {
    const { user } = useContext(AuthContext)
    const [visas, setVisas] = useState([])
    const [singleVisa, setSingleVisa] = useState()
    const email = user.email


    useEffect(() => {
        fetch('http://localhost:3000/my-visas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setVisas(data))
    }, [])

    const handleUpdateVisa = (id) => {
        fetch(`http://localhost:3000/visas/${id}`)
            .then(res => res.json())
            .then(data => setSingleVisa(data))
        document.getElementById('update_visa_modal').showModal()
    }

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
                fetch(`http://localhost:3000/visas/${id}`, {
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
            <div className="container mx-auto dark:text-white">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                    <h2 className="text-3xl font-bold">My Added Visas</h2>
                </div>
                <UpdateModal item={singleVisa} />
                {
                    visas.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-20">
                            {visas.map((item) => {
                                return <AddedVisaCards key={item._id} item={item} updateVisa={handleUpdateVisa} deleteVisa={handleDeleteVisa} />
                            })}
                        </div>
                    ) : (
                        <NoData />
                    )
                }
            </div>
        </>
    )
}

export default MyAddedVisas