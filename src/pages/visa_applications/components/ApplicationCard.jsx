import { FaCalendarAlt, FaClock, FaDollarSign, FaEnvelope, FaPassport, FaTrash, FaUser } from "react-icons/fa";

const ApplicationCard = ({ item, handleDelete }) => {
    const { _id, countryName, countryImg, visaType, processingTime, fee, validity, applicationMethod, applicantsName, email, appliedDate } = item;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-200 hover:shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="relative">
                <img
                    src={countryImg}
                    alt={`${countryName} Flag`}
                    className="w-full h-32 object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <h2 className="absolute bottom-2 left-4 text-lg font-semibold text-white">{countryName}</h2>
            </div>
            <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                        <FaPassport className="text-blue-500 dark:text-blue-400" />
                        <span>{visaType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaClock className="text-gray-400" />
                        <span>{processingTime}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                        <FaDollarSign className="text-gray-400" />
                        <span>{fee}</span>
                    </div>
                    <div className="flex items-center justify-self-end space-x-2">
                        <FaCalendarAlt className="text-gray-400" />
                        <span>{validity}</span>
                    </div>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                    <div className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 inline-block rounded-full px-2 py-1 mb-2">
                        {applicationMethod}
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaUser className="text-gray-400" />
                        <span>{applicantsName}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="text-gray-400" />
                        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
                    </div>
                </div>
                <button
                    onClick={() => handleDelete(_id)}
                    className="w-full mt-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2"
                >
                    <FaTrash />
                    <span>Cancel</span>
                </button>
            </div>
        </div>
    );
};

export default ApplicationCard;
