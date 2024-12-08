import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const AddedVisaCards = ({ item, deleteVisa, visas, setVisas }) => {
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
        <div className="card bg-base-100 shadow-xl rounded-xl">
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Visa Info</h3>
                    <form ref={formRef} className="card-body max-w-lg mx-auto" onSubmit={handleSubmitUpdate}>
                        <div className="form-control">
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
                            <div className="grid grid-cols-2">
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
                                <span className="label-text">Application Method.</span>
                            </label>
                            <input
                                name="application_method"
                                type="text"
                                placeholder="application method."
                                className="input input-bordered"
                                required
                                defaultValue={applicationMethod}
                            />
                        </div>

                        <div className="form-control mt-6 space-y-8">
                            <button
                                type="submit"
                                className="btn bg-gradient-to-r from-green-200 to-blue-300 dark:bg-gradient-to-r dark:from-purple-800 dark:to-gray-800"
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
            <figure>
                <img className="h-44 md:h-48 w-full rounded-xl"
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
                    <div onClick={() => { handleUpdateVisa(_id) }} className="btn btn-primary">Update</div>
                    <div onClick={() => { deleteVisa(_id) }} className="btn btn-primary">Delete</div>
                </div>
            </div>
        </div>
    )
}

export default AddedVisaCards