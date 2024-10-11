import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { FC } from 'react';

interface ServiceCardProps {
  imgSrc: string;
  iconClass: string;
  title: string;
  description: string;
  slug?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  imgSrc,
  iconClass,
  title,
  description,
  slug,
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="service-card">
        <div className="service-img">
          <Image
            src={imgSrc}
            alt={title}
            layout="responsive"
            width={100}
            height={100}
          />
        </div>

        <div className="service-icon">
          <i className={iconClass}></i>
        </div>

        <div className="service-body">
          <h6 className="fw-semibold text-primary">{title}</h6>
          <p className="text-secondary">{description}</p>
          {slug && (
            <Link href={`/blog/${slug}`} className="service__link">
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
