const AddedVisaCards = ({ item, updateVisa, deleteVisa }) => {
    const { _id, countryName, countryImg, visaType, processingTime, fee, validity, applicationMethod } = item

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="h-44 md:h-48 w-full"
                    src={countryImg}
                    alt={countryName ? countryName : "N/A"} />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-md md:text-lg"><strong>Country:</strong> {countryName ? countryName : "N/A"}</h2>
                <ul className="space-y-2 mb-4 text-xs md:text-base">
                    <li><strong className="mr-1">Visa Type:</strong> {visaType ? visaType : "N/A"}</li>
                    <li><strong className="mr-1">Processing Time:</strong> {processingTime ? processingTime : "N/A"}</li>
                    <li><strong className="mr-1">Fee:</strong> {fee ? fee : "N/A"}</li>
                    <li><strong className="mr-1">Validity:</strong> {validity ? validity : "N/A"}</li>
                    <li><strong className="mr-1">Application Method:</strong> {applicationMethod ? applicationMethod : "N/A"}</li>
                </ul>
                <div className="card-actions justify-start">
                    <div onClick={() => { updateVisa(_id) }} className="btn btn-primary">Update</div>
                    <div onClick={() => { deleteVisa(_id) }} className="btn btn-primary">Delete</div>
                </div>
            </div>
        </div>
    )
}

export default AddedVisaCards