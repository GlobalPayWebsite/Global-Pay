"use client";
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const usefulLinks = [
    {
        name: 'Home',
        name_jp: 'ホーム',
        href: '/',
    },
    {
        name: 'About Us',
        name_jp: '当社について',
        href: '/about-us'
    },
    // {
    //     name: 'Recruitment Service',
    //     href: '/service/recruitment'
    // },
    // {
    //     name: 'Other Services',
    //     href: '/service/others'
    // },
    {
        name: 'Contact Us',
        name_jp: 'お問い合わせ',
        href: '/contact'
    },
    {
        name: 'Company Profile',
        name_jp: '会社概要',
        href: '/companyprofile'
    }
]

const ourServices = [
    {
        name: 'Recruitment',
        name_jp: '採用',
        href: '/service/recruitment'
    },
    {
        name: 'SSW',
        name_jp: '特定技能労働者',
        href: '/service/ssw'
    },
    {
        name: 'Real Estate Consultant',
        name_jp: '不動産コンサルタント',
        href: '/service/realstate-consultant'
    },
    {
        name: 'Educational Consultant',
        name_jp: '教育コンサルタント',
        href: '/service/educational-consultant'
    },
    {
        name: 'Travel Consultant',
        name_jp: '旅行コンサルタント',
        href: '/service/travel-consultant'
    }
]

const legals = [
    {
        name: 'Privacy Policy',
        name_jp: 'プライバシーポリシー',
        href: '/privacy-policy'
    },
    {
        name: 'Disclaimer',
        name_jp: '免責事項',
        href: '/disclaimer'
    },
    {
        name: 'Use of This Site',
        name_jp: 'このサイトの使用',
        href: '/use-of-site'
    }
]

const Footer: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <footer className="bg-white box-container pt-[32px] border-t text-dark">
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div className='flex flex-col gap-3'>
                        <div className="flex items-center">
                            <Link className="flex items-center" href="/">
                                <Image src="/assets/logo.png" alt="Global Pay" width="40" height="40" unoptimized />
                                <span
                                    style={{
                                        display: 'inline-block',
                                        marginLeft: 8,
                                        fontWeight: 'bold',
                                    }}
                                    className='text-lg xl:text-[22px] text-nowrap'
                                >
                                    Global Pay Co., Ltd.
                                </span>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px]">
                                {toggleLanguage({
                                    engTxt: '1-chome 20-17 Hyakunincho',
                                    japTxt: " 〒169-0073"
                                })}
                                <br />
                                {toggleLanguage({
                                    engTxt: 'Shinjuku City, Tokyo 169-0073',
                                    japTxt: "東京都新宿区百人町1-20-17 星野ビル101号室"
                                })}
                            </p>
                            <p className="mt-2">
                                <i className="text-theme fa-solid fa-phone pe-1" /> 03-6687-7736 <br />
                                <i className="text-theme fa-solid fa-envelope pe-1" /> info@globalpay.co.jp
                            </p>
                        </div>
                    </div>

                    <div className='flex lg:justify-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-2 text-[20px]">
                                {toggleLanguage({
                                    engTxt: 'Useful Links',
                                    japTxt: '便利なリンク'
                                })}
                            </h4>
                            <ul className="text-[16px] space-y-2">
                                {usefulLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="nav_link">{toggleLanguage({
                                            engTxt: link.name,
                                            japTxt: link.name_jp
                                        })}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='flex lg:justify-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-2 text-[20px]">{
                                toggleLanguage({
                                    engTxt: 'Our Services',
                                    japTxt: '当社のサービス'
                                })
                            }</h4>
                            <ul className="text-[16px] space-y-2">
                                {ourServices.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="nav_link">{
                                            toggleLanguage({
                                                engTxt: link.name,
                                                japTxt: link.name_jp
                                            })
                                        }</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='flex lg:justify-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-2 text-[20px]">{toggleLanguage({
                                engTxt: 'Legal',
                                japTxt: '法的'
                            })}</h4>
                            <ul className="text-[16px] space-y-2">
                                {legals.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="nav_link">{
                                            toggleLanguage({
                                                engTxt: link.name,
                                                japTxt: link.name_jp
                                            })
                                        }</Link>
                                    </li>
                                ))}

                            </ul>
                            <div className="mt-4">
                                <h5 className="font-bold text-[16px] mb-2">{
                                    toggleLanguage({
                                        engTxt: 'Follow Us',
                                        japTxt: '当社をフォローしてください'
                                    })
                                }</h5>
                                <div className="flex space-x-4">
                                    <a href="https://www.facebook.com/" target='_blank' className="w-[30px] h-[30px] transition-all delay-100 rounded-full flex items-center justify-center social-link-fb"><i className="fab fa-facebook"></i></a>
                                    <a href="viber://add?number=8109092469379" target='_blank' className="w-[30px] h-[30px] transition-all delay-100 rounded-full flex items-center justify-center social-link-viber"><i className="fab fa-viber"></i></a>
                                    <a href="https://www.instagram.com/" target='_blank' className="w-[30px] h-[30px] transition-all delay-100 rounded-full flex items-center justify-center social-link-insta"><i className="fab fa-instagram"></i></a>
                                    <a href="https://x.com/" target='_blank' className="w-[30px] h-[30px] transition-all delay-100 rounded-full flex items-center justify-center social-link-tw">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3 text-[16px] text-gray-500 border-t">
                    © 2021 Global Pay Co., Ltd. All Rights Reserved.

                </div>
            </div>
        </footer>
    );
};

export default Footer;
