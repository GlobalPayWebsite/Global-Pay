"use client";

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl'

const Counter = () => {
    const t = useTranslations("CompanyProgress")
    const [aValue, setAValue] = useState(0);
    const [bValue, setBValue] = useState(0);
    const [cValue, setCValue] = useState(0);
    const [dValue, setDValue] = useState(0);

    // Set the final values
    const targetAValue = 321;
    const targetBValue = 340;
    const targetCValue = 345;
    const targetDValue = 500;

    useEffect(() => {
        let aCounter = 0;
        const aInterval = setInterval(() => {
            if (aCounter === targetAValue) {
                clearInterval(aInterval);
            } else {
                aCounter += 1;
                setAValue(aCounter);
            }
        }, 20);

        return () => clearInterval(aInterval); // Cleanup interval
    }, []);

    useEffect(() => {
        let bCounter = 0;
        const bInterval = setInterval(() => {
            if (bCounter === targetBValue) {
                clearInterval(bInterval);
            } else {
                bCounter += 1;
                setBValue(bCounter);
            }
        }, 20);

        return () => clearInterval(bInterval); // Cleanup interval
    }, []);

    useEffect(() => {
        let cCounter = 0;
        const cInterval = setInterval(() => {
            if (cCounter === targetCValue) {
                clearInterval(cInterval);
            } else {
                cCounter += 1;
                setCValue(cCounter);
            }
        }, 20);

        return () => clearInterval(cInterval); // Cleanup interval
    }, []);

    useEffect(() => {
        let dCounter = 0;
        const dInterval = setInterval(() => {
            if (dCounter === targetDValue) {
                clearInterval(dInterval);
            } else {
                dCounter += 1;
                setDValue(dCounter);
            }
        }, 20);

        return () => clearInterval(dInterval); // Cleanup interval
    }, []);

    return (
        <>
            <div id="company-progress">
                <div className="container">
                    <div className="section">
                        <h3 className="section__title">{t('title')}</h3>
                        <p className="section__subtitle">{t('subtitle')}</p>
                        <div className="flex-container">
                            <div className="wrapper">
                                <div className="flex-box">
                                    <div className="counter-icon"><i className="fas fa-users stat-icon fa-1x"></i></div>
                                    <p id="a" className="alignnumber">{aValue}</p>
                                    <p className="stat-description" style={{ fontSize: "18px", margin: "10px 0 0", textAlign: "center" }}>{t("satisfiedClients")}</p>
                                </div>
                                <div className="flex-box">
                                    <div className="counter-icon"><i className="fas fa-tasks stat-icon fa-1x"></i></div>
                                    <p id="b" className="alignnumber">{bValue}</p>
                                    <p className="stat-description" style={{ fontSize: "18px", margin: "10px 0 0", textAlign: "center" }}>{t("projectsCompleted")}</p>

                                </div>
                                <div className="flex-box">
                                    <div className="counter-icon a"><i className="fas fa-briefcase stat-icon fa-1x"></i></div>
                                    <p id="c" className="alignnumber">{cValue}</p>
                                    <p className="stat-description" style={{ fontSize: "18px", margin: "10px 0 0", textAlign: "center" }}>{t("employees")}</p>

                                </div>
                                <div className="flex-box">
                                    <div className="counter-icon a"><i className="fas fa-calendar-alt stat-icon fa-1x"></i></div>
                                    <p id="d" className="alignnumber">{dValue}</p>
                                    <p className="stat-description" style={{ fontSize: "18px", margin: "10px 0 0", textAlign: "center" }}>{t("yearsInBusiness")}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter;
