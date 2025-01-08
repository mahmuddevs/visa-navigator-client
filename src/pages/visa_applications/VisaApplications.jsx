import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import NoData from "../../components/NoData";
import Spinner from "../../components/Spinner";

const VisaApplications = () => {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext);
    const email = user.email;
    const [applications, setApplications] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setLoading(true)
        fetch("https://visa-navigator-fawn.vercel.app/application/my-applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((data) => {
                setApplications(data)
                setLoading(false)
            });
    }, []);

    const handleDeleteApplication = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-fawn.vercel.app/application/my-applications/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Application has been Canceled.",
                                icon: "success",
                            });
                            const remApplications = applications.filter((item) => item._id !== id);
                            setApplications(remApplications);
                        }
                    })
                    .catch((err) => toast.error("Something Went Wrong!"));
            }
        });
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setQuery(query);
    };

    const filteredVisas = applications.filter((application) =>
        application.countryName.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>My Visa Applications - Visa Navigator</title>
            </Helmet>
            <div className="w-11/12 sm:container mx-auto my-10 md:my-20 !mt-28 dark:text-white">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                    <h2 className="text-3xl font-bold">My Visa Applications</h2>
                </div>
                <div className="ms-auto w-72 my-8">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            onChange={handleSearch}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </div>
                {
                    loading ? <Spinner section={true} /> : (
                        <>
                            {filteredVisas.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
                                        <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            <tr>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">#</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Country</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Visa Type</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Processing Time</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fee</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Validity</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Application Method</th>
                                                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredVisas.map((item, index) => (
                                                <tr
                                                    key={item._id}
                                                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                                >
                                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                        {index + 1}
                                                    </td>
                                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                        {item.countryName}
                                                    </td>
                                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                        {item.visaType}
                                                    </td>
                                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                        {item.processingTime}
                                                    </td>
                                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                        ${item.fee}
                                                    </td>
                                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                        {item.validity}
                                                    </td>
                                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                        {item.applicationMethod}
                                                    </td>
                                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                                        <button
                                                            onClick={() => handleDeleteApplication(item._id)}
                                                            className="py-2 px-4 w-full rounded-lg bg-light-accent hover:bg-light-accent/90 hover:shadow-lg text-white text-xs md:text-sm"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <NoData />
                            )}
                        </>
                    )
                }
            </div>
        </>
    );
};

export default VisaApplications;
