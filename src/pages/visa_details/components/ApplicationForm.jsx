const ApplicationForm = ({ handleSubmit, user, fee }) => {
    return (
        <>
            <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Application Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="firstName" className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            defaultValue=""
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="lastName" className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="appliedDate" className="label">
                            <span className="label-text">Applied Date</span>
                        </label>
                        <input
                            type="date"
                            name="appliedDate"
                            className="input input-bordered w-full"
                            defaultValue={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="fee" className="label">
                            <span className="label-text">Fee</span>
                        </label>
                        <input
                            type="text"
                            name="fee"
                            defaultValue={fee}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div></>
    )
}

export default ApplicationForm