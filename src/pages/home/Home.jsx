import { Helmet } from 'react-helmet-async'
import Banner from './components/Banner'
import LatestVisas from './components/LatestVisas'
import VisaTypes from './components/VisaTypes'
import WhyUS from './components/WhyUS'

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
        </>
    )
}

export default Home