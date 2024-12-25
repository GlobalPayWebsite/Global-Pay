// "use client";
// import Image from 'next/image'
// import Link from 'next/link';
// import { usePathname } from 'next/navigation'
// import React from 'react'

// const getUrl = (arr: string[]) => {
//     console.log("arr ", arr)
//     let str = "";
//     arr.map((item) => {
//         str += `${item}/`
//     })
//     return str;
// }

// const BreadCrumb = () => {
//     const pathname = usePathname();
//     const paths = pathname.split("/");

//     return (
//         <div className='relative'>
//             <div className='w-full h-[220px]'>
//                 <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-full'>
//                     <div className='box-container py-5 flex items-center justify-center h-full text-white'>
//                         <div className='flex flex-col items-center gap-2'>
//                             <h1 className='text-4xl capitalize'>{paths[1] || ""}</h1>
//                             <div className='flex items-center gap-2 font-semibold'>
//                                 <Link href='/'>Home</Link>
//                                 {paths.map((item, index) => (
//                                     <>
//                                         {item != "" && <div key={index} className='flex items-center gap-2'>
//                                             <span>/</span>
//                                             <Link href={`/${getUrl(paths.slice(1, index + 1))}`} className='capitalize'>{item}</Link>
//                                         </div>}
//                                     </>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Image width={100} unoptimized={true} height={700} src={"/assets/page-background.jpeg"} className='w-full h-[220px] object-cover object-center' alt='banner' />
//             </div>
//         </div>
//     )
// }

// export default BreadCrumb



"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';

// Define the type for valid breadcrumb keys
type BreadcrumbKeys = 'home' | 'about-us' | 'contact' | 'service' | 'recruitment' | 'ssw' | 'immigration' | 'realEstate' | 'realstate-consultant' | 'educational-consultant' | 'travel-consultant' | 'ourservice' | 'other';

// Updated translation mappings with the correct type
const breadcrumbTranslations: Record<BreadcrumbKeys, { engTxt: string; japTxt: string }> = {
    home: {
        engTxt: "Home",
        japTxt: "ホーム"
    },
    "about-us": {
        engTxt: "About Us",
        japTxt: "当社について"
    },
    service: {
        engTxt: "Service",
        japTxt: "サービス"
    },
    contact: {
        engTxt: "Contact",
        japTxt: "お問い合わせ"
    },
    recruitment: {
        engTxt: "Recruitment",
        japTxt: "リクルートメント"
    },
    ssw: {
        engTxt: "SSW",
        japTxt: "特定技能労働者"
    },
    realEstate: {
        engTxt: "Real Estate Consultant",
        japTxt: "不動産コンサルタント"
    },
    "realstate-consultant": {
        engTxt: "Real Estate Consultant",
        japTxt:"不動産コンサルタント"  
    },
    "educational-consultant": {
        engTxt: "Educational Consultant",
        japTxt:"教育コンサルタント"
    },
    "travel-consultant": {
        engTxt: "Travel Consultant",
        japTxt: "旅行コンサルタント"
    },
    ourservice: {
        engTxt: "Our Services",
        japTxt: "私たちのサービス"
    },
    immigration: {
        engTxt: "Immigration Lawyer",
        japTxt: "移民専門行政書士"
    },
    other: {
        engTxt: "Other Services",
        japTxt: "その他のサービス"
    }
};

const BreadCrumb = () => {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);
    const { toggleLanguage } = useToggleLanguageConversion();

    // Function to translate breadcrumb items with proper type checking
    const translateBreadcrumbItem = (item: string) => {
        const key = item.toLowerCase() as BreadcrumbKeys; // Cast item to BreadcrumbKeys type
        const translation = breadcrumbTranslations[key];

        return translation
            ? toggleLanguage({
                engTxt: translation.engTxt,
                japTxt: translation.japTxt
            })
            : item; // Return the original item if no translation is found
    };

    return (
        <div className='relative'>
            <div className='w-full h-[220px]'>
                <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-full'>
                    <div className='box-container py-5 flex items-center justify-center h-full text-white'>
                        {/* Breadcrumb Navigation */}
                        <div className='flex items-center gap-2 font-semibold'>
                            {/* Home Link */}
                            <Link href='/'>
                                {toggleLanguage({
                                    engTxt: breadcrumbTranslations.home.engTxt,
                                    japTxt: breadcrumbTranslations.home.japTxt
                                })}
                            </Link>
                            {/* Render each breadcrumb item */}
                            {paths.map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className='mx-2'>/</span>
                                    <Link
                                        href={`/${paths.slice(0, index + 1).join("/")}`}
                                        className='capitalize'
                                    >
                                        {translateBreadcrumbItem(item)}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Background Image */}
                <Image
                    width={100}
                    unoptimized={true}
                    height={700}
                    src="/assets/page-background.jpeg"
                    className='w-full h-[220px] object-cover object-center'
                    alt='banner'
                />
            </div>
        </div>
    );
};

export default BreadCrumb;
