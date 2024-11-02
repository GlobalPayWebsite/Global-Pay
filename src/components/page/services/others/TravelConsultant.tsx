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
                    engTxt: "We specialize in helping individuals residing in Japan find suitable job opportunities.",
                    japTxt: "日本に住んでいる個人が適切な仕事を見つけるのをお手伝いします"
                }) as string || ""}
                serviceData={travelConsultantdataList}
                pageType='travel'
            />
        </div>
    );
};

export default TravelConsultant;
