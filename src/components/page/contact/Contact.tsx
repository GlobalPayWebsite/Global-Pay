"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';


const Contact = () => {
    const [mounted, setMounted] = React.useState(false);
    const { toggleLanguage } = useToggleLanguageConversion();
    React.useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null;

    const services = [
        {
            icon: <i className="fa-solid fa-address-book" />,
            title: toggleLanguage({
                engTxt: "Address",
                japTxt: "住所"
            }),
            description:
                <div className='flex flex-col items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        {toggleLanguage({
                            engTxt: "1-chome 20-17 Hyakunincho, Shinjuku City, Tokyo 169-0073",
                            japTxt: "東京都新宿区百人町１－２０－１７　星野ビル１０１号室"
                        })}
                    </div>
                    <div className='flex items-center gap-1'>
                        <a href='/' target='_blank' className='underline font-bold'>www.globalpay.co.jp</a>
                    </div>
                </div>
        },
        {
            icon: <i className="fa-regular fa-envelope" />,
            title: toggleLanguage({
                engTxt: "Email",
                japTxt: "電子メール"
            }),
            description: "info@globalpay.co.jp",
        },
        {
            icon: <i className="fa-solid fa-phone" />,
            title: toggleLanguage({
                engTxt: "Contact",
                japTxt: "お問い合わせ"
            }),
            description: (
                <div className='flex flex-col items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <span>Tel:</span>
                        <span>+81 03-6687-7736</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span>WhatsApp:</span>
                        <span>+81 90-9246-9379</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span>Viber:</span>
                        <span>+81 90-9246-9379</span>
                    </div>
                </div>
            ),
        },
        {
            icon: <i className="fa-solid fa-business-time" />,
            title: toggleLanguage({
                engTxt: "Business Hours",
                japTxt: "営業時間"
            }),
            // "Business Hours",
            description: (
                <div className='flex-row items-center gap-2'>
                    <div className='items-center gap-1'>
                        <div>
                            {toggleLanguage({
                                engTxt: "Monday - Friday",
                                japTxt: "月曜日～金曜日"
                            })}
                        </div>
                        <div>10:00 am - 7:00 pm</div>
                        <div>
                            {toggleLanguage({
                                engTxt: "Saturday & Sunday (Closed)",
                                japTxt: "土曜日、日曜日（休み）"
                            })}
                        </div>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className='box-container py-[64px] flex flex-col gap-5'>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col gap-3 items-center bg-white rounded-lg p-6 border-2 hover:shadow-2xl hover:border-theme `}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
                    >
                        <div className="p-3 bg-background bg-theme text-white rounded-lg w-[50px] h-[50px] flex items-center justify-center">
                            <span className=''>
                                {service.icon}
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-500 text-center text-sm">{service.description}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className='h-[420px]'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5447.1279172285385!2d139.69310620430838!3d35.701339799047844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2e84edeefb%3A0x2c964b66ddd1dbe0!2s1-ch%C5%8Dme-20-17%20Hyakuninch%C5%8D%2C%20Shinjuku%20City%2C%20Tokyo%20169-0073%2C%20Japan!5e0!3m2!1sen!2snp!4v1728193136601!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: 8 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </motion.div>
        </div>
    )
}

export default Contact