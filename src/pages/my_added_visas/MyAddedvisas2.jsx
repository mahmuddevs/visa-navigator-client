import { Helmet } from "react-helmet-async"
import AddedVisaCards from "./components/AddedVisaCards"
import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { toast } from "react-toastify"
import Swal from 'sweetalert2'
import NoData from "../../components/NoData"

const MyAddedVisas = () => {
    const formRef = useRef();
    const { user } = useContext(AuthContext)
    const [visas, setVisas] = useState([])
    const [singleVisa, setSingleVisa] = useState({})
    const [visaType, setVisaType] = useState()
    const email = user.email

    useEffect(() => {
        fetch('https://visa-navigator-fawn.vercel.app/my-visas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setVisas(data))
    }, [])

    const handleUpdateVisa = (id) => {
        fetch(`https://visa-navigator-fawn.vercel.app/visas/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleVisa(data)
                setVisaType(data.visaType)
            })
        document.getElementById('update_visa_modal').showModal()
    }

    const handleDeleteVisa = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-fawn.vercel.app/visas/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Visa has been deleted.",
                                icon: "success"
                            });
                            const remainingData = visas.filter(item => item._id !== id)
                            setVisas(remainingData)
                        }
                    })
                    .catch(err => toast.error("Something Went Wrong!"))
            }
        });
    }
    const handleUpdateVisaType = (e) => {
        setVisaType(e.target.value);
    };

    const handleCloseModal = () => {
        formRef.current.reset();
        document.getElementById("update_visa_modal").close();
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

        fetch(`https://visa-navigator-fawn.vercel.app/visas/${singleVisa?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(data => {
                const updatedVisas = visas.map(item => item._id === singleVisa._id ? formValues : item)
                setVisas(updatedVisas)
                if (data.modifiedCount) {
                    toast.success('Your Visa Updated Successfully');
                    setSingleVisa(null)
                }
                if (!data.modifiedCount) {
                    toast.warn('Please Edit Something');
                }
                document.getElementById("update_visa_modal").close();
            })
            .catch(err => toast.error('There Is A Problem!'));
    };


    return (
        <>
            <Helmet>
                <title>My Added Visas - Visa Navigator</title>
            </Helmet>
            <div className="container mx-auto dark:text-white">
                <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10">
                    <h2 className="text-3xl font-bold">My Added Visas</h2>
                </div>
                <dialog id="update_visa_modal" className="modal modal-bottom sm:modal-middle">
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
                                    defaultValue={singleVisa?.countryName}
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
                                    defaultValue={singleVisa?.countryImg}
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
                                    value={visaType}
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
                                    defaultValue={singleVisa?.processingTime}
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
                                            defaultChecked={singleVisa?.requiredDocuments?.includes("Valid Passport")}
                                            className="checkbox checkbox-primary"
                                        />
                                    </label>
                                    <label className="label cursor-pointer justify-start gap-4">
                                        <span className="label-text">Visa application form</span>
                                        <input
                                            type="checkbox"
                                            name="visa_application_form"
                                            value="Visa Application Form"
                                            defaultChecked={singleVisa?.requiredDocuments?.includes("Visa Application Form")}
                                            className="checkbox checkbox-primary"
                                        />
                                    </label>
                                    <label className="label cursor-pointer justify-start gap-4">
                                        <span className="label-text">Recent passport-sized photograph</span>
                                        <input
                                            type="checkbox"
                                            name="passport_sized_photo"
                                            value="Recent Passport-Sized Photograph"
                                            defaultChecked={singleVisa?.requiredDocuments?.includes("Recent Passport-Sized Photograph")}
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
                                    defaultValue={singleVisa?.description}
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
                                    defaultValue={singleVisa?.minAge}
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
                                    defaultValue={singleVisa?.fee}
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
                                    defaultValue={singleVisa?.validity}
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
                                    defaultValue={singleVisa?.applicationMethod}
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
                {
                    visas.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-20">
                            {visas.map((item) => {
                                return <AddedVisaCards key={item._id} item={item} updateVisa={handleUpdateVisa} deleteVisa={handleDeleteVisa} />
                            })}
                        </div>
                    ) : (
                        <NoData />
                    )
                }
            </div>
        </>
    )
}

export default MyAddedVisas