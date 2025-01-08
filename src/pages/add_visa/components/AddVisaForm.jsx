import { useContext, useRef } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"
import { toast } from "react-toastify"

const AddVisaForm = () => {
    const { user } = useContext(AuthContext)
    const formRef = useRef()

    const handleAddVisa = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)

        const countryName = form.get('country_name')
        const countryImg = form.get('country_img')
        const visaType = form.get('visa_type')
        const processingTime = form.get('processing_time')
        const description = form.get('description')
        const minAge = parseFloat(form.get('min_age'))
        const fee = parseFloat(form.get('fee'))
        const validity = form.get('validity')
        const applicationMethod = form.get('application_method')
        const validPassport = form.get('valid_passport')
        const visaApplicationForm = form.get('visa_application_form')
        const passportSizedPhoto = form.get('passport_sized_photo')

        const requiredDocuments = []

        if (validPassport) {
            requiredDocuments.push(validPassport)
        }
        if (visaApplicationForm) {
            requiredDocuments.push(visaApplicationForm)
        }
        if (passportSizedPhoto) {
            requiredDocuments.push(passportSizedPhoto)
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
            user: user.email
        }

        fetch('https://visa-navigator-fawn.vercel.app/add-visa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Visa Is Added Successfully')
                }
                if (data.message) {
                    toast.warn(data.message)
                }
                formRef.current.reset();
            })
            .catch(err => toast.error('There Is A Problem!'))
    }

    return (
        <section className="w-11/12 sm:container mx-auto my-10 md:my-20 !mt-28">
            <div className="text-center max-w-4xl mx-auto space-y-4 my-5 lg:my-10 dark:text-white">
                <h2 className="text-3xl font-bold">Add A Visas</h2>
            </div>
            <form ref={formRef} className="mx-auto w-11/12 md:w-3/4 lg:w-7/12" onSubmit={handleAddVisa}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="form-control dark:text-white">
                        <label className="label">
                            <span className="label-text dark:text-white">Country Name</span>
                        </label>
                        <input name="country_name" type="text" placeholder="country name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Country Image</span>
                        </label>
                        <input name="country_img" type="url" placeholder="country image" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Visa Type</span>
                        </label>
                        <select className="select w-full input input-bordered" name="visa_type" required>
                            <option value="" defaultValue>Select Visa Type</option>
                            <option>Tourist Visa</option>
                            <option>Work Visa</option>
                            <option>Student Visa</option>
                            <option>Family Visa</option>
                            <option>Business Visa</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Processing Time</span>
                        </label>
                        <input name="processing_time" type="text" placeholder="processing time" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Required Documents</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="label cursor-pointer justify-start gap-4">
                                <span className="label-text dark:text-white">Valid passport</span>
                                <input type="checkbox" name="valid_passport" value='Valid Passport' className="checkbox checkbox-primary" />
                            </label>
                            <label className="label cursor-pointer justify-start gap-4">
                                <span className="label-text dark:text-white">Visa application form</span>
                                <input type="checkbox" name="visa_application_form" value='Visa Application Form' className="checkbox checkbox-primary" />
                            </label>
                            <label className="label cursor-pointer justify-start gap-4">
                                <span className="label-text dark:text-white">Recent passport-sized photograph</span>
                                <input type="checkbox" name="passport_sized_photo" value='Recent Passport-Sized Photograph' className="checkbox checkbox-primary" />
                            </label>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-bordered" placeholder="description"></textarea>
                    </div>

                    {/* Right Column */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Age Restriction</span>
                        </label>
                        <input name="min_age" type="number" placeholder="minimum age" className="input input-bordered" min={0} required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Fee</span>
                        </label>
                        <input name="fee" type="number" placeholder="fee" className="input input-bordered" min={0} required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Validity</span>
                        </label>
                        <input name="validity" type="text" placeholder="validity" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Application Method</span>
                        </label>
                        <input name="application_method" type="text" placeholder="application method" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-light-primary dark:bg-dark-primary hover:bg-light-primary/80 dark:hover:bg-dark-primary/80 text-white">
                        Add visa
                    </button>
                </div>
            </form>
        </section>

    )
}

export default AddVisaForm