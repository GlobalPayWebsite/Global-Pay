"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SolomonPay: React.FC = () => {

    return (
        <div className='box-container py-[64px]'>
            <div className=" w-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat h-full lg:h-[500px] brightness-90" style={{ backgroundImage: 'url("https://www.thoughtco.com/thmb/MuBKzwGjbDz3oAIUcDHVp8KzVic=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/customer-paying-at-the-checkout-counter-142548570-58db97213df78c5162cda9ab.jpg")' }}>
                <div className="bg-black w-full bg-opacity-50 text-center p-5 rounded-md text-white h-full flex flex-col justify-center items-center">
                    <div className="flex justify-center space-x-4 text-3xl md:text-5xl font-bold mb-8">
                        <Image height={20} width={20} unoptimized src="/assets/solomon-pay.jpg" alt="logo" className='h-32 w-32 rounded-full object-cover' />
                    </div>
                    <h1 className="text-xl md:text-5xl font-bold mb-4 text-zinc-50">Solomon Capital Japan Inc.</h1>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-50	">COMMING SOON !</h1>
                    <p className="text-lg mb-8 text-zinc-50	">To make your international money transfers faster, safer, and more affordable.</p>

                    <Link href={"/"} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white text-lg font-semibold">Return to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default SolomonPay;
