"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsCard from './NewsCard';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './news.css'
import { newsList } from '@/utils/data/news/newsData';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';



const News: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className="flex flex-col box-container pt-[64px] bg-background overflow-hidden">
            <motion.div
                className='flex flex-col w-full items-center'
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h2 className="text-xl sm:text-3xl font-bold mb-3 text-theme">{toggleLanguage({
                    engTxt: "News and Updates",
                    japTxt: "ニュースとアップデート"
                })}</h2>
                <p className="text-center mb-8 max-w-[720px]">
                    {toggleLanguage({
                        engTxt: "Stay up to date with the latest news and updates from our team. Learn more about our services, job placements, and career advice.",
                        japTxt: "チームからの最新ニュースとアップデートをご覧ください。当社のサービス、就職斡旋、キャリアアドバイスについてもっと詳しく知ることができます。"
                    })}
                </p>
            </motion.div>

            {/* Swiper Carousel */}
            <motion.div
                className='w-full'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20} // Space between slides
                    slidesPerView={1} // Initially, show one slide
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // For mobile screens
                        },
                        768: {
                            slidesPerView: 2, // For tablets
                        },
                        1024: {
                            slidesPerView: 2, // For desktops
                        },
                        1280: {
                            slidesPerView: 4, // For large desktops
                        }
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 5 // Show a maximum of 6 bullets (1 center + 5 surrounding)
                    }}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false,
                    }}
                    className="w-full pb-20"
                >
                    {newsList.map((details, index) => (
                        <SwiperSlide key={index} className='flex w-full bg-white border hover:shadow-2xl transition-all delay-100 cursor-pointer rounded-lg overflow-hidden'>
                            <NewsCard details={details} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
};

export default News;
