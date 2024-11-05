"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';


// Recruitment
// Connect qualified candidates with top employers, providing tailored job placement, resume preparation, and interview support to ensure the right fit for both candidates and businesses.
// 雇用
// 適任の候補者と一流の雇用主を結びつけ、カスタマイズされた就職斡旋、履歴書の準備、面接サポートを提供して、候補者と企業の両方に適切にマッチするようにします。







// SSW
// SSW (Specified Skilled Worker) visa services assist skilled workers in obtaining the necessary visas to work in Japan, offering guidance on application procedures and ensuring compliance with immigration requirements.
// 特定技能労働者
// SSW (特定技能労働者) ビザ サービスは、熟練労働者が日本で働くために必要なビザの取得を支援し、申請手続きに関するガイダンスを提供し、入国要件の遵守を保証します。



// Real EState
// Help clients navigate the Japanese property market, offering expert guidance on buying, selling, or renting properties, with personalized support for both residential and commercial needs.
// 不動産
// 住宅と商業の両方のニーズに合わせた個別のサポートを提供し、不動産の購入、売却、賃貸に関する専門家によるガイダンスを提供し、お客様が日本の不動産市場をナビゲートできるよう支援します。



// Education:Offers personalized guidance for students seeking to study in Japan, helping with school selection, application processes, and visa support to ensure a smooth transition into academic life.
// 教育:日本への留学を希望する学生に個別の指導を提供し、学校選択、出願手続き、ビザサポートなどを支援し、学業生活へのスムーズな移行を保証します。


const services = [
    {
        title: "Recruitment",
        title_jp: "雇用",
        description: "Connect qualified candidates with top employers, providing tailored job placement, resume preparation, and interview support to ensure the right fit for both candidates and businesses.",
        description_jp: "適任の候補者と一流の雇用主を結びつけ、カスタマイズされた就職斡旋、履歴書の準備、面接サポートを提供して、候補者と企業の両方に適切にマッチするようにします。",
        iconUrl: '/assets/icons/recruitment1.png',
    },
    {
        title: "SSW",
        title_jp: "特定技能労働者",
        description: "SSW (Specified Skilled Worker) visa services assist skilled workers in obtaining the necessary visas to work in Japan, offering guidance on application procedures and ensuring compliance with immigration requirements.",
        description_jp: "SSW (特定技能労働者) ビザ サービスは、熟練労働者が日本で働くために必要なビザの取得を支援し、申請手続きに関するガイダンスを提供し、入国要件の遵守を保証します。",
        iconUrl: '/assets/icons/approved.png',
    },
    {
        title: "Real Estate",
        title_jp: "不動産",
        description: "Help clients navigate the Japanese property market, offering expert guidance on buying, selling, or renting properties, with personalized support for both residential and commercial needs.",
        description_jp: "住宅と商業の両方のニーズに合わせた個別のサポートを提供し、不動産の購入、売却、賃貸に関する専門家によるガイダンスを提供し、お客様が日本の不動産市場をナビゲートできるよう支援します。",
        iconUrl: '/assets/icons/realstate.png',
    },
    {
        title: "Education",
        title_jp: "教育",
        description: "Offers personalized guidance for students seeking to study in Japan, helping with school selection, application processes, and visa support to ensure a smooth transition into academic life.",
        description_jp: "日本への留学を希望する学生に個別の指導を提供し、学校選択、出願手続き、ビザサポートなどを支援し、学業生活へのスムーズな移行を保証します。",
        iconUrl: '/assets/icons/image.png',
    },
];



const WhatWeDO = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className={`flex flex-col gap-3 items-center bg-white rounded-lg p-6 border-2 hover:shadow-2xl hover:border-theme `}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="p-3 bg-background border-2 border-theme rounded-lg">
                        <Image src={service.iconUrl} alt={service.title} height={40} width={40} className='w-7 h-7 object-contain' />
                    </div>
                    <h3 className="text-xl font-semibold">{toggleLanguage({
                        engTxt: service.title,
                        japTxt: service.title_jp
                    })}</h3>
                    <p className="text-gray-500 text-center text-md">{toggleLanguage({
                        engTxt: service.description,
                        japTxt: service.description_jp
                    })}</p>
                    {/* <button className="bg-theme text-white px-4 py-1 text-xs rounded-full hover:bg-red-600 transition">
                        Learn More
                    </button> */}
                </motion.div>
            ))}
        </div>
    );
};

export default WhatWeDO;

// const WhatWeDO = () => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//                 <div
//                     key={index}
//                     className={`flex flex-col gap-3 items-center justify-between bg-white rounded-lg p-6 border-2 hover:shadow-md hover:border-theme `}
//                 >
//                     <div className="p-3 bg-background border-2 border-theme rounded-lg">
//                         <Image src={service.iconUrl} alt={service.title} height={40} width={40} className='w-7 h-7 object-contain' />
//                     </div>
//                     <h3 className="text-xl font-semibold">{service.title}</h3>
//                     <p className="text-gray-500 text-center text-xs">{service.description}</p>
//                     <button className="bg-theme text-white px-4 py-1 text-xs rounded-full hover:bg-red-600 transition">
//                         Learn More
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default WhatWeDO;
