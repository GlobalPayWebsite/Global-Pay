import { FC } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Spacing from '@/components/Spacing';
import ServiceCard from '@/components/ServiceCard';
import Head from 'next/head';
import servicesData from '@/data/services/recruitment.json';
import PageHeader from '@/components/PageHeader';

interface Service {
  imgSrc: string;
  iconClass: string;
  title: string;
  description: string;
  slug?: string;
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  services: Service[];
}

const Home: FC = () => {
  const sections: Section[] = servicesData.sections;

  return (
    <>
      <Head>
        <title>Our Services - Global Pay</title>
        <meta
          name="description"
          content="Discover our wide range of services including recruitment and SSW support."
        />
        <meta
          name="keywords"
          content="Recruitment, SSW Support, Job Placement, Japan"
        />
        <link rel="canonical" href="https://yourwebsite.com/services" />
      </Head>

      <Header />

      <Spacing height="60px" />

      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services/recruitment' },
          { label: 'Recruitment', href: '/services/recruitment' },
        ]}
      />

      {sections.map((section, index) => (
        <div key={index} id={section.id}>
          <div className="container">
            <div className="section">
              <h3 className="section__title">{section.title}</h3>
              <div className="section__subtitle">{section.subtitle}</div>
              <div className="row">
                {section.services.map((service, serviceIndex) => (
                  <ServiceCard
                    key={serviceIndex}
                    imgSrc={service.imgSrc}
                    iconClass={service.iconClass}
                    title={service.title}
                    description={service.description}
                    slug={service.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
};

export default Home;
