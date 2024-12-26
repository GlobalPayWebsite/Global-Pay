"use client";
import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';

// OUR SERVICES
// We offer a range of expert services designed to support your career and life abroad, including job placements, SSW visa assistance, and personalized guidance for a seamless experience.
// 当社のサービス
// 当社は、就職斡旋、SSW ビザのサポート、シームレスな体験のための個別ガイダンスなど、あなたのキャリアと海外生活をサポートするために設計された幅広い専門サービスを提供します。



// Job Placement Assistance (就職支援)
// Helping individuals find the right job opportunities under the SSW program.
// (SSW プログラムに基づいて適合する就職機会を見つけるのを支援します。)
// Comprehensive Support for SSW (i) and SSW (ii) (SSW(i)とSSW(ii)の包括的なサポート)
// Assistance for those pursuing SSW visas and the transition process. (SSW ビザ取得および移行プロセスを支援します。)
// Support for Graduates (卒業生へのサポート)
// Dedicated services for graduates pursuing global career opportunities. (グローバルなキャリアの機会を追求する卒業生向けの専用サービス。)
// Industry-Specific Expertise (業界固有の専門知識)
// Expert guidance in various industries, matching you with relevant roles. (さまざまな業界の専門家による指導により、お客様と関連するポジションにフィットさせます。)
// Personalized Career Counseling (個別のキャリアカウンセリング)
// One-on-one career guidance tailored to your goals and needs. (お客様の目標やニーズに合わせたマンツーマンのキャリアガイダンス。)
// End-to-End Recruitment Services (エンドツーエンドの採用サービス)
// Full recruitment services to simplify the hiring and onboarding process. (採用と新人研修のプロセスを簡素化するための完全な人材採用サービス。)
// Employer Partnerships  (雇用主とのパートナーシップ)
// We partner with employers to match candidates with suitable roles. (当社は雇用主と提携して、候補者を最適な仕事にマッチングします。

// Family Support for SSW (ii) Holders  --- (SSW(ii)保有者向けファミリーサポート)
// Family Support for SSW (ii) Holders--- SSW(ii)保有者向けファミリーサポート

export interface ServiceData {
    title: string;
    title_jp: string;
    description: string;
    description_jp: string;
    icon: JSX.Element;
}
const servicesData: ServiceData[] = [
    {
        title: "Job Placement Assistance",
        title_jp: "就職支援",
        description: "Helping individuals find the right job opportunities under the SSW program.",
        description_jp: "SSWプログラムの下で適切な仕事の機会を見つけるのを支援します。",
        icon: <i className="fa-solid fa-briefcase"></i>,
    },
    {
        title: "Comprehensive Support for SSW (i) and SSW (ii)",
        title_jp: "SSW（i）およびSSW（ii）の包括的なサポート",
        description: "Assistance for those pursuing SSW visas and the transition process.",
        description_jp: "SSWビザ取得および移行プロセスを支援します。",
        icon: <i className="fa-solid fa-passport"></i>,
    },
    {
        title: "Support for Graduates",
        title_jp: "卒業生へのサポート",
        description: "Dedicated services for graduates pursuing global career opportunities.",
        description_jp: "グローバルなキャリアの機会を追求する卒業生向けの専用サービス。",
        icon: <i className="fa-solid fa-user-graduate"></i>,
    },
    {
        title: "Industry-Specific Expertise",
        title_jp: "業界固有の専門知識",
        description: "Expert guidance in various industries, matching you with relevant roles.",
        description_jp: "さまざまな業界の専門家による指導により、お客様と関連するポジションにフィットさせます。",
        icon: <i className="fa-solid fa-industry"></i>,
    },
    {
        title: "Personalized Career Counseling",
        title_jp: "個別のキャリアカウンセリング",
        description: "One-on-one career guidance tailored to your goals and needs.",
        description_jp: "お客様の目標やニーズに合わせたマンツーマンのキャリアガイダンス。",
        icon: <i className="fa-solid fa-chalkboard-teacher"></i>,
    },
    {
        title: "End-to-End Recruitment Services",
        title_jp: "エンドツーエンドの採用サービス",
        description: "Full recruitment services to simplify the hiring and onboarding process.",
        description_jp: "採用と新人研修のプロセスを簡素化するための完全な人材採用サービス。",
        icon: <i className="fa-solid fa-users"></i>,
    },
    {
        title: "Employer Partnerships",
        title_jp: "雇用主とのパートナーシップ",
        description: "We partner with employers to match candidates with suitable roles.",
        description_jp: "当社は雇用主と提携して、候補者を最適な仕事にマッチングします。",
        icon: <i className="fa-solid fa-handshake"></i>,
    },
    {
        title: "Family Support for SSW (ii) Holders",
        title_jp: "SSW（ii）保持者のファミリーサポート",
        description: "Family Support for SSW (ii) Holders.",
        description_jp: "SSW(ii)保有者向けファミリーサポート。",
        icon: <i className="fa-solid fa-home"></i>,
    },
];


const OurServices: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    const animateFromRight = {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 },
    }
    const animateFromLeft = {
        initial: { opacity: 0, x: -200 },
        animate: { opacity: 1, x: 0 },
    }
    return (
        <div className='bg-background py-[64px] px-8 overflow-x-hidden w-full'>
            <motion.div
                className="w-full overflow-x-hidden"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className="max-w-7xl mx-auto text-center flex flex-col gap-5">
                    <h2 className="text-3xl font-extrabold text-theme">
                        {toggleLanguage({
                            engTxt: "OUR SERVICES",
                            japTxt: "当社のサービス"
                        })}
                    </h2>
                    <div className="text-lg text-gray-700 flex items-center justify-center">
                        <p className='max-w-[720px] text-[16px]'>
                            {toggleLanguage({
                                engTxt: " We offer a range of expert services designed to support your career and life abroad, including job placements, SSW visa assistance, and personalized guidance for a seamless experience.",
                                japTxt: "当社は、就職斡旋、SSW ビザのサポート、シームレスな体験のための個別ガイダンスなど、あなたのキャリアと海外生活をサポートするために設計された幅広い専門サービスを提供します。"
                            })}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={index % 2 === 1 ? animateFromRight.initial : animateFromLeft.initial}
                                whileInView={index % 2 === 1 ? animateFromRight.animate : animateFromLeft.animate}
                                transition={{ duration: 0.7, delay: 0.2 }}

                            >
                                <ServiceCard
                                    key={index}
                                    data={service}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default OurServices;
