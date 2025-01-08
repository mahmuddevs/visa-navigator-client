import { Link } from 'react-router-dom';
import { FaClock, FaDollarSign, FaPassport, FaCalendarAlt } from 'react-icons/fa';

const VisaCard = ({ item }) => {
    const { _id, countryName, countryImg, visaType, processingTime, fee, validity, applicationMethod } = item;
    return (
        <Link to={`/visas/${_id}`} className="w-full">
            <div className="card bg-white dark:bg-[#2a323c] shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full">
                <figure className="relative">
                    <img
                        className="w-full h-40 object-cover"
                        src={countryImg}
                        alt={countryName ? countryName : "Country Image"}
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{countryName}</h3>
                </figure>

                <div className="card-body p-4">
                    <ul className="text-sm space-y-2 text-gray-700 dark:text-white/80">
                        <li className="flex items-center space-x-2">
                            <FaPassport className="text-light-accent" />
                            <span>{visaType ? visaType : "N/A"}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaClock className="text-light-accent" />
                            <span>{processingTime ? processingTime : "N/A"}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaDollarSign className="text-light-accent" />
                            <span>{fee ? `$${fee}` : "N/A"}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaCalendarAlt className="text-light-accent" />
                            <span>{validity ? validity : "N/A"}</span>
                        </li>
                    </ul>

                    <div className="mt-4 text-gray-800 dark:text-white">
                        <strong>Method:</strong> <br />
                        <span>{applicationMethod ? applicationMethod : "N/A"}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default VisaCard;
