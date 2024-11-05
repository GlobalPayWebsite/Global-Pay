"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useToggleLanguageConversion } from "@/utils/hooks/hooks";

// WHY CHOOSE US? (当社を選ぶ理由)
// We offer exceptional services and personalized support, guiding you every step of the way. (当社は優れたサービスと個別のサポートを提供し、あらゆる段階でお客様をサポートします。

// Job Placement Expertise (職業紹介の専門知識)
// Empowering Your Career Journey, we specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals. (お客様のキャリアの旅路をサポートします。当社は、個人が適切な求人を見つけるお手伝いを専門に行っています。当社のチームは、雇用主と密接に連携し、候補者のスキルやキャリア目標に合ったポジションを提案します。)
// Personalized Guidance and Support (個別指導とサポート)
// We support each student based on their academic goals, career aspirations, and personal preferences. Our comprehensive services include selecting the right universities and courses, assisting with application processes, and guiding through visa requirements.

// (当社は、学生一人ひとりの学業目標、キャリアの希望、個人的な好みに基づいてサポートを提供します。当社の包括的なサービスには、適切な大学やコースの選定、申請手続きのサポート、ビザ要件のガイダンスが含まれます。)

// Comprehensive SSW Visa Support (SSWビザの包括的サポート)
// Our team assists you throughout the SSW visa process, from documentation to final placement.
// (私たちのチームは、SSWビザの申請プロセス全般をサポートします。書類作成から最終的な配置まで、すべての手続きをお手伝いします。)


// Comprehensive Rental Assistance (包括的な賃貸サポート)
// Finding Your Ideal Rental in Japan, Hassle-Free. Our team is dedicated to helping you find the affordable rental property in Japan. We provide end-to-end support in finding the affordable rental apartment in Japan.
// (日本で手頃な賃貸物件を、手間なく見つけるお手伝いをします。当社のチームは、日本で手頃な賃貸物件を見つけるために、最初から最後までサポートを提供します。)

// Airline Ticket Sales (航空券販売)
// We sell airline tickets from Japan to any country, offering competitive pricing and exclusive deals to ensure our clients get the best value for their travel.
// 当社は、日本から世界中の国への航空券を販売しており、競争力のある価格と独自の特典を提供して、お客様が旅行において最良の価値を得られるようサポートします。



const data = [
    {
        title: "Job Placement Expertise",
        title_jp: "職業紹介の専門知識",
        description: " Empowering Your Career Journey We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.",
        description_jp: "お客様のキャリアの旅路をサポートします。当社は、個人が適切な求人を見つけるお手伝いを専門に行っています。当社のチームは、雇用主と密接に連携し、候補者のスキルやキャリア目標に合ったポジションを提案します。",
    },
    {
        title: "Personalized Guidance and Support",
        title_jp: "個別指導とサポート",
        description: "We support each student based on their academic goals, career aspirations, and personal preferences. Our comprehensive services include selecting the right universities and courses, assisting with application processes, and guiding through visa requirements.",
        description_jp: "当社は、学生一人ひとりの学業目標、キャリアの希望、個人的な好みに基づいてサポートを提供します。当社の包括的なサービスには、適切な大学やコースの選定、申請手続きのサポート、ビザ要件のガイダンスが含まれます。",
    },
    {
        title: "Comprehensive SSW Visa Support",
        title_jp: "SSWビザの包括的サポート",
        description: "Our team assists you throughout the SSW visa process, from documentation to final placement.",
        description_jp: "私たちのチームは、SSWビザの申請プロセス全般をサポートします。書類作成から最終的な配置まで、すべての手続きをお手伝いします.",
    },
    {
        title: "Comprehensive Rental Assistance",
        title_jp: "包括的な賃貸サポート",
        description: "Finding Your Ideal Rental in Japan, Hassle-Free. Our team is dedicated to helping you find the affordable rental property in Japan. We provide end-to-end support in finding the affordable rental apartment in Japan.",
        description_jp: "日本で手頃な賃貸物件を、手間なく見つけるお手伝いをします。当社のチームは、日本で手頃な賃貸物件を見つけるために、最初から最後までサポートを提供します。",
    },
    {
        title: "Airline Ticket Sales",
        title_jp: "航空券販売",
        description: "We sell airline tickets from Japan to any country, offering competitive pricing and exclusive deals to ensure our clients get the best value for their travel.",
        description_jp: "当社は、日本から世界中の国への航空券を販売しており、競争力のある価格と独自の特典を提供して、お客様が旅行において最良の価値を得られるようサポートします。",
    }
]

const WhyChooseUs: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className="bg-white box-container py-[64px] flex items-center justify-center w-full overflow-x-hidden">
            <div
                className="max-w-[720px] lg:max-w-full"

            >
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h2 className="text-center text-xl sm:text-3xl font-bold text-theme mb-2">
                        {toggleLanguage({
                            engTxt: "WHY CHOOSE US?",
                            japTxt: "当社を選ぶ理由"
                        })}

                    </h2>
                    <div className="flex items-center justify-center">
                        <p className="text-center text-lg text-dark mb-10">
                            {toggleLanguage({
                                engTxt: "We offer exceptional services and personalized support, guiding you every step of the way.",
                                japTxt: "当社は優れたサービスと個別のサポートを提供し、あらゆる段階でお客様をサポートします。"
                            })}
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 items-center">
                    <div className="space-y-6">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <div className="bg-success rounded-full p-2.5 mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="white"
                                        className="w-7 h-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-dark">{
                                        toggleLanguage({
                                            engTxt: item.title,
                                            japTxt: item.title_jp
                                        })
                                        || ""}</h3>
                                    <p className="text-gray-600">
                                        {
                                            toggleLanguage({
                                                engTxt: item.description,
                                                japTxt: item.description_jp
                                            })
                                            || ""}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center items-start w-full">
                        <motion.div
                            className="border p-2 w-full"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <Image
                                src="/assets/whyus.jpg" // Replace this with the correct path for your image
                                alt="Why Choose Us"
                                className="w-full h-full object-cover"
                                width={500}
                                height={500}
                                unoptimized
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
