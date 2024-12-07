import { useLoaderData } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { toast } from "react-toastify"
import ApplicationForm from "./components/ApplicationForm"

const VisaDetails = () => {
    const data = useLoaderData()
    const { user, fee } = data

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const formInput = Object.fromEntries(form)

        const { email, firstName, lastName, appliedDate, fee } = formInput
        if (!email || !firstName || !lastName || !appliedDate || !fee) {
            toast.error("Please Fill the Requiured Forms")
            return
        }
        //database work

    }
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
                                <img src={data.countryImg} alt={`${data.countryName} flag`} className="w-40 h-auto rounded-md" />
                                <div>
                                    <p className="font-semibold text-2xl">{data.visaType}</p>
                                    <p className="text-lg opacity-70">Validity: {data.validity}</p>
                                </div>
                            </div>
                            <p className="mb-4 text-lg">{data.description}</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-xl">Processing Time</p>
                                    <p className="text-lg opacity-70">{data.processingTime}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-xl">Minimum Age</p>
                                    <p className="text-lg opacity-70">{data.minAge} years</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-xl">Application Method</p>
                                    <p className="text-lg opacity-70">{data.applicationMethod}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-xl">Required Documents</p>
                                    <ul className="text-lg opacity-70 list-disc list-inside">
                                        {data.requiredDocuments.map((doc, index) => (
                                            <li key={index}>{doc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <ApplicationForm handleSubmit={handleSubmit} user={user} fee={fee} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisaDetails