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
                    engTxt: "Empowering students to navigate their path toward academic success on a global scale with personalized guidance and expertise.",
                    japTxt: "日個別の指導と専門知識により、学生が世界規模で学業での成功に向けた道を進むことができるように支援します"
                }) as string || ""}
                serviceData={educationalConsultantDataList}
                pageType='educational'
            />
        </div>
    );
};

export default EducationalConsultant;
