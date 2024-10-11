/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

const Services = () => {
  const t = useTranslations('Services');

  return (
    <div id="services">
      <div className="container">
        <div className="section">
          <h3 className="section__title">{t("heading")}</h3>
          <p className="section__subtitle">
            {t("subtitle")}
          </p>

          <div className="row service-container">
            <div className="col-md-12 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-primary">
                        {t("heading1")}
                      </h5>
                      <p>{t("paragraph1")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-user-graduate"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-primary">
                        {t("heading2")}
                      </h5>
                      <p>{t("paragraph2")}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-chalkboard-teacher"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-primary">
                        {t("heading3")}
                      </h5>
                      <p>{t("paragraph3")}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-primary">
                        {t("heading4")}
                      </h5>
                      <p>{t("paragraph4")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-passport"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-primary">
                        {t("heading5")}
                      </h5>
                      <p>{t("paragraph5")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-industry"></i>
                    </div>
                    <div>
                      <p>{t("paragraph4")}</p>
                      <h5 className="fw-semibold text-primary">{t("heading6")}</h5>
                      <p>{t("paragraph6")}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-primary">{t("heading7")}</h5>
                      <p>{t("paragraph7")}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-home"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-primary">
                        {t("heading8")}
                      </h5>
                      <p>{t("heading8")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex mt-4">
            <Link
              className="btn btn-primary m-auto"
              href="/services/recruitment"
            >
              {t("read-more")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
