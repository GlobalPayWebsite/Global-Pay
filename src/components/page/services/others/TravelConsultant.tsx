"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { travelConsultantdataList } from '@/utils/data/services/TravelConsultantData';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';




const TravelConsultant: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div>
            <ServiceRow
                title={toggleLanguage({
                    engTxt: "Travel Consultant",
                    japTxt: "トラベルコンサルタント"
                }) as string || ""}
                // description="We specialize in helping individuals residing in Japan find suitable job opportunities."
                description={toggleLanguage({
                    engTxt: "Crafting Unforgettable Journeys with Personalized Travel Expertise.",
                    japTxt: "パーソナライズされた旅行の専門知識で忘れられない旅を作り上げる"
                }) as string || ""}
                serviceData={travelConsultantdataList}
                pageType='travel'
            />
        </div>
    );
};

export default TravelConsultant;
