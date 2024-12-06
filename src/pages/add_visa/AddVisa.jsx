import { Helmet } from "react-helmet-async"
import AddVisaForm from "./components/AddVisaForm"

const AddVisa = () => {
    return (
        <>
            <Helmet>
                <title>Add Visa - Visa Navigator</title>
            </Helmet>
            <AddVisaForm />
        </>
    )
}

export default AddVisa