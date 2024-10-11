'use client'; // This line marks the component as a Client Component
import { Link, Locale, routing } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
/* eslint-disable @next/next/no-img-element */
import { useParams, usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const isActive = (path: string) => {
    const normalizedPathname = pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;
    const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;

    console.log(normalizedPathname, normalizedPath);
    return normalizedPathname === normalizedPath;
  };

  const router = useRouter();

  const t = useTranslations('Navigation');

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const nextLocale = event.target.value as Locale;
    const newString = pathname.replace(params.locale as string, nextLocale);
    router.replace(newString);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
        <Link className="navbar-brand" href="/#home">
          <img src="/assets/logo.png" alt="Global Pay" width="30" height="30" />
          <span
            style={{
              display: 'inline-block',
              marginLeft: 8,
                fontWeight: 'bold',
            }}
          >
              Global Pay <strong style={{ fontSize:"12px", fontWeight:400}}>pvt. ltd.</strong>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <Link className="navbar-brand" href="#">
                <img
                  src="/assets/logo.png"
                  alt="Global Pay"
                  width="30"
                  height="30"
                />
              </Link>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive(`/${locale}/`) ? 'active' : ''}`}
                  aria-current="page"
                  href="/"
                >
                  {t('home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive(`/${locale}/about-us`) ? 'active' : ''}`}
                  href="/about-us"
                >
                  {t('aboutUs')}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${pathname.includes('/services') ? 'active' : ''}`}
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t('services')}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/services/recruitment"
                    >
                      Recruitment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services/others">
                      Other Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive(`/${locale}/contact`) ? 'active' : ''}`}
                  href="/contact"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>

            <div className="lang">
              <select
                className="form-select form-select-sm"
                aria-label="Small select example"
                onChange={handleChangeLanguage}
                defaultValue={locale}
              >
                {routing.locales.map(cur => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Header;
