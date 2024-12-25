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
                        engTxt: "Immigration Lawyer",
                        japTxt: "移民専門行政書士"
                    }) as string || ""
                }
                description={toggleLanguage({
                    engTxt: "We provide expert legal support for navigating Japan's immigration system smoothly and efficiently.",
                    japTxt: "日本の入国管理手続きをスムーズかつ効率的に進めるための専門的な法的サポートを提供します。"
                }) as string || ""}
                serviceData={ImmigrationLawyerDataList}
                pageType='immigration'
            />
        </div>
    );
};

export default Immigration;
