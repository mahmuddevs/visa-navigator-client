const VisaCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Country: </h2>
                <ul className="space-y-2 mb-4">
                    <li>Visa Type: </li>
                    <li>Processing Time:</li>
                    <li>Fee:</li>
                    <li>Validity:</li>
                    <li>Application Method:</li>
                </ul>
                <div className="card-actions justify-start">
                    <button className="px-4 py-2.5  border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg">See Details</button>
                </div>
            </div>
        </div>
    )
}

export default VisaCard