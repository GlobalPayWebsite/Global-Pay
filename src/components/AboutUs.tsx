'use client';
import { useTranslations } from 'next-intl';

/* eslint-disable @next/next/no-img-element */
const AboutUs = () => {
  const t = useTranslations('AboutUs');

  return (
    <>
      <div id="about-us">
        <div className="container">
          <div className="section">
            <h3 className="section__title">{t('about')}</h3>
            <p className="section__subtitle">{t("paragraph")}</p>

            <div className="row align-items-center">
              <div className="col-md-12 col-xl-6 splash">
                <img
                  src="/assets/cover.jpg"
                  alt="Cover"
                  width="100%"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-md-12 col-xl-6 ">
                <div className="row about__container">
                  <div className="col-6">
                    <div className="about__item">
                      <div className="icon">
                        <img
                          src="/resource/icons/human-resources-svgrepo-com.svg"
                          alt="Recruitment"
                          width="32px"
                          height="32px"
                        />
                      </div>
                      <h5 className="fw-semibold text-primary">{t("heading1")}</h5>
                        <p>{t("paragraph1")}</p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="about__item">
                      <div className="icon">
                        <img
                          src="/resource/icons/human-resources-svgrepo-com.svg"
                          alt="SSW"
                          width="32px"
                          height="32px"
                        />
                      </div>
                      <h5 className="fw-semibold text-primary">{t("heading2")}</h5>
                      <p>
                        {t("paragraph1")}
                      </p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="about__item">
                      <div className="icon">
                        <img
                          src="/resource/icons/human-resources-svgrepo-com.svg"
                          alt="Real Estate"
                          width="32px"
                          height="32px"
                        />
                      </div>
                      <h5 className="fw-semibold text-primary">{t("heading3")}</h5>
                      <p>{t("paragraph3")}</p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="about__item">
                      <div className="icon">
                        <img
                          src="/resource/icons/human-resources-svgrepo-com.svg"
                          alt="Education"
                          width="32px"
                          height="32px"
                        />
                      </div>
                      <h5 className="fw-semibold text-primary">{t("heading4")}</h5>
                      <p>{t("paragraph3")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
