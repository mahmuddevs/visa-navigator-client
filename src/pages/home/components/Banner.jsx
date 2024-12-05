import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="relative w-full h-[75vh]">
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
                <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg max-w-4xl space-y-4">
                    <h1 className="text-4xl font-bold">Your Gateway to Global Opportunities</h1>
                    <p className="text-xl">
                        Simplify your visa journey with our step-by-step guidance. Whether for travel, study, or work, we’ll help you reach your destination with ease.
                    </p>
                    <a href="" className="btn btn-primary">Explore Now</a>
                </div>
            </div>
            <div className="carousel w-full h-[75vh] rounded-lg">
                <div id="slide1" className="carousel-item relative w-full rounded-lg">
                    <img
                        src="/images/img-1.jpg"
                        className="w-full rounded-lg " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full rounded-lg">
                    <img
                        src="/images/img-2.jpg"
                        className="w-full rounded-lg" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full rounded-lg">
                    <img
                        src="/images/img-3.jpg"
                        className="w-full rounded-lg" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full rounded-lg">
                    <img
                        src="/images/img-4.jpg"
                        className="w-full rounded-lg" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner