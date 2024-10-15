import { Link } from '@/i18n/routing';
import { right } from '@popperjs/core';

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 pb-4 pb-lg-0">
            <Link className="navbar-brand mb-2 d-inline-block" href="/#home">
              <img
                src="/assets/logo.png"
                alt="Global Pay"
                width="40"
                height="40"
              />
              <span
                style={{
                  display: 'inline-block',
                  marginLeft: 8,
                  fontSize: 22,
                  fontWeight: 'bold',
                }}
              >
                Global Pay
              </span>
            </Link>
            <em className="d-block pb-2">
              1-chōme-20-17 Hyakuninchō, <br />
              Shinjuku City, Tokyo 169-0073
            </em>

            <p>
              <strong>
                <i className="text-primary fa-solid fa-phone pe-1" />{' '}
              </strong>{' '}
              03-6687-7736
              <br />
              <strong>
                <i className="text-primary fa-solid fa-envelope pe-1" />{' '}
              </strong>
              info@globalpay.co.jp
              <br />
            </p>
          </div>

          <div className="col-lg-3 pb-2 pb-lg-0 footer__useful-links">
            <h5 className="fw-semibold">Useful Links</h5>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/services/recruitment">Recruitment Service</Link>
              </li>
              <li>
                <Link href="/services/others">Other Service</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 footer__useful-links  pb-2 pb-lg-0 ">
            <h5 className="fw-semibold">Our Services</h5>
            <ul>
              <li>
                <Link href="/services/recruitment">Recruitment</Link>
              </li>
              <li>
                <Link href="/services/recruitment">SSW</Link>
              </li>
              <li>
                <Link href="/services/others">Real Estate Consultant</Link>
              </li>
              <li>
                <Link href="/services/others">Educational Consultant</Link>
              </li>
              <li>
                <Link href="/services/others">Travel Consultant</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 footer__useful-links  pb-4 pb-lg-0 ">
            <h5 className="fw-semibold">Legals</h5>
            <ul>
              <li>
                <Link href="/blog/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/blog/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link href={"/blog/use-of this site"}>Use of this site</Link>
              </li>
            </ul>

            <div id='follow-us'>
              FOLLOW US :
              <Link
                style={{marginLeft:"15px"}}
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

      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Global Pay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
