"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
    {
        title: "Job Placement Expertise",
        description:
            " Empowering Your Career Journey We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.",
    },
    {
        title: "Personalized Guidance and Support",
        description:
            "We support each student based on their academic goals, career aspirations, and personal preferences. Our comprehensive services include selecting the right universities and courses, assisting with application processes, and guiding through visa requirements.",
    },
    {
        title: "Comprehensive SSW Visa Support",
        description:
            "Our team assists you throughout the SSW visa process, from documentation to final placement.",
    },
    {
        title: "Comprehensive Rental Assistance",
        description:
            "Finding Your Ideal Rental in Japan, Hassle-Free. Our team is dedicated to helping you find the affordable rental property in Japan. We provide end-to-end support in finding the affordable rental apartment in Japan.",
    },
    {
        title: "Airline Ticket Sales",
        description:
            "We sell airline tickets from Japan to any country, offering competitive pricing and exclusive deals to ensure our clients get the best value for their travel.",
    }
]

const WhyChooseUs: React.FC = () => {
    return (
        <div className="bg-white box-container py-[64px] flex items-center justify-center w-full overflow-x-hidden">
            <div
                className="max-w-[720px] lg:max-w-full"

            >
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h2 className="text-center text-xl sm:text-3xl font-bold text-theme mb-2">
                        WHY CHOOSE US?
                    </h2>
                    <div className="flex items-center justify-center">
                        <p className="text-center text-lg text-dark mb-10">
                            We offer exceptional services and personalized support, guiding you every step of the way.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 items-center">
                    <div className="space-y-6">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <div className="bg-success rounded-full p-2.5 mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="white"
                                        className="w-7 h-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-dark">{item?.title || ""}</h3>
                                    <p className="text-gray-600">
                                        {item?.description || ""}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center items-start w-full">
                        <motion.div
                            className="border p-2 w-full"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <Image
                                src="/assets/whyus.jpg" // Replace this with the correct path for your image
                                alt="Why Choose Us"
                                className="w-full h-full object-cover"
                                width={500}
                                height={500}
                                unoptimized
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
