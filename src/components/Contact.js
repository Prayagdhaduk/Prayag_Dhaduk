import React from 'react'

const Contact = () => {
  return (
    <main id="main">
    <section id="contact" className="contact">
    <div className="container wow fadeInLeftBig animated" data-wow-duration="1.5s">
      <div className="section-title">
        <span>Contact Me</span>
        <h2>Contact Me</h2>
        <p>Hard work is worthless for those that don’t believe in themselves.</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-md-12">
              <div className="info-box">
                <i className="fas fa-share-alt" />
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a target="_blank"  rel="noreferrer" href="https://twitter.com/PrayagDhaduk" className="twitter"><i className="fab fa-twitter" /></a>
                  <a target="_blank"  rel="noreferrer" href="https://www.facebook.com/prayag.dhaduk.9" className="facebook"><i className="fab fa-facebook-f" /></a>
                  <a target="_blank"  rel="noreferrer" href="https://www.instagram.com/prayag_patel_007/" className="instagram"><i className="fab fa-instagram-square" /></a>
                  <a target="_blank"  rel="noreferrer" href="https://wa.me/message/X5AMUTSPFKM6B1" className="whatsapp"><i className="fab fa-whatsapp-square"/></a>
                  <a target="_blank"  rel="noreferrer" href="https://in.linkedin.com/in/prayag-dhaduk-222184190" className="linkedin"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box">
                <i className="fas fa-envelope" />
                <h3>Email Me</h3>
                <p><a href="mailto:dhadukprayag1@gmail.com">dhadukprayag1@gmail.com</a></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box">
                <i className="fas fa-phone-alt" />
                <h3>Call Me</h3>
                <p><a href="tel:+91 9913075522">+91 9913075522</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group">
                <input className="form-control" id="contact-email" type="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="map">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14889.545173057943!2d70.56581637289497!3d21.097160084094313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2b6321af95d5d%3A0xf3377412ef939de6!2sBorvav%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1648470213800!5m2!1sen!2sin"  style={{border: 0}} allowFullScreen loading="lazy"/>
          </div>
        </div>
      </div>

  <footer id="footer">
      <h3>Prayag Dhaduk</h3>
      <p>In this fake world loyalty is most expensive thing not everyone whom you trust can afford it.</p>
      <div className="social-links">
      <a href="https://twitter.com/PrayagDhaduk" className="twitter"><i className="fab fa-twitter" /></a>
      <a href="https://www.facebook.com/prayag.dhaduk.9" className="facebook"><i className="fab fa-facebook-f" /></a>
      <a href="https://www.instagram.com/prayag_patel_007/" className="instagram"><i className="fab fa-instagram-square" /></a>
      <a href="https://wa.me/message/X5AMUTSPFKM6B1" className="whatsapp"><i className="fab fa-whatsapp-square"/></a>
      <a href="https://in.linkedin.com/in/prayag-dhaduk-222184190" className="linkedin"><i className="fab fa-linkedin-in" /></a>
      </div>
      <div className="copyright">
      © Copyright&nbsp;<a href='https://github.com/Prayagdhaduk'>Prayag Dhaduk </a>&nbsp;<i className="fa fa-heart"/>&nbsp;All rigths reserved
      </div>
   
  </footer>
  </div>
    </section>
  </main>
  )
}

export default Contact