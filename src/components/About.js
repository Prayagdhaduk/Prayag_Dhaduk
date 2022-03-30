import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function About() {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container wow fadeInLeftBig animated" data-wow-duration="1.5s">
          <div className="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>Those Who Do Not Understand True Pain Can Never Understand True Peace</p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-3 d-flex align-items-stretch justify-content-center justify-content-lg-start">
              <div className="about-img">
                <div className="image">
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-9 d-flex flex-column align-items-stretch">
              <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                      <li><i className="fas fa-arrow-right" /><strong>Name:</strong> <span>Prayag Dhaduk</span>
                      </li>
                      <li><i className="fas fa-arrow-right" /><strong>Website:</strong>
                        <a href="https://prayagdhaduk.netlify.app/">prayagdhaduk.netlify.app/</a>
                      </li>
                      <li><i className="fas fa-arrow-right" /><strong>Phone:</strong><a href="tel:9913075522">+91 9913075522</a>
                      </li>
                      <li><i className="fas fa-arrow-right" /><strong>City:</strong><span>Junagadh</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      <li><i className="fas fa-arrow-right" /><strong>Age:</strong><span>23</span></li>
                      <li><i className="fas fa-arrow-right" /><strong>Degree:</strong><span>Bsc.It</span></li>
                      <li><i className="fas fa-arrow-right" /><strong>Email:</strong>
                        <a href="mailto:dhadukprayag1@gmail.com">dhadukprayag1@gmail.com</a>
                      </li>
                      <li className='m-0'><i className="fas fa-arrow-right" /><strong>Freelance:</strong><span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="skills-content ps-lg-4">
                  <div className="col-12 col-md-6">
                  <div className="my-skills">
                    <div className="progress-box">
                      <span className="skill">HTML</span>
                      <i className="val">85%</i>
                      </div>
                      <ProgressBar animated now={85} />
                      <div className="progress-box">
                      <span className="skill">CSS</span>
                      <i className="val">90%</i>
                      </div>
                      <ProgressBar animated now={90} />
                      <div className="progress-box">
                      <span className="skill">JavaScript</span>
                      <i className="val">30%</i>
                      </div>
                      <ProgressBar animated now={30} />
                      <div className="progress-box">
                      <span className="skill">Photoshop</span>
                      <i className="val">90%</i>
                      </div>
                      <ProgressBar animated now={90} />
                      </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="my-skills">
                      <div className="progress-box">
                      <span className="skill">Bootstrap</span>
                      <i className="val">80%</i>
                      </div>
                      <ProgressBar animated now={80} />
                      <div className="progress-box">
                      <span className="skill">Ui/Ux Design</span>
                      <i className="val">50%</i>
                      </div>
                      <ProgressBar animated now={10} />
                      <div className="progress-box">
                      <span className="skill">React</span>
                      <i className="val">10%</i>
                      </div>
                      <ProgressBar animated now={40} />
                      <div className="progress-box">
                      <span className="skill">Figma</span>
                      <i className="val">30%</i>
                      </div>
                      <ProgressBar animated now={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume">
            <div className="section-title">
              <span>My Resume</span>
              <h2>My Resume</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
              <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                <h4> Bachelor of Science in Information Technology</h4>
                  <h5>2017 - 2020</h5>
                  <p><em>Shastri Swami Shree Dharmajivandasji Institute of Information Technology, Junagadh</em></p>
                  <p>6.00 CGPA</p>
                </div>
                <div className="resume-item">
                  <h4>HSC Science</h4>
                  <h5>2016 - 2017</h5>
                  <p><em>Alpha Vidhya Sankul, Talala(Gir)</em></p>
                </div>
                <div className="resume-item">
                  <h4>Secondary School Certificate</h4>
                  <h5>2015</h5>
                  <p><em>Shri Vivekanand Shaikshanik School, Talala(Gir)</em></p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Fresher</h4>
                  <h5>2022 - Present</h5>
                  <p><em>Rainloops Technolabs</em></p>
                </div>
                <div className="resume-item">
                  <h4>Tiles Designer</h4>
                  <h5>2020 - 2021</h5>
                  <p><em>Keda ceramic, Morbi</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
     
  )
}
