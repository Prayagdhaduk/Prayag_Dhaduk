import React from 'react'


export default function Services() {

  return (
    <section id="services" className="services">
    <div className="container wow rollIn animated" data-wow-duration="1.5s">
      <div className="section-title">
        <span>My Services</span>
        <h2>My Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="row">
        <div className="col-md-6 col-xl-3 d-flex align-items-stretch  mb-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-palette" /></div>
            <h4 className="title"><a href>Web Design</a></h4>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro autem, enim
              necessitatibus quae ab placeat consectetur velit qui, sint aliquam sunt.</p>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 d-flex align-items-stretch  mb-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-radiation" /></div>
            <h4 className="title"><a href>Animation</a></h4>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro autem, enim
              necessitatibus quae ab placeat consectetur velit qui, sint aliquam sunt.</p>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 d-flex align-items-stretch  mb-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-code" /></div>
            <h4 className="title"><a href>Web Development</a></h4>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro autem, enim
              necessitatibus quae ab placeat consectetur velit qui, sint aliquam sunt.</p>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 d-flex align-items-stretch  mb-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-arrows-alt" /></div>
            <h4 className="title"><a href>Fully Responsive</a></h4>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro autem, enim
              necessitatibus quae ab placeat consectetur velit qui, sint aliquam sunt.</p>
          </div>
        </div>
      </div>

    <div className="section-title p-30">
        <h2 className='m-0'>Testimonials</h2>
      </div>
      <div id="testimonials">
          <div className="position-relative testimonials">
            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="fas fa-quote-left" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                      Accusantium
                      quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="fas fa-quote-right" />
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="fas fa-quote-left" />
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                      quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="fas fa-quote-right" />
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="fas fa-quote-left" />
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                      tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="fas fa-quote-right" />
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="fas fa-quote-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                      minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="fas fa-quote-right" />
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="fas fa-quote-left" />
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
                      culpa
                      labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="fas fa-quote-right" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div> 
          </div>
        </div>
    </div>
  </section>
  )
}
