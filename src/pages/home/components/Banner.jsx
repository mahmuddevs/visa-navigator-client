
import { Typewriter } from 'react-simple-typewriter'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="h-[85vh] relative">
            <Swiper
                loop
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/images/img-1.jpg" className="w-full h-[85vh] object-cover object-top" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/img-2.jpg" className="w-full h-[85vh] object-cover object-top" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/img-3.jpg" className="w-full h-[85vh] object-cover object-top" />
                </SwiperSlide>
            </Swiper>

            {/* Overlay for the slider */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4 pointer-events-none">
                <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg max-w-4xl space-y-4">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Your Gateway to <span className='text-light-primary'>
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
                    <a
                        href="#visa-list"
                        className="btn border-0 bg-light-primary dark:bg-dark-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-light-secondary hover:shadow-lg pointer-events-auto"
                    >
                        Explore Now
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Banner