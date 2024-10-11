/* eslint-disable @next/next/no-img-element */
// components/WhyUs.tsx
const WhyUs = () => {
  return (
    <div id="why-us">
      <div className="container">
        <div className="section">
          <h3 className="section__title">Why Choose Us?</h3>
          <p className="section__subtitle">We offer exceptional services and personalized support, guiding you every step of the way.</p>

          <div className="row">
            <div className="col-sm-12 col-lg-7 order-md-1 order-lg-0">
              <div className="row">
                <div className="col-12">
                  <div className="why-us-item d-flex">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="ms-3">
                      <h5>Job Placement Expertise</h5>
                      <p>We specialize in placing candidates in suitable roles, ensuring a smooth transition to employment.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="why-us-item d-flex">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="ms-3">
                      <h5>Personalized Career Counseling</h5>
                      <p>Get one-on-one expert career advice tailored to your professional goals and aspirations.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="why-us-item d-flex">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="ms-3">
                      <h5>Comprehensive SSW Visa Support</h5>
                      <p>Our team assists you throughout the SSW visa process, from documentation to final placement.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="why-us-item d-flex">
                    <div className="icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="ms-3">
                      <h5>Family Assistance</h5>
                      <p>We provide ongoing support for your family during the transition, ensuring peace of mind.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-5 splash order-md-0 order-lg-1">
              <img className="img-thumbnail" src="/resource/cover.jpg" alt="Why Us" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
