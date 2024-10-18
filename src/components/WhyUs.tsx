import { useTranslations } from "next-intl"
import { title } from "process";

/* eslint-disable @next/next/no-img-element */
// components/WhyUs.tsx
const WhyUs = () => {
  const t = useTranslations('WhyChooseUs')
  return (
    <div id="why-us">
      <div className="container">
        <div className="section">
          <h3 className="section__title">{t('title')}</h3>
          <p className="section__subtitle">{t('title-paragraph') }</p>

          <div className="row">
            <div className="col-sm-12 col-lg-7 order-md-1 order-lg-0">
              <div className="row">
                <div className="col-12">
                  <div className="why-us-item d-flex">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="ms-3">
                      <h5>{t('sub-heading1')}</h5>
                      <p>{t('sub-paragraph1')}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="why-us-item d-flex">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="ms-3">
                      <h5>{t('sub-heading2')}</h5>
                      <p>{t('sub-paragraph2')}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="why-us-item d-flex">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="ms-3">
                      <h5>{t('sub-heading3')}</h5>
                      <p>{t('sub-paragraph3')}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="why-us-item d-flex">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="ms-3">
                      <h5>{t('sub-heading4')}</h5>
                      <p>{t('sub-paragraph4')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-5 splash order-md-0 order-lg-1">
              <img className="img-thumbnail" src="/assets/whyus.jpg" alt="Why Us" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
