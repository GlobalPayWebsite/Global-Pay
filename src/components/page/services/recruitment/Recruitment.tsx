"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { recruitmentDataList } from '@/utils/data/services/recruitmentData';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';







const Recruitment: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div>
            <ServiceRow
                title={
                    toggleLanguage({
                        engTxt: "Recruitment",
                        japTxt: "採用"
                    }) as string || ""
                }
                description={toggleLanguage({
                    engTxt: "We specialize in helping individuals residing in Japan find suitable job opportunities.",
                    japTxt: "日本に住んでいる個人が適切な仕事を見つけるのをお手伝いします"
                }) as string || ""}
                serviceData={recruitmentDataList}
                pageType='recruitment'
            />
        </div>
    );
};

export default Recruitment;
