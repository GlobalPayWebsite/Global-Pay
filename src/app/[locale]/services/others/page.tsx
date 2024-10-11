import { FC } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Spacing from '@/components/Spacing';
import ServiceCard from '@/components/ServiceCard';
import Head from 'next/head';
import servicesData from '@/data/services/others.json';
import PageHeader from '@/components/PageHeader';

interface Service {
  iconClass: string;
  serviceTitle: string;
  description: string;
  slug?: string;
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  services: Service[];
}

const Home: FC = () => {
  const services: ServiceCategory[] = servicesData.services;

  return (
    <>
      <Head>
        <title>Our Services - Global Pay</title>
        <meta
          name="description"
          content="Discover our wide range of services including real estate consulting, educational consulting, and travel consulting."
        />
        <meta
          name="keywords"
          content="Real Estate, Educational Consulting, Travel Consulting, Japan"
        />
        <link rel="canonical" href="https://yourwebsite.com/services" />
      </Head>

      <Header />

      <Spacing height="60px" />

      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services/others' },
          { label: 'Others', href: '/services/others' },
        ]}
      />

      {services.map((category, index) => (
        <div key={index} id={category.title.toLowerCase().replace(/ /g, '-')}>
          <div className="container">
            <div className="section">
              <h3 className="section__title">{category.title}</h3>
              <div className="section__subtitle">{category.subtitle}</div>
              <div className="row">
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard
                    key={serviceIndex}
                    imgSrc="/resource/cover.jpg"
                    iconClass={service.iconClass}
                    title={service.serviceTitle}
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
