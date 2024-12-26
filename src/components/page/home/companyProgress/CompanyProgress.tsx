"use client";
import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';

// COMPANY PROGRESS
// Our company is dedicated to delivering excellent service, helping clients achieve their goals with tailored solutions. With a focus on quality and client satisfaction, we’re here to support you every step of the way.

// 会社の進展
// 当社は、優れたサービスを提供し、お客様に合わせたソリューションで目標を達成できるよう支援することに専念しています。焦点を当てて

// 125
// Satified Clients (満足したクライアント数)
// 103
// Projects Completed (完了したプロジェクト数)

// 178
// Hours Saved (節約された時間)


const data = [
    {
        title: "Positive Reviews",
        title_jp: "満足の声",
        count: 125,
        icon: <i className="fas review-icon fas fa-star review-icon" />,
        icon1: <i className="fas review-icon fas fa-star review-icon" />,
        icon2: <i className="fas review-icon fas fa-star review-icon" />
    },
    {
        title: "Community Engagement",
        title_jp: "地域社会との関わり",
        count: 37,
        icon: <i className="fas fa-users stat-icon fa-1x" />,
    },
    {
        title: "Business Partners",
        title_jp: "ビジネスパートナー",
        count: 106,
        icon: <i className="fas fa-calendar-alt stat-icon fa-1x" />
    }
]

const CompanyProgress: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    const animateFromBottom = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
    }
    return (
        <div
            className="flex flex-col box-container py-[64px] bg-background w-full h-fit overflow-hidden"
        >
            <motion.div
                className='flex flex-col w-full items-center'
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h2 className="text-xl md:text-3xl font-bold mb-3 text-theme">{
                    toggleLanguage({
                        engTxt: "COMPANY PROGRESS",
                        japTxt: "会社の進展"
                    })
                }</h2>
                <p className="text-center mb-8 max-w-[720px]">
                    {toggleLanguage({
                        engTxt: "Our company is dedicated to delivering excellent service, helping clients achieve their goals with tailored solutions. With a focus on quality and client satisfaction, we’re here to support you every step of the way.",
                        japTxt: "当社は、優れたサービスを提供し、お客様に合わせたソリューションで目標を達成できるよう支援することに専念しています。品質と顧客満足度に重点を置き、あらゆる段階でお客様をサポ​​ートいたします。"
                    })}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full h-fit">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`${index == data.length - 1 ? "md:col-span-3 lg:col-span-1" : ""} bg-theme text-white p-6 rounded-lg text-center flex flex-col items-center gap-3`}
                        initial={animateFromBottom.initial}
                        whileInView={animateFromBottom.animate}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div>
                            <span className='text-3xl'>
                                {item.icon} {item.icon1} {item.icon2} {item.icon2} {item.icon2}
                            </span>
                        </div>
                        <div className="text-6xl font-bold">
                            <CountUp start={0} end={item.count} duration={3} />
                        </div>
                        <div className="text-xl">{toggleLanguage({
                            engTxt: item.title,
                            japTxt: item.title_jp
                        })}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CompanyProgress;
