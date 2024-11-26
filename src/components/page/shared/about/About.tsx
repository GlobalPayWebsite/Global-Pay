"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import WhatWeDO from './WhatWeDo';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';

const aboutUsData = {
    title: "About Us",
    title_jp: "当社について",
    sub_title: "Don’t miss the chance to connect with us today!",
    sub_title_jp: "今日、当社とつながるチャンスをお見逃しなく",
    description: "We offer expert consulting services in recruitment, SSW visas, real estate, education, and travel, providing personalized support and guidance tailored to each client's needs.",
    description_jp: "「当社は、雇用、SSWビザ、不動産、教育、旅行における専門的なコンサルティングサービスを提供しており、各クライアントのニーズに合わせたパーソナライズされたサポートとガイダンスを行っています。」",
}

const AboutUs: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div
            className="box-container py-[64px] flex flex-col gap-5 overflow-x-hidden"
        >
            <motion.h4
                className="text-theme font-semibold mb-2 text-left text-4xl"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
            >
                {toggleLanguage({
                    engTxt: aboutUsData.title,
                    japTxt: aboutUsData.title_jp
                })}
            </motion.h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Text Section */}
                <motion.div
                    className="w-full flex flex-col gap-5"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                >
                    <div className="w-full">
                        <h1 className="text-4xl mb-4">
                            {toggleLanguage({
                                engTxt: aboutUsData.sub_title,
                                japTxt: aboutUsData.sub_title_jp
                            })}
                        </h1>
                        <p className="text-gray-600">
                            {toggleLanguage({
                                engTxt: aboutUsData.description,
                                japTxt: aboutUsData.description_jp
                            })}
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex items-start">
                                <span className="text-green-500 text-2xl mr-2">🏅</span>
                                <div>
                                    <h4 className="text-lg font-semibold">{toggleLanguage({
                                        engTxt: "Year's Of Experience",
                                        japTxt: "経験年数"
                                    })}</h4>
                                    {/* <p className="text-gray-600">10+ Years</p> */}
                                </div>
                            </div>
                            <div className="flex items-start mr-8">
                                <span className="text-green-500 text-2xl mr-2">📞</span>
                                <div>
                                    <h4 className="text-lg font-semibold">
                                        {toggleLanguage({
                                            engTxt: "Tel",
                                            japTxt: "電話"
                                        })}
                                    </h4>
                                    <p className="text-gray-600">+81 03-6687-7736</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <motion.div
                            className="w-full h-[400px]"
                            initial={{ scale: 0.8, opacity: 0.7 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Image
                                src="/assets/about-us.jpg"
                                alt="Business illustration"
                                className="w-full h-full object-cover object-center"
                                width={40}
                                height={40}
                                unoptimized
                            />
                        </motion.div>

                        {/* <motion.button
                            className="w-fit bg-theme text-white px-6 py-2 rounded-md text-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <a href="/about-us">{toggleLanguage({
                                engTxt: "Discover Now",
                                japTxt: "今すぐ発見"
                            })}</a>
                        </motion.button> */}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                >
                    <WhatWeDO />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
