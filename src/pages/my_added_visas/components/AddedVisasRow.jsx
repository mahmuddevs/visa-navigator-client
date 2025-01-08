import { useContext, useRef } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const AddedVisasRow = ({ item, deleteVisa, visas, setVisas, index }) => {
    const formRef = useRef();
    const modalRef = useRef()
    const { user } = useContext(AuthContext)
    const email = user.email

    const { _id, countryName, countryImg, visaType, requiredDocuments, description, minAge, processingTime, fee, validity, applicationMethod } = item

    const handleUpdateVisa = () => {
        modalRef.current.showModal()
    }

    const handleUpdateVisaType = (e) => {
        setInitVisaType(e.target.value);
    };

    const handleCloseModal = () => {
        formRef.current.reset();
        modalRef.current.close();
    };

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const countryName = form.get("country_name");
        const countryImg = form.get("country_img");
        const visaType = form.get("visa_type");
        const processingTime = form.get("processing_time");
        const description = form.get("description");
        const minAge = parseFloat(form.get("min_age"));
        const fee = parseFloat(form.get("fee"));
        const validity = form.get("validity");
        const applicationMethod = form.get("application_method");
        const validPassport = form.get("valid_passport");
        const visaApplicationForm = form.get("visa_application_form");
        const passportSizedPhoto = form.get("passport_sized_photo");

        const requiredDocuments = [];

        if (validPassport) {
            requiredDocuments.push(validPassport);
        }
        if (visaApplicationForm) {
            requiredDocuments.push(visaApplicationForm);
        }
        if (passportSizedPhoto) {
            requiredDocuments.push(passportSizedPhoto);
        }

        const formValues = {
            countryName,
            countryImg,
            visaType,
            processingTime,
            requiredDocuments,
            description,
            minAge,
            fee,
            validity,
            applicationMethod,
            user: email
        };

        fetch(`https://visa-navigator-fawn.vercel.app/visas/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updatedVisas = visas.map(visa => visa._id === _id ? { _id, ...formValues } : visa)
                    setVisas(updatedVisas)
                    toast.success('Your Visa Updated Successfully');
                    modalRef.current.close();
                } else {
                    toast.warn('Please Edit Something');
                }

            })
    };


    return (
        <>
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-11/12 !max-w-4xl mx-auto">
                    <h3 className="font-bold text-lg">Update Visa Info</h3>
                    <form ref={formRef} className="mx-auto w-full" onSubmit={handleSubmitUpdate}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="form-control dark:text-white">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input
                                    name="country_name"
                                    type="text"
                                    placeholder="country name"
                                    className="input input-bordered"
                                    defaultValue={countryName}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country Image</span>
                                </label>
                                <input
                                    name="country_img"
                                    type="url"
                                    placeholder="country image"
                                    className="input input-bordered"
                                    defaultValue={countryImg}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Visa Type</span>
                                </label>
                                <select
                                    className="select w-full input input-bordered"
                                    name="visa_type"
                                    defaultValue={visaType}
                                    onChange={handleUpdateVisaType}
                                    required
                                >
                                    <option value="">Select Visa Type</option>
                                    <option value="Tourist Visa">Tourist Visa</option>
                                    <option value="Work Visa">Work Visa</option>
                                    <option value="Student Visa">Student Visa</option>
                                    <option value="Family Visa">Family Visa</option>
                                    <option value="Business Visa">Business Visa</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input
                                    name="processing_time"
                                    type="text"
                                    placeholder="processing time"
                                    className="input input-bordered"
                                    defaultValue={processingTime}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Required Documents</span>
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="label cursor-pointer justify-start gap-4">
                                        <span className="label-text">Valid passport</span>
                                        <input
                                            type="checkbox"
                                            name="valid_passport"
                                            value="Valid Passport"
                                            defaultChecked={requiredDocuments?.includes("Valid Passport")}
                                            className="checkbox checkbox-primary"
                                        />
                                    </label>
                                    <label className="label cursor-pointer justify-start gap-4">
                                        <span className="label-text">Visa application form</span>
                                        <input
                                            type="checkbox"
                                            name="visa_application_form"
                                            value="Visa Application Form"
                                            defaultChecked={requiredDocuments?.includes("Visa Application Form")}
                                            className="checkbox checkbox-primary"
                                        />
                                    </label>
                                    <label className="label cursor-pointer justify-start gap-4">
                                        <span className="label-text">Recent passport-sized photograph</span>
                                        <input
                                            type="checkbox"
                                            name="passport_sized_photo"
                                            value="Recent Passport-Sized Photograph"
                                            defaultChecked={requiredDocuments?.includes("Recent Passport-Sized Photograph")}
                                            className="checkbox checkbox-primary"
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    className="textarea textarea-bordered"
                                    defaultValue={description}
                                    placeholder="description"
                                ></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Age Restriction</span>
                                </label>
                                <input
                                    name="min_age"
                                    type="number"
                                    placeholder="minimum age"
                                    className="input input-bordered"
                                    min={0}
                                    defaultValue={minAge}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Fee</span>
                                </label>
                                <input
                                    name="fee"
                                    type="number"
                                    placeholder="fee"
                                    className="input input-bordered"
                                    min={0}
                                    defaultValue={fee}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Validity</span>
                                </label>
                                <input
                                    name="validity"
                                    type="text"
                                    placeholder="validity"
                                    className="input input-bordered"
                                    required
                                    defaultValue={validity}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Application Method</span>
                                </label>
                                <input
                                    name="application_method"
                                    type="text"
                                    placeholder="application method"
                                    className="input input-bordered"
                                    required
                                    defaultValue={applicationMethod}
                                />
                            </div>
                        </div>

                        <div className="form-control mt-6 space-y-8">
                            <button
                                type="submit"
                                className="btn bg-light-primary dark:bg-dark-primary hover:bg-light-primary/80 dark:hover:bg-dark-primary/80 text-white"
                            >
                                Update Visa
                            </button>
                            <button type="button" onClick={handleCloseModal} className="btn w-full">
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
            <tr className="odd:bg-gray-100 even:bg-gray-50 dark:odd:bg-gray-700 dark:even:bg-gray-600">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{countryName || "N/A"}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <img
                        src={countryImg}
                        alt={countryName || "N/A"}
                        className="h-10 w-16 rounded-md"
                    />
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{visaType || "N/A"}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{processingTime || "N/A"}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">$ {fee || "N/A"}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{validity || "N/A"}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{applicationMethod || "N/A"}</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <div className="flex flex-col md:flex-row gap-2">
                        <button
                            onClick={() => handleUpdateVisa(_id)}
                            className="py-2 px-4 w-full rounded-lg bg-light-primary  hover:bg-light-primary/90 hover:shadow-lg text-white text-xs md:text-sm"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => deleteVisa(_id)}
                            className="py-2 px-4 w-full rounded-lg bg-light-accent  hover:bg-light-accent/90 hover:shadow-lg text-white text-xs md:text-sm"
                        >
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default AddedVisasRow