import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div className="lg:container mx-auto">
            <div className="relative w-full h-[45vh] md:h-[75vh]">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
                    <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg max-w-4xl space-y-4">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Your Gateway to <span className='text-[#9ed2f1]'>
                                <Typewriter
                                    words={['Global Careers.', 'Academic Dreams.', ' Business Expansion.', 'Adventure and Travel.']}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                        </h1>
                        <p className="text-base md:text-xl w-10/12 md:w-full mx-auto">
                            Simplify your visa journey with our step-by-step guidance. Whether for travel, study, or work, we’ll help you reach your destination with ease.
                        </p>
                        <a href="#visa-list" className="btn border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg">Explore Now</a>
                    </div>
                </div>
                <div className="carousel w-full h-[45vh] md:h-[75vh] rounded-lg">
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
        </div>
    )
}

export default Banner