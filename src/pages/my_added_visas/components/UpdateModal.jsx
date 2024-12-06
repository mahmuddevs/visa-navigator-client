import { useRef } from "react"

const UpdateModal = ({ item = 0 }) => {
    const { _id, countryName, countryImg, visaType, processingTime, requiredDocuments, description, minAge, fee, validity, applicationMethod } = item
    const formRef = useRef()

    const handleCloseModal = () => {
        document.getElementById('update_visa_modal').close()
    }

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
            applicationMethod
        }

        fetch(`http://localhost:3000/visas/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Visa Updated Successfully')
                }
                formRef.current.reset();
            })
            .catch(err => toast.error('There Is A Problem!'))
    }

    return (
        <dialog id="update_visa_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update Visa Info</h3>
                <form ref={formRef} className="card-body max-w-lg mx-auto" onSubmit={handleAddVisa}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input name="country_name" type="text" placeholder="country name" className="input input-bordered" defaultValue={countryName} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Image</span>
                        </label>
                        <input name="country_img" type="url" placeholder="country image" className="input input-bordered" defaultValue={countryImg} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Visa Type</span>
                        </label>
                        <select className="select w-full input input-bordered" name="visa_type" defaultValue={visaType} required>
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
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input name="processing_time" type="text" placeholder="processing time" className="input input-bordered" defaultValue={processingTime} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Required Documents</span>
                        </label>
                        <div className="grid grid-cols-2">
                            <label className="label cursor-pointer justify-start gap-4">
                                <span className="label-text">Valid passport</span>
                                <input type="checkbox" name="valid_passport" value='Valid Passport' className="checkbox checkbox-primary" />
                            </label>
                            <label className="label cursor-pointer justify-start gap-4">
                                <span className="label-text">Visa application form</span>
                                <input type="checkbox" name="visa_application_form" value='Visa Application Form' className="checkbox checkbox-primary" />
                            </label>
                            <label className="label cursor-pointer justify-start gap-4">
                                <span className="label-text">Recent passport-sized photograph</span>
                                <input type="checkbox" name="passport_sized_photo" value='Recent Passport-Sized Photograph' className="checkbox checkbox-primary" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-bordered" defaultValue={description} placeholder="description"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age Restriction</span>
                        </label>
                        <input name="min_age" type="number" placeholder="minimum age" className="input input-bordered" min={0} defaultValue={minAge} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Fee</span>
                        </label>
                        <input name="fee" type="number" placeholder="fee" className="input input-bordered" min={0} defaultValue={fee} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Validity</span>
                        </label>
                        <input name="validity" type="text" placeholder="validity" className="input input-bordered" required defaultValue={validity} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Method.</span>
                        </label>
                        <input name="application_method" type="text" placeholder="application method." className="input input-bordered" required defaultValue={applicationMethod} />
                    </div>

                    <div className="form-control mt-6 space-y-8">
                        <button type="submit" className="btn bg-gradient-to-r from-green-200 to-blue-300">Add visa</button>
                        <button type="button" onClick={handleCloseModal} className="btn w-full">Close</button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default UpdateModal