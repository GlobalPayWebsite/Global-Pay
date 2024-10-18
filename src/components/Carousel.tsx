import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

  // 
/* eslint-disable @next/next/no-img-element */
const Carousel = () => {
  const t = useTranslations('Caraousel');
  const t1 = useTranslations('Caraousel1')
  const t2 = useTranslations('Caraousel2')

  return (
    <div id="home" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#home"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#home"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#home"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="img-container">
            <img
              src="/assets/image.png"
              className="d-block w-100"
              style={{ height: 420, objectFit: 'cover', }}
              alt="..."
            />
          </div>
          <div className="carousel-caption d-md-block">
            <div className="container">
              <h1>{t("heading")} <br />
                {t("sub-heading")}
              </h1>
              <p>{t("paragraph")}</p>
              <Link
                className="btn btn-primary m-auto"
                href="/services/recruitment"
              >
                {t("sub-tag")}
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-container">
            <img
              src="/assets/realstate.png"
              className="d-block w-100"
              style={{ height: 420, objectFit: 'cover' }}
              alt="..."
            />
          </div>
          <div className="carousel-caption d-md-block">
            <div className="container">
              <h1>{t1('heading')}</h1>
              <h1>{t1('sub-heading')}</h1>
              <p>{t1("paragraph")}</p>
              <Link className="btn btn-primary m-auto" href="/real-estate">
                {t1("sub-tag")}
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-container">
            <img
              src="/assets/study-abrd.png"
              className="d-block w-100"
              style={{ height: 420, objectFit: 'cover' }}
              alt="..."
            />
          </div>
          <div className="carousel-caption d-md-block">
            <div className="container">
              <h1>{t2("heading")}</h1>
              <h1>{t2("sub-heading")}</h1>
              <p>{t2("paragraph")}</p>
              <Link
                className="btn btn-primary m-auto"
                href="/education-consulting"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default Carousel;
