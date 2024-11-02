"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { educationalConsultantDataList } from '@/utils/data/services/educationalConsultantData';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';


const EducationalConsultant: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div>
            <ServiceRow
                title={
                    toggleLanguage({
                        engTxt: "Educational Consultant",
                        japTxt: "教育コンサルタント"
                    }) as string || ""
                }
                description={toggleLanguage({
                    engTxt: "We specialize in helping individuals residing in Japan find suitable job opportunities.",
                    japTxt: "日本に住んでいる個人が適切な仕事を見つけるのをお手伝いします"
                }) as string || ""}
                serviceData={educationalConsultantDataList}
                pageType='educational'
            />
        </div>
    );
};

export default EducationalConsultant;
