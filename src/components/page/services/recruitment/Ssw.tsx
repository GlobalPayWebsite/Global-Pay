"use client";

import React from 'react';
import ServiceRow from '../../shared/servicesRow/ServiceRow';
import { sswDataList } from '@/utils/data/services/sswData';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';







const Ssw: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div>
            <ServiceRow
                // title="SSW"
                title={toggleLanguage({
                    engTxt: "SSW",
                    japTxt: "特定技能労働者"
                }) as string || ""}
                // description="Comprehensive support for SSW visa applicants and employers in Japan."
                description={toggleLanguage({
                    engTxt: "Comprehensive support for SSW visa applicants and employers in Japan.",
                    japTxt: "日本のSSWビザ申請者と雇用主への包括的なサポート"
                }) as string || ""}
                serviceData={sswDataList}
                pageType='ssw'
                bg
            />
        </div>
    );
};

export default Ssw;
