"use client";
import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { realsStateDataList } from '@/utils/data/services/realsStateData';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';




const RealStateConsultant: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div>
            <ServiceRow
                title={
                    toggleLanguage({
                        engTxt: "Real EState Consultant",
                        japTxt: "不動産コンサルタント"
                    }) as string || ""
                }
                description={
                    toggleLanguage({
                        engTxt: "Our team is dedicated to helping you find the affordable rental property in Japan.",
                        japTxt: "当社のチームは、日本で完璧な賃貸物件を見つけるのをお手伝いします。"
                    }) as string || ""
                }
                serviceData={realsStateDataList}
                pageType='realstate'
            />
        </div>
    );
};

export default RealStateConsultant;
