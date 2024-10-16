import { Link } from '@/i18n/routing';
import { right } from '@popperjs/core';
import { useTranslations } from "next-intl";

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  const ct = useTranslations("company")
  const lt = useTranslations("links")
  const pt = useTranslations("legals")
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
                {ct("name")}
              </span>
            </Link>
            <em className="d-block pb-2">
              {ct("address")} <br />
              {ct("sub-address")} 
            </em>

            <p>
              <strong>
                <i className="text-primary fa-solid fa-phone pe-1" />{' '}
              </strong>{' '}
              {ct("phone")} 
              <br />
              <strong>
                <i className="text-primary fa-solid fa-envelope pe-1" />{' '}
              </strong>
              {ct("email")} 
              <br />
            </p>
          </div>

          <div className="col-lg-3 pb-2 pb-lg-0 footer__useful-links">
            <h5 className="fw-semibold">{lt("useful_links")}</h5>
            <ul>
              <li>
                <Link href="/">{lt("home")}</Link>
              </li>
              <li>
                <Link href="/about-us">{lt("about_us")}</Link>
              </li>
              <li>
                <Link href="/services/recruitment">{lt("recruitment_service")}</Link>
              </li>
              <li>
                <Link href="/services/others">{lt("other_service")}</Link>
              </li>
              <li>
                <Link href="/contact">{lt("contact_us")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 footer__useful-links  pb-2 pb-lg-0 ">
            <h5 className="fw-semibold">{lt("our_services")}</h5>
            <ul>
              <li>
                <Link href="/services/recruitment">{lt("recruitment")}</Link>
              </li>
              <li>
                <Link href="/services/recruitment">{lt("ssw")}</Link>
              </li>
              <li>
                <Link href="/services/others">{lt("real_estate_consultant")}</Link>
              </li>
              <li>
                <Link href="/services/others">{lt("educational_consultant")}</Link>
              </li>
              <li>
                <Link href="/services/others">{lt("travel_consultant")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 footer__useful-links  pb-4 pb-lg-0 ">
            <h5 className="fw-semibold">{pt("legals")}</h5>
            <ul>
              <li>
                <Link href="/blog/privacy-policy">{pt("privacy_policy")}</Link>
              </li>
              <li>
                <Link href="/blog/disclaimer">{pt("disclaimer")}</Link>
              </li>
              <li>
                <Link href={"/blog/use-of this site"}>{pt("use_of_site")}</Link>
              </li>
            </ul>

            <div id='follow-us'>
              {lt("follow_us")}
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
