import { Link } from '@/i18n/routing';

const Contact = () => {
  return (
    <>
      <div className="page__header">
        <div className="container">
          <h1>Contact</h1>
          <div className="breadcrumb">
            <h6>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/contact">Contact</Link>
            </h6>
          </div>
        </div>
      </div>

      <div id="contact" className="mt-3">
        <div className="container">
          <div className="row contact-info">
            <div className="col-xl-4 contact-item">
              <div className="icon" style={{ borderLeftColor: 'red', fontSize: '24px' }}>
                <i className="fa-solid fa-address-book"></i>
              </div>
              <h5 className='fw-semibold text-primary'>Address</h5>
              <h6>1-chōme-20-17 Hyakuninchō, Shinjuku City, Tokyo 169-0073</h6>
            </div>

            <div className="col-xl-4 contact-item">
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <h5 className='fw-semibold text-primary'>Email</h5>
              <h6>info@globalpay.co.jp</h6>
            </div>
            <div className="col-xl-4 contact-item">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h6 className='fw-semibold text-primary'>Call Us: <strong style={{ fontSize: "15px", fontWeight: "400", color:'black' }}>+81 03-6687-7736</strong></h6>
              <h6 className='fw-semibold text-primary'>WhatsApp: <strong style={{ fontSize: "15px", fontWeight: "400", color: 'black' }}>+81 90-9246-9379</strong></h6>
              <h6 className='fw-semibold text-primary'>Viber: <strong style={{ fontSize: "15px", fontWeight: "400", color: 'black' }}>+81 90-9246-9379</strong></h6>
            </div>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5447.1279172285385!2d139.69310620430838!3d35.701339799047844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2e84edeefb%3A0x2c964b66ddd1dbe0!2s1-ch%C5%8Dme-20-17%20Hyakuninch%C5%8D%2C%20Shinjuku%20City%2C%20Tokyo%20169-0073%2C%20Japan!5e0!3m2!1sen!2snp!4v1728193136601!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
