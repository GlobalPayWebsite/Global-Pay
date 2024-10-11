import AboutUs from '@/components/AboutUs';
import Blogs from '@/components/Blogs';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Spacing from '@/components/Spacing';
import Team from '@/components/Team';
import WhyUs from '@/components/WhyUs';

export default function Home() {
  return (
    <>
      <Header />
      <Spacing height="60px" />
      <main>
        <Carousel />
        <AboutUs />
        <Services />
        <WhyUs />
        <Team />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
