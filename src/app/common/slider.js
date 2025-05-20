'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className="w-full relative max-w-7xl mx-auto mt-20 py-4">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className="rounded-xl"
            >
                {[
                    'https://assets.everspringpartners.com/9e/db/4ffa5b454331b00dc31e3200ae0f/employee-relations.jpeg',
                    'https://static1.squarespace.com/static/5a09abcb90bcce4bd5518c91/5a0a01c9c83025174d4beb9b/5e9673c0d84b1b6132569fcb/1725057646371/iStock-1193685384.jpg?format=1500w',
                    'https://www.timedoctor.com/blog/images/2020/01/employee-management.jpg',
                ].map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[400px] relative">
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-50 rounded-xl shadow-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white text-xl font-semibold px-4 py-2 rounded">
                                    To win in the marketplace
                                </p>
                                <p className="text-white text-xl font-semibold px-4 py-2 rounded">
                                    you must first win in the workplace</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Slider;
