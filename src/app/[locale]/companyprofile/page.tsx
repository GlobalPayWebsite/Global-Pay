import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Spacing from '@/components/Spacing';
import "./style.scss"

export default function Home() {
  return (
    <>
      <Header />
      <Spacing height="60px" />

      <div className="company-container">
        <header className="header">
          <img src="../assets/logo.jpg" alt="Global Pay Co., Ltd. Logo" className="logo" />
          <h1 className="company-name">GLOBAL PAY Co., Ltd.</h1>
          <p className="tagline">Empowering Your Global Opportunities</p>
        </header>
        <hr />
        <main className="main-content">
          <section className="about-section">
            <h2>Company Overview</h2>
            <ul className="overview-list">
              <li><strong>Headquarters:</strong> 1-chome 20-17 Hyakunincho, Shinjuku-ku, Tokyo</li>
              <li><strong>Establishment Date:</strong> April 20, 2021</li>
              <li><strong>Representative:</strong> Neure Nabin</li>
              <li><strong>Capital:</strong> 10 million yen</li>
              <li><strong>Number of Employees:</strong> 4</li>
            </ul>
          </section>
          <section className="services-section">
            <h2>Business Activities</h2>
            <ul>
              <li>I.  Recruitment</li>
              <li>II. SSW (Specialist in Strategic Workforce)</li>
              <li>III. Real Estate Consultant</li>
              <li>IV. Educational Consultant</li>
              <li>V. Travel Consultant</li>
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
