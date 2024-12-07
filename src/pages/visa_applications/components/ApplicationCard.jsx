const ApplicationCard = ({ item, handleDelete }) => {
    const { _id, countryName, countryImg, visaType, processingTime, fee, validity, applicationMethod, applicantsName, email, appliedDate } = item
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <img
                src={countryImg}
                alt={`${countryName} Flag`}
                className="w-full h-40 object-cover"
            />
            <div className="p-5 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{countryName}</h2>
                <p className="text-sm text-gray-500">Visa Type: <span className="font-semibold text-gray-700">{visaType}</span></p>
                <p className="text-sm text-gray-500">Processing Time: <span className="font-semibold text-gray-700">2{processingTime}</span></p>
                <p className="text-sm text-gray-500">Fee: <span className="font-semibold text-gray-700">${fee}</span></p>
                <p className="text-sm text-gray-500">Validity: <span className="font-semibold text-gray-700">{validity}</span></p>
                <p className="text-sm text-gray-500">Application Method: <span className="font-semibold text-gray-700">{applicationMethod}</span></p>
                <p className="text-sm text-gray-500">Applicant Name: <span className="font-semibold text-gray-700">{applicantsName}</span></p>
                <p className="text-sm text-gray-500">Email: <a href="mailto:mahmud.devs@gmail.com" className="text-blue-500 underline">{email}</a></p>
                <p className="text-sm text-gray-500">Applied Date: <span className="font-semibold text-gray-700">{appliedDate}</span></p>
                <button onClick={() => { handleDelete(_id) }} className="w-full py-2 mt-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition">
                    Cancel
                </button>
            </div>
        </div>

    )
}

export default ApplicationCard