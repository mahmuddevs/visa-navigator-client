import { Helmet } from "react-helmet-async"
import ApplicationCard from "./components/ApplicationCard"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import Swal from "sweetalert2"
import { toast } from "react-toastify"

const VisaApplications = () => {
    const { user } = useContext(AuthContext)
    const email = user.email
    const [applications, setApplications] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/application/my-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setApplications(data))
    }, [])

    const handleDeleteApplication = (id) => {
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
                fetch(`http://localhost:3000/application/my-applications/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Application has been Canceled.",
                                icon: "success"
                            });
                            const remApplications = applications.filter(item => item._id !== id)
                            setApplications(remApplications)
                        }
                    })
                    .catch(err => toast.error("Something Went Wrong!"))
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>My Visa Applications  - Visa Navigator</title>
            </Helmet>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 md:my-20 w-11/12 sm:container mx-auto gap-4  ">
                {applications.map((item) => {
                    return <ApplicationCard key={item._id} item={item} handleDelete={handleDeleteApplication} />
                })}
            </div>
        </>
    )
}

export default VisaApplications