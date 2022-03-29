import React from 'react'

export default function Portfolio() {
  return (
      <section id="portfolio" className="portfolio">
        <div className="container wow fadeInUp" data-wow-duration="1.5s">
          <div className="section-title">
            <span>My Portfolio</span>
            <h2>My Portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <ul id="portfolio-flters" className="d-flex justify-content-center">
            <li data-filter="*" className="filter-active">Me</li>
            <li data-filter=".filter-sunset">Sunset</li>
            <li data-filter=".filter-horse">Horse</li>
            <li data-filter=".filter-nature">Nature</li>
          </ul>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-nature">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-horse">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-nature">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-horse">
              <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="fas fa-plus" /></a>
                <a href="/" className="details-link" title="More Details"><i className="fas fa-paperclip" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
