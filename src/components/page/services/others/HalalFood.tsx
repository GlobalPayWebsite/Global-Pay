"use client";
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import Image from 'next/image';
import React from 'react';

const HalalFood: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className='box-container py-[64px]'>
            <div className='max-w-7xl mx-auto text-center flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <h2 className="text-3xl font-extrabold text-theme">
                        {toggleLanguage({
                            engTxt: "Halal Food",
                            japTxt: "ハラールフード"
                        })}
                    </h2>
                    <p>
                        {toggleLanguage({
                            engTxt: "we offer comprehensive support to help you easily find halal-certified restaurants, grocery stores, and food products across major cities in Japan.",
                            japTxt: "日本の主要都市でハラール認証を受けたレストラン、食料品店、食品を簡単に見つけるための包括的なサポートを提供しています。"
                        })}
                    </p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <Image
                            src={"/assets/halalfood.jpeg"}
                            alt='halalfood'
                            width={800}
                            height={500}
                            className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover'
                        />
                    </div>
                    <div>
                        <p className='text-left'>{toggleLanguage({
                            engTxt: "We understand the importance of halal food for our clients, especially when relocating or traveling to Japan. That's why we offer comprehensive support to help you easily find halal-certified restaurants, grocery stores, and food products across major cities in Japan. Whether you're here for work, study, or leisure, we are dedicated to ensuring you can enjoy authentic and delicious halal meals without any hassle. From recommending the best halal-friendly dining options to connecting you with local halal food delivery services, we’re here to make your stay in Japan comfortable and convenient, all while meeting your dietary needs. With our personalized guidance, you can feel right at home, knowing your halal food requirements are always taken care of.",
                            japTxt: "当社は、お客様が日本に移住または旅行する際のハラール食品の重要性を十分に理解しています。そのため、日本の主要都市でハラール認証を受けたレストラン、食料品店、食材を簡単に見つけられるよう、包括的なサポートを提供しています。お仕事、学業、観光など、どのような目的でも、手間なく本格的で美味しいハラール料理を楽しんでいただけるよう尽力しています。ハラール対応のおすすめレストランの紹介から、現地のハラール食品デリバリーサービスとの連携まで、当社は日本での生活が快適で便利なものになるようお手伝いします。お客様の食事ニーズに合わせたパーソナライズされたガイダンスで、安心して日本での滞在を楽しんでいただけます。"
                        })}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HalalFood;
