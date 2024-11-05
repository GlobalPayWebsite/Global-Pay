"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';

interface CeoMessageProps {
  bg?: boolean;
}


// Message from CEO (CEOからのメッセージ)

// CEO Nabin Neure (CEO ナビン・ヌレ)
// Global Pay has been instrumental in bridging the gap between foreign nationals and the Japanese community, significantly enhancing the quality of life for those residing in Japan. With a growing number of foreigners in Japan, many face challenges such as language barriers and a demanding work environment. Our diverse team, with its extensive range of experiences and backgrounds, is uniquely equipped to address these issues. At Global Pay, we take pride in offering comprehensive and personalized services tailored to your diverse needs. Our dedicated team is committed to providing exceptional job placement assistance, supporting graduates, and offering expert career counseling. Through our strong partnerships with employers, we ensure you have access to exclusive job opportunities. For our Specified Skilled Workers (SSW), we provide end-to-end support, from visa applications to family relocation assistance, ensuring a smooth transition and successful integration into the Japanese workforce. Our real estate consultants assist you in finding the perfect rental apartment, with multilingual support to facilitate a seamless process. We also guide students in their journey to study abroad, offering personalized support from selecting universities and courses to handling application processes and visa requirements. Additionally, our travel consultants offer competitive pricing and exclusive deals on airline tickets, ensuring you get the best value for your travels. Thank you for choosing Global Pay. We look forward to serving you and helping you achieve your goals.
// (Global Pay は、外国人と日本人コミュニティとの間の溝を埋めるのに役立ち、日本に居住する人々の生活の質を大幅に向上させてきました。日本に住む外国人の数が増えるにつれ、多くの人が言葉の壁や厳しい労働環境などの課題に直面しています。幅広い経験と背景を持つ当社の多様なチームは、これらの問題に対処する独自の能力を備えています。 Global Pay では、お客様の多様なニーズに合わせてカスタマイズされた包括的なサービスを提供することに誇りを持っています。私たちの専任チームは、優れた就職支援、卒業生のサポート、専門家のキャリアカウンセリングの提供に尽力しています。雇用主との強力なパートナーシップを通じて、当社はあなたが独占的な雇用機会に確実にアクセスできるようにします。当社の特定技能労働者（SSW）に対しては、ビザ申請から家族の転勤支援に至るまで、エンドツーエンドのサポートを提供し、スムーズな移行と日本の労働力への統合の成功を保証します。当社の不動産コンサルタントは、スムーズなプロセスを促進するために多言語サポートを提供し、完璧な賃貸アパート探しをお手伝いします。また、大学やコースの選択から申請プロセスやビザの要件の処理まで、個別のサポートを提供して、学生の海外留学への旅をガイドします。さらに、当社の旅行コンサルタントは、航空券の競争力のある価格設定と限定セールを提供し、お客様が最高の価値で旅行できることを保証します。 Global Pay をお選びいただきありがとうございます。私たちは、お客様にサービスを提供し、お客様の目標達成をお手伝いできることを楽しみにしています。


const CeoMessage: React.FC<CeoMessageProps> = ({ bg = false }) => {
  const { toggleLanguage } = useToggleLanguageConversion();
  return (
    <div className={`box-container py-[64px] overflow-hidden ${bg && "bg-background"}`}>
      <motion.h1
        className="text-3xl font-extrabold text-theme text-center mb-20"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {toggleLanguage({
          engTxt: "Message from CEO",
          japTxt: "CEOからのメッセージ"
        })}
      </motion.h1>

      <motion.div
        className='flex items-center justify-center w-full'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative bg-white rounded-lg shadow-lg p-5 border max-w-[1024px]">
          {/* Profile Image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div>
              <Image
                src="/assets/ceo.jpg"
                alt="Person"
                className="w-32 h-32 rounded-full border border-black  object-cover"
                width={128}
                height={128}
                unoptimized
              />
            </div>

          </div>

          {/* Content */}
          <div className='mt-20'>
            <h1 className='text-center text-lg font-semibold'>
              {toggleLanguage({
                engTxt: "CEO Nabin Neure",
                japTxt: "ナビン・ヌレ"
              })}

            </h1>
            <div className="w-full">
              <p className="text-gray-600 mb-4 text-sm ">
                <span className='text-green-500 mr-2'>
                  {/* start quote icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 inline-block">
                    <path d="M5 11.05v7.05h4.882l.728-6.512c.355-3.187-2.335-5.538-4.662-5.538-.94 0-1.948.328-2.615.812-1.052.788-1.66 1.838-1.66 3.238 0 1.202.598 2.238 1.327 2.935zm14 0v7.05h4.882l.728-6.512c.355-3.187-2.335-5.538-4.662-5.538-.94 0-1.948.328-2.615.812-1.052.788-1.66 1.838-1.66 3.238 0 1.202.598 2.238 1.327 2.935z" />
                  </svg>
                </span>

                {toggleLanguage({
                  engTxt: "Global Pay has been instrumental in bridging the gap between foreign nationals and the Japanese community, significantly enhancing the quality of life for those residing in Japan. With a growing number of foreigners in Japan, many face challenges such as language barriers and a demanding work environment. Our diverse team, with its extensive range of experiences and backgrounds, is uniquely equipped to address these issues. At Global Pay, we take pride in offering comprehensive and personalized services tailored to your diverse needs. Our dedicated team is committed to providing exceptional job placement assistance, supporting graduates, and offering expert career counseling. Through our strong partnerships with employers, we ensure you have access to exclusive job opportunities. For our Specified Skilled Workers (SSW), we provide end-to-end support, from visa applications to family relocation assistance, ensuring a smooth transition and successful integration into the Japanese workforce. Our real estate consultants assist you in finding the perfect rental apartment, with multilingual support to facilitate a seamless process. We also guide students in their journey to study abroad, offering personalized support from selecting universities and courses to handling application processes and visa requirements. Additionally, our travel consultants offer competitive pricing and exclusive deals on airline tickets, ensuring you get the best value for your travels. Thank you for choosing Global Pay. We look forward to serving you and helping you achieve your goals.",
                  japTxt: "Global Pay は、外国人と日本人コミュニティとの間の溝を埋めるのに役立ち、日本に居住する人々の生活の質を大幅に向上させてきました。日本に住む外国人の数が増えるにつれ、多くの人が言葉の壁や厳しい労働環境などの課題に直面しています。幅広い経験と背景を持つ当社の多様なチームは、これらの問題に対処する独自の能力を備えています。 Global Pay では、お客様の多様なニーズに合わせてカスタマイズされた包括的なサービスを提供することに誇りを持っています。私たちの専任チームは、優れた就職支援、卒業生のサポート、専門家のキャリアカウンセリングの提供に尽力しています。雇用主との強力なパートナーシップを通じて、当社はあなたが独占的な雇用機会に確実にアクセスできるようにします。当社の特定技能労働者（SSW）に対しては、ビザ申請から家族の転勤支援に至るまで、エンドツーエンドのサポートを提供し、スムーズな移行と日本の労働力への統合の成功を保証します。当社の不動産コンサルタントは、スムーズなプロセスを促進するために多言語サ"
                })}
                <span className='text-green-500 ml-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 inline-block">
                    <path d="M5 11.05v7.05h4.882l.728-6.512c.355-3.187-2.335-5.538-4.662-5.538-.94 0-1.948.328-2.615.812-1.052.788-1.66 1.838-1.66 3.238 0 1.202.598 2.238 1.327 2.935zm14 0v7.05h4.882l.728-6.512c.355-3.187-2.335-5.538-4.662-5.538-.94 0-1.948.328-2.615.812-1.052.788-1.66 1.838-1.66 3.238 0 1.202.598 2.238 1.327 2.935z" />
                  </svg>
                </span>
              </p>


            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CeoMessage;
