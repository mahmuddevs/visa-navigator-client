import { Helmet } from 'react-helmet-async'
import Banner from './components/Banner'
import LatestVisas from './components/LatestVisas'
import VisaTypes from './components/VisaTypes'
import WhyUS from './components/WhyUS'
import Testimonials from './components/Testimonials'
import ApplicationProcess from './components/ApplicationProcess'
import VisaApprovalRates from './components/VisaApprovalRate'
import StartJourney from './components/StartJourney'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Visa Navigator</title>
            </Helmet>
            <Banner />
            <LatestVisas />
            <VisaTypes />
            <WhyUS />
            <Testimonials />
            <ApplicationProcess />
            <VisaApprovalRates />
            <StartJourney />
        </>
    )
}

export default Home