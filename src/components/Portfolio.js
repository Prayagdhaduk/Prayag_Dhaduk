import React from "react";
import Portfolio1 from "../img/portfolio/portfolio-1.jpg";
import Portfolio2 from "../img/portfolio/portfolio-2.jpg";
import Portfolio3 from "../img/portfolio/portfolio-3.jpg";
import Portfolio4 from "../img/portfolio/portfolio-4.jpg";
import Portfolio5 from "../img/portfolio/portfolio-5.jpg";
import Portfolio6 from "../img/portfolio/portfolio-6.jpg";
import Portfolio7 from "../img/portfolio/portfolio-7.jpg";
import Portfolio8 from "../img/portfolio/portfolio-8.jpg";
import Portfolio9 from "../img/portfolio/portfolio-9.jpg";

const Portfolio = () => {
  return (
    <main id="main">
      <section id="portfolio" className="portfolio">
        <div className="container wow fadeInUp" data-wow-duration="1.5s">
          <div className="section-title">
            <span>My Portfolio</span>
            <h2>My Portfolio</h2>
            <p>
              I’m not gonna run away, I never go back on my word! That’s my
              ninja way.
            </p>
          </div>
          <ul id="portfolio-flters" className="d-flex justify-content-center">
            <li data-filter="*" className="filter-active">
              Me
            </li>
            <li data-filter=".filter-sunset">Sunset</li>
            <li data-filter=".filter-horse">Horse</li>
            <li data-filter=".filter-nature">Nature</li>
          </ul>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img">
                <img src={Portfolio1} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a
                  href={Portfolio1}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 1"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img">
                <img src={Portfolio2} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href={Portfolio2}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 3"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img">
                <img src={Portfolio3} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a
                  href={Portfolio3}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 2"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img">
                <img src={Portfolio4} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a
                  href={Portfolio4}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 2"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-nature">
              <div className="portfolio-img">
                <img src={Portfolio5} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a
                  href={Portfolio5}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 2"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-horse">
              <div className="portfolio-img">
              <img src={Portfolio6} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a
                  href={Portfolio6}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 3"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-sunset">
              <div className="portfolio-img">
              <img src={Portfolio7} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a
                  href={Portfolio7}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 1"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-nature">
              <div className="portfolio-img">
              <img src={Portfolio8} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a
                  href={Portfolio8}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 3"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item filter-horse">
              <div className="portfolio-img">
              <img src={Portfolio9} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href={Portfolio9}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 3"
                >
                  <i className="fas fa-plus" />
                </a>
                <a href="/" className="details-link" title="More Details">
                  <i className="fas fa-paperclip" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
