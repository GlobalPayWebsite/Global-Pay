"use client"
// components/Testimonial.tsx
import React, { useEffect, useState } from 'react';

const testimonials = [
    {
        name: 'John Doe',
        position: 'Manager',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio facilis beatae.',
        imgSrc: 'https://i.ibb.co/hKgs8gm/profile.jpg',
    },
    {
        name: 'Jane Smith',
        position: 'CEO',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio facilis beatae.',
        imgSrc: 'https://i.ibb.co/hKgs8gm/profile.jpg',
    },
    {
        name: 'Mike Johnson',
        position: 'Co-Founder',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio facilis beatae.',
        imgSrc: 'https://i.ibb.co/hKgs8gm/profile.jpg',
    },
    {
        name: 'Sara Williams',
        position: 'SEO',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio facilis beatae.',
        imgSrc: 'https://i.ibb.co/hKgs8gm/profile.jpg',
    },
];

const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerPage));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / itemsPerPage)) % Math.ceil(testimonials.length / itemsPerPage));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerPage));
    };

    return (
        <main>
            <section>
                <div className="testimonial">
                    <div className="container">
                        <div className="testimonial__inner">
                            <div className="testimonial-slider" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
                                {testimonials.map((testimonial, index) => (
                                    <div className="testimonial-slide" key={index}>
                                        <div className="testimonial_box">
                                            <div className="testimonial_box-inner">
                                                <div className="testimonial_box-top">
                                                    <div className="testimonial_box-icon">
                                                        <i className="fas fa-quote-right"></i>
                                                    </div>
                                                    <div className="testimonial_box-text">
                                                        <p>{testimonial.text}</p>
                                                    </div>
                                                    <div className="testimonial_box-img">
                                                        <img src={testimonial.imgSrc} alt="profile" />
                                                    </div>
                                                    <div className="testimonial_box-name">
                                                        <h4>{testimonial.name}</h4>
                                                    </div>
                                                    <div className="testimonial_box-job">
                                                        <p>{testimonial.position}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="testimonial-nav">
                                <button onClick={handlePrev} className="nav-button prev-button">&lt;</button>
                                <button onClick={handleNext} className="nav-button next-button">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Testimonial;
