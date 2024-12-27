"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { ImmigrationLawyerDataList } from '@/utils/data/services/immigrationsLawyer';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';







const Immigration: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div>
            <ServiceRow
                title={
                    toggleLanguage({
                        engTxt: "Visa Consultant",
                        japTxt: "ビザコンサルタント"
                    }) as string || ""
                }
                description={toggleLanguage({
                    engTxt: "Your Trusted Partner for Visa Solutions",
                    japTxt: "信頼できるビザソリューションのパートナー。"
                }) as string || ""}
                serviceData={ImmigrationLawyerDataList}
                pageType='immigration'
            />
        </div>
    );
};

export default Immigration;
