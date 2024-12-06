import { useLoaderData } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const VisaDetails = () => {

    const data = useLoaderData()

    const handleSubmit = () => { second }
    return (
        <>
            <Helmet>
                <title>{data.countryName}  - Visa Navigator</title>
            </Helmet>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">{data.countryName} Visa Application</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">Visa Details</h2>
                            <div className="flex items-center space-x-4 mb-4">
                                <img src={data.countryImg} alt={`${data.countryName} flag`} className="w-16 h-auto rounded-md" />
                                <div>
                                    <p className="font-semibold text-lg">{data.visaType}</p>
                                    <p className="text-sm opacity-70">Validity: {data.validity}</p>
                                </div>
                            </div>
                            <p className="mb-4">{data.description}</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold">Processing Time</p>
                                    <p className="text-sm opacity-70">{data.processingTime}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Minimum Age</p>
                                    <p className="text-sm opacity-70">{data.minAge} years</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Application Method</p>
                                    <p className="text-sm opacity-70">{data.applicationMethod}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Required Documents</p>
                                    <ul className="text-sm opacity-70 list-disc list-inside">
                                        {data.requiredDocuments.map((doc, index) => (
                                            <li key={index}>{doc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">Application Form</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="form-control">
                                    <label htmlFor="email" className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        disabled
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="firstName" className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value=""
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="lastName" className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="appliedDate" className="label">
                                        <span className="label-text">Applied Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="appliedDate"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="fee" className="label">
                                        <span className="label-text">Fee</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fee"
                                        disabled
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisaDetails