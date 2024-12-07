import { Helmet } from "react-helmet-async"
import ApplicationCard from "./components/ApplicationCard"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import Swal from "sweetalert2"
import { toast } from "react-toastify"
import NoData from "../../components/NoData"

const VisaApplications = () => {
    const { user } = useContext(AuthContext)
    const email = user.email
    const [applications, setApplications] = useState([])
    const [query, setQuery] = useState('')

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

    const handleSearch = (e) => {
        const query = e.target.value
        setQuery(query);
    };

    const filteredVisas = applications.filter((application) =>
        application.countryName.toLowerCase().includes(query.toLowerCase())
    );


    return (
        <>
            <Helmet>
                <title>My Visa Applications  - Visa Navigator</title>
            </Helmet>
            <div className="w-11/12 sm:container mx-auto mb-10 md:mb-20">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                    <h2 className="text-3xl font-bold">My Visa Applications</h2>
                </div>
                <div className="ms-auto w-72 my-8">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" onChange={handleSearch} />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                {filteredVisas.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 md:my-20 w-11/12 sm:container mx-auto gap-4  ">
                        {filteredVisas.map((item) => {
                            return <ApplicationCard key={item._id} item={item} handleDelete={handleDeleteApplication} />
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

export default VisaApplications