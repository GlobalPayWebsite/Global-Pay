"use client";
import React, { useEffect, useState } from "react";
import './style.scss'; // Assuming you have your styles in a separate file

const Countdown: React.FC = () => {
    const [secValue, setSecValue] = useState<number>(11);
    const [minValue, setMinValue] = useState<number>(2);
    const [hourValue, setHourValue] = useState<number>(2);
    const [dayValue, setDayValue] = useState<number>(9);

    useEffect(() => {
        const timeFunction = setInterval(() => {
            setSecValue((prevSec) => {
                if (prevSec === 0) {
                    setMinValue((prevMin) => {
                        if (prevMin === 0) {
                            setHourValue((prevHour) => {
                                if (prevHour === 0) {
                                    setDayValue((prevDay) => prevDay - 1);
                                    return 24;
                                }
                                return prevHour - 1;
                            });
                            return 60;
                        }
                        return prevMin - 1;
                    });
                    return 60;
                }
                return prevSec - 1;
            });

            if (dayValue === 0) {
                clearInterval(timeFunction);
            }
        }, 1000);

        return () => clearInterval(timeFunction);
    }, [secValue, minValue, hourValue, dayValue]);

    return (
        <section className="container">
            <img
                src="https://images.unsplash.com/photo-1625558298116-38f0173a522c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Background"
                className="image"
            />
            <header>    Immigration Lawyer Services Coming Soon! </header>
            <p>
                We are excited to announce that we will be launching soon and can't wait
                to share our new platform for immigration layer you.
            </p>
            <div className="time-content">
                <div className="time days">
                    <span className="number">{dayValue < 10 ? `0${dayValue}` : dayValue}</span>
                    <span className="text">days</span>
                </div>
                <div className="time hours">
                    <span className="number">{hourValue < 10 ? `0${hourValue}` : hourValue}</span>
                    <span className="text">hours</span>
                </div>
                <div className="time minutes">
                    <span className="number">{minValue < 10 ? `0${minValue}` : minValue}</span>
                    <span className="text">minutes</span>
                </div>
                <div className="time seconds">
                    <span className="number">{secValue < 10 ? `0${secValue}` : secValue}</span>
                    <span className="text">seconds</span>
                </div>
            </div>
            <div className="home-btn">
                <a href="/" className="btn-home">Return to Home</a>
            </div>
        </section>
    );
};

export default Countdown;
