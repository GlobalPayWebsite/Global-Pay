import ServiceCard from './ServiceCard';
import servicesData from '@/data/blogs/blogs.json';

interface Service {
  imgSrc: string;
  iconClass: string;
  title: string;
  description: string;
  slug?: string;
}

/* eslint-disable @next/next/no-img-element */
const Blogs = () => {
  const blogs: Service[] = servicesData;

  return (
    <div id="news">
      <div className="container">
        <div className="section">
          <h3 className="section__title">News and Updates</h3>
          <p className="section__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint
            minima modi tempora nihil voluptatem aperiam enim. Cum, quasi
            dolorem!
          </p>

          <div className="row">
            {blogs.slice(0, 3).map((service, serviceIndex) => (
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
  );
};

export default Blogs;
