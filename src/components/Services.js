import React from 'react'


export default function Services() {

  return (
    <section id="services" className="services">
    <div className="container wow rollIn animated" data-wow-duration="1.5s">
      <div className="section-title">
        <span>My Services</span>
        <h2>My Services</h2>
        <p>So I Was Not Born With A Whole Lot Of Natural Talent... But I Work Hard And I Never Give Up. That Is My Gift. That Is MY Ninja Way!</p>
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
                    <h3>Hashirama Senju</h3>
                    <h4>First Hokage</h4>
                    <p>
                      <i className="fas fa-quote-left" />
                      Whenever you live, there will always be war.
                      <i className="fas fa-quote-right" />
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Naruto Uzumaki</h3>
                    <h4>Seventh Hokage</h4>
                    <p>
                      <i className="fas fa-quote-left" />
                      Those Who Break The Rules Are Scum... But, Those Who Abandon Their Friends Are Worse Than Scum.
                      <i className="fas fa-quote-right" />
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Sasuke Uchiha</h3>
                    <h4>Shadow Hokage</h4>
                    <p>
                      <i className="fas fa-quote-left" />
                      No man chooses evil because he is evil, he only mistakes it for happiness, the good he seeks.
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
