import { Link } from '@/i18n/routing';

/* eslint-disable @next/next/no-img-element */
const Team = () => {
  return (
    <div id="team">
      <div className="container">
        <div className="section">
          <h3 className="section__title">Meet Our Team</h3>
          <p className="section__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint
            minima modi tempora nihil voluptatem aperiam enim. Cum, quasi
            dolorem!
          </p>

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
                    <h5>John Doe</h5>
                    <p>Lead Recruiter</p>

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
                    <h5>John Doe</h5>
                    <p>Lead Recruiter</p>

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
                    <h5>John Doe</h5>
                    <p>Lead Recruiter</p>

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
                    <h5>John Doe</h5>
                    <p>Lead Recruiter</p>

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
