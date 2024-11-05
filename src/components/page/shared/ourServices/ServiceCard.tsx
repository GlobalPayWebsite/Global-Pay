"use client";
import React from 'react';
import { ServiceData } from './OurServices';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';

interface ServiceCardProps {
    data: ServiceData;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
                <div className='text-theme border-4 border-theme hover:bg-theme cursor-pointer transition-all delay-100 hover:text-white rounded-md w-20 h-20 p-5 text-3xl flex items-center justify-center'>
                    {data.icon}
                </div>
            </div>
            <div>
                <div className="font-medium text-theme text-left text-xl">{toggleLanguage({
                    engTxt: data.title,
                    japTxt: data.title_jp
                })}</div>
                <p className="text-gray-600 text-left">
                    {toggleLanguage({
                        engTxt: data.description,
                        japTxt: data.description_jp
                    })}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
