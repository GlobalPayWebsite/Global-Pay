"use client";
import Image from 'next/image';
import React from 'react';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';

const CompanyProfile: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();

    return (
        <div className="flex items-center justify-center bg-gray-100 box-container py-[64px]">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-[720px] w-full">

                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-full p-2">
                        <Image width={20} height={20} unoptimized src="/assets/logo.png" alt="Global Pay Logo" className="w-10 h-10 sm:w-20 sm:h-20 rounded-full" />
                    </div>
                    <div>
                        <h1 className="text-sm sm:text-2xl font-bold text-theme ">GLOBAL PAY Co., Ltd.</h1>
                        <p className="text-xs sm:text-sm text-gray-600 ">
                            {toggleLanguage({
                                engTxt: "Empowering Your Global Opportunities",
                                japTxt: "グローバルな機会を強化する"
                            })}
                            </p>
                    </div>
                </div>
                <div className="border-t border-b py-4">
                    <h2 className="text-xl font-bold mb-4  text-theme">
                        {toggleLanguage({
                            engTxt: "Company Overview",
                            japTxt: "会社概要"
                        })}
                        
                    </h2>
                    <p className="text-sm"><strong>
                        
                        {toggleLanguage({
                            engTxt: "Headquarters:",
                            japTxt: "本社所在地:"
                        })}
                    </strong>
                        {toggleLanguage({
                            engTxt: " 1-chome 20-17 Hyakunincho, Shinjuku-ku, Tokyo",
                            japTxt: " 東京都新宿区百人町１－２０－１７　星野ビル１０１号室 "
                        })}
                        </p>
                    <p className="text-sm"><strong>
                        {toggleLanguage({
                            engTxt: "Establishment Date:",
                            japTxt: "設立:"
                        })}
                        </strong>
                        {toggleLanguage({
                            engTxt: " April 20, 2021",
                            japTxt: " 令和３年４月２０日"
                        })}
                        </p>
                    <p className="text-sm"><strong>
                        {toggleLanguage({
                            engTxt: "Representative:",
                            japTxt: "代表者:"
                        })}
                        </strong>
                        {toggleLanguage({
                            engTxt: " Neure Nabin",
                            japTxt: " ニウレ・ナビン"
                        })}
                        </p>
                    <p className="text-sm"><strong>
                        {toggleLanguage({
                            engTxt: "Capital:",
                            japTxt: "資本金:"
                        })}</strong>
                        {toggleLanguage({
                            engTxt: " 10 million yen",
                            japTxt: " 1,000万円"
                        })}
                        </p>
                    {/* <p className="text-sm"><strong>Number of Employees:</strong> 4</p> */}
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4 text-theme">
                        {toggleLanguage({
                            engTxt: "Business Activities",
                            japTxt: "事業内容"
                        })}
                    </h2>
                    <ul className="list-none space-y-2 text-sm">
                        <li>
                            {toggleLanguage({
                                engTxt: "I. Recruitment",
                                japTxt: "I. 採用"
                            })}
                        </li>
                        <li>
                            {toggleLanguage({
                                engTxt: "II. SSW (Specialist in Strategic Workforce)",
                                japTxt: "II. SSW (特定技能労働者)"
                            })}
                        </li>
                        <li>
                            {toggleLanguage({
                                engTxt: "III. Real Estate Consultant",
                                japTxt: "III. 不動産コンサルタント"
                            })}
                        </li>
                        <li>
                            {toggleLanguage({
                                engTxt: "IV. Educational Consultant",
                                japTxt: "IV. 教育コンサルタント"
                            })}
                        </li>
                        <li>
                            {toggleLanguage({
                                engTxt: "V. Travel Consultant",
                                japTxt: "V. 旅行コンサルタント"
                            })}
                        </li>
                    </ul>
                </div>

                {/* <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4  text-theme">Business Activities</h2>
                    <ul className="list-none space-y-2 text-sm">
                        <li>I. Recruitment</li>
                        <li>II. SSW (Specialist in Strategic Workforce)</li>
                        <li>III. Real Estate Consultant</li>
                        <li>IV. Educational Consultant</li>
                        <li>V. Travel Consultant</li>
                    </ul>
                </div> */}

                <div className="mt-6 border-t pt-4  flex flex-col gap-2 ">
                    <h2 className="text-xl font-bold text-theme">{toggleLanguage({
                        engTxt: "Contact Us",
                        japTxt: "問い合わせ"
                    })}</h2>
                    <p className="text-sm">
                        {toggleLanguage({
                            engTxt: "Email: info@globalpay.co.jp",
                            japTxt: "メール: info@globalpay.co.jp"
                        })}</p>
                    <p className="text-sm">
                        {toggleLanguage({
                            engTxt: "Phone: +81 03-6687-7736",
                            japTxt: "電話: +81 03-6687-7736"
                    })}
                        </p>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
