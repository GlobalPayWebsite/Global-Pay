"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import React from 'react';
import Image from 'next/image';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import Link from 'next/link';
import { motion } from 'framer-motion';

const banners = [
    {
        "heading": "Your Global",
        "sub-heading": "Partner",
        "paragraph": "At Global Pay Co., Ltd. we offer seamless solutions across recruitment, real estate, and educational consulting. Let us help you navigate your journey to success with tailored services for your needs.",
        "sub-tag": "Explore Our Services",
        "heading_jp": "あなたのグローバル",
        "sub-heading_jp": "パートナー",
        "paragraph_jp": "Global Pay Co., Ltd. では、人材採用、不動産、教育コンサルティングにわたるシームレスなソリューションを提供しています。お客様のニーズに合わせたサービスで、成功への道をお手伝いいたします。",
        "sub-tag_jp": "当社のサービスを探索する",
        "image": "/assets/global.jpg",
        "link": "/service/recruitment",
        "imagePosition": "object-top"
    },
    {
        "heading": "Recruitment",
        "sub-heading": "Service",
        "paragraph": "We connect skilled professionals with opportunities that align with their career goals and ambitions. Our team provides end-to-end support, from job matching to onboarding, helping individuals find roles that advance their careers and fulfill employer needs.",
        "sub-tag": "Get started",
        "heading_jp": "採用",
        "sub-heading_jp": "サービス",
        "paragraph_jp": "私たちは、キャリア目標や意欲に合った機会と才能あるプロフェッショナルを結びつけるお手伝いをしています。求職者と企業のニーズを満たす役割を見つけ、就職活動から雇用手続きに至るまで、包括的なサポートを提供しています。",
        "sub-tag_jp": "始める",
        "image": "https://splendid-hr.com/wp-content/uploads/2023/10/Human-Resource-Services.jpg",
        "link": "/service/recruitment",
        "imagePosition": "object-bottom"
    },
    {
        "heading": "Real Estate",
        "sub-heading": "Business",
        "paragraph": "Find your perfect home in Japan with our expert real estate consultancy. From cozy rentals to spacious family homes, we provide personalized, multilingual support to meet your needs.",
        "sub-tag": "Learn More",
        "heading_jp": "あなたのグローバル",
        "sub-heading_jp": "パートナー",
        "paragraph_jp": "Global Pay Co., Ltd. では、人材採用、不動産、教育コンサルティングにわたるシームレスなソリューションを提供しています。お客様のニーズに合わせたサービスで、成功への道をお手伝いいたします。",
        "sub-tag_jp": "当社のサービスを探索する",
        "image": "/assets/realstate.png",
        "link": "/service/realstate-consultant",
        "imagePosition": "object-center"
    },
    {
        "heading": "Immigration",
        "sub-heading": "Lawyer",
        "paragraph": "Expert legal assistance for smooth immigration processes, ensuring personalized guidance and support every step of the way.",
        "sub-tag": "Learn More",
        "heading_jp": "移民専門行政書士",
        "sub-heading_jp": "",
        "paragraph_jp": "スムーズな移行手続きのための専門的な法的支援を提供し、すべてのステップで個別のガイダンスとサポートをお約束します。",
        "sub-tag_jp": "当社のサービスを探索する",
        "image": "/assets/immigrations/cover-img.jpg",
        "link": "/service/immigration",
        "imagePosition": "object-center"
    },
    {
        "heading": "Abroad Education",
        "sub-heading": "Guidance",
        "paragraph": "We assist students in pursuing their academic dreams abroad, providing support from university selection to visa processing. Your future starts here.",
        "sub-tag": "Get started",
        "heading_jp": "あなたのグローバル",
        "sub-heading_jp": "パートナー",
        "paragraph_jp": "Global Pay Co., Ltd. では、人材採用、不動産、教育コンサルティングにわたるシームレスなソリューションを提供しています。お客様のニーズに合わせたサービスで、成功への道をお手伝いいたします",
        "sub-tag_jp": "当社のサービスを探索する",
        "image": "https://ukvisasuccess.com/wp-content/uploads/2020/10/student-graduation-scaled.jpg",
        "link": "/service/educational-consultant",
        "imagePosition": "object-bottom"
    }
]


export default function BannerCarousel() {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className='w-full'>
            <Swiper pagination={{
                clickable: true,
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
            }}
                modules={[Pagination, Autoplay]}
                className="mySwiper pb-10 h-[420px] w-full overflow-x-hidden"
                autoplay={{
                    delay: 3000, // 3 seconds
                    disableOnInteraction: false,
                }}
            >
                {banners?.map((item, key) => (
                    <SwiperSlide key={key} className='relative'>
                        <div className='w-full h-[100vh] md:h-[800px]'>
                            <div className='absolute top-0 left-0 bg-[rgba(10,0,0,0.4)] w-full h-full'>
                                <div className='box-container py-5 flex items-center justify-start h-full '>
                                    <motion.div
                                        className='w-[720px] text-white flex flex-col gap-2'
                                        initial={{ opacity: 0, y: -100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.9, delay: 0.4 }}
                                    >
                                        <h1 className='text-[3rem] lg:text-[3.5rem] leading-tight font-[700]'>
                                            <span>{toggleLanguage({
                                                engTxt: item['heading'],
                                                japTxt: item['heading_jp']
                                            })}</span>
                                            <br />
                                            <span>{toggleLanguage({
                                                engTxt: item['sub-heading'],
                                                japTxt: item['sub-heading_jp']
                                            })}</span>
                                        </h1>
                                        <p>{toggleLanguage({
                                            engTxt: item['paragraph'],
                                            japTxt: item['paragraph_jp']
                                        })}</p>
                                        <div className='mt-1'>
                                            <Link href={item.link} className='px-3 py-1.5 bg-white rounded-md text-black'>
                                                {toggleLanguage({
                                                    engTxt: item['sub-tag'],
                                                    japTxt: item['sub-tag_jp']
                                                })}
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <Image width={100} unoptimized={true} height={700} src={item.image || ""} className={`w-full h-[420px] object-cover ${item?.imagePosition || ""}`} alt='banner' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
