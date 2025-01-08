import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Replace with your actual API endpoint or local file
        fetch("/comments.json")
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, []);

    return (
        <section className="bg-gray-100 dark:bg-black/10">
            <div className="w-11/12 sm:container mx-auto py-14 md:py-24">
                <div className="text-center max-w-4xl mx-auto space-y-4 mb-8 md:mb-14">
                    <h2 className="text-3xl font-bold dark:text-white">What Our Clients Say</h2>
                    <p className="text-lg dark:text-white">
                        Stay informed with the newest visa opportunities and requirements. Explore the most recent options to make your travel, study, or work plans a reality.
                    </p>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                    }}
                    className="mySwiper"
                >
                    {comments?.map((comment, index) => (
                        <SwiperSlide key={index} className="pb-14">
                            <div className="flex flex-col gap-4 p-6 shadow-lg border border-gray-300 rounded-lg bg-white dark:bg-gray-900 mx-auto w-[18rem] min-h-[20rem]">
                                <div className="flex justify-center items-center">
                                    <img
                                        className="w-20 h-20 rounded-full border-2 border-blue-500"
                                        src={comment.image || "https://via.placeholder.com/150"}
                                        alt={comment.name || "Profile"}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 text-center flex-grow">
                                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        {comment.name}
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{comment.comment}</p>
                                    <span className="text-yellow-500 text-sm">⭐ {comment.rating}/5</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
