"use client";
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

const SolomonPay: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className='box-container py-[64px]'>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1 items-center'>
                    <h1 className="text-4xl font-semibold text-center text-theme">{toggleLanguage({
                        engTxt: "Solomon Capital Japan Inc.",
                        japTxt: "ソロモンキャピタルジャパン株式会社"
                    })}</h1>
                    <p>{toggleLanguage({
                        engTxt: "To make your international money transfers faster, safer, and more affordable",
                        japTxt: "国際送金をより速く、安全に、そしてより手頃な価格で行うために"
                    })}</p>
                </div>
                <div className=" w-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat h-full lg:h-[500px] brightness-100" style={{ backgroundImage: 'url("/assets/solomon-background.jpg")' }}>
                    <div className="bg-black w-full bg-opacity-50 text-center p-5 rounded-md text-white h-full flex flex-col justify-center items-center">
                        <div className="flex justify-center space-x-4 text-3xl md:text-5xl font-bold mb-8">
                            <Image height={40} width={40} unoptimized src="/assets/solomon-pay.jpg" alt="logo" className='h-37 w-40 rounded' />
                        </div>
                        <h1 className="text-xl md:text-5xl font-bold mb-4 text-zinc-50">{toggleLanguage({
                            engTxt: "Solomon Capital Japan Inc.",
                            japTxt: "ソロモンキャピタルジャパン株式会社"
                        })}.</h1>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-50	">{toggleLanguage({
                            engTxt: "COMMING SOON !!!!",
                            japTxt: "近日公開！！！"
                        })}</h1>
                        <p className="text-lg mb-8 text-zinc-50	">{toggleLanguage({
                            engTxt: "To make your international money transfers faster, safer, and more affordable",
                            japTxt: "国際送金をより速く、安全に、そしてより手頃な価格で行うために"
                        })}</p>

                        {/* <Link href={"/"} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white text-lg font-semibold">Return to Home</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolomonPay;
