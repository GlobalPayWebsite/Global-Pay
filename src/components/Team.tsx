import { Link } from '@/i18n/routing';
import { useTranslations } from "next-intl";

/* eslint-disable @next/next/no-img-element */
const Team = () => {
  const t = useTranslations("MeetOurTeam")

  return (
    <div id="team">
      <div className="container">
        <div className="section">
          <h3 className="section__title">{t("title")}</h3>
          <p className="section__subtitle">{t("subtitle")}</p>

          <section className="team-section">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div className="team-item ">
                  <div className="team-img splash2">
                    <img
                      src="/assets/team-member-02.jpg"
                      width="320px"
                      height="320px"
                      alt="Team Member 1"
                    />
                  </div>
                  <div>
                    <h5>{t("name1")}</h5>
                    <p>{t("position1")}</p>

                    <div>
                      <Link
                        className="social-link-fb"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </Link>

                      <Link
                        className="social-link-insta"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>

                      <Link
                        className="social-link-tw"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div className="team-item">
                  <div className="team-img splash2">
                    <img
                      src="/assets/team-member-01.jpg"
                      width="320px"
                      height="320px"
                      alt="Team Member 1"
                    />
                  </div>
                  <div>
                    <h5>{t("name2")}</h5>
                    <p>{t("position2")}</p>

                    <div>
                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </Link>

                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>

                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div className="team-item">
                  <div className="team-img splash2">
                    <img
                      src="/assets/team-member-02.jpg"
                      width="320px"
                      height="320px"
                      alt="Team Member 1"
                    />
                  </div>
                  <div>
                    <h5>{t("name3")}</h5>
                    <p>{t("position3")}</p>

                    <div>
                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </Link>

                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>

                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                <div className="team-item">
                  <div className="team-img splash2">
                    <img
                      src="/assets/team-member-01.jpg"
                      width="320px"
                      height="320px"
                      alt="Team Member 1"
                    />
                  </div>
                  <div>
                    <h5>{t("name4")}</h5>
                    <p>{t("position4")}</p>

                    <div>
                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </Link>

                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>

                      <Link
                        className="social-link"
                        href="https://www.facebook.com"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Team;
