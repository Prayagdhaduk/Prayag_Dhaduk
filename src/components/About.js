import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function About() {
  return (

    <section id="about" className="about">
        <div className="container wow fadeInLeftBig animated" data-wow-duration="1.5s">
          <div className="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                      <ProgressBar animated now={50} />
                      <div className="progress-box">
                      <span className="skill">React</span>
                      <i className="val">40%</i>
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
                <div className="resume-item pb-0">
                  <h4>Alice Barkley</h4>
                  <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and
                      developing user-centered digital/print marketing material from initial concept to final, polished
                      deliverable.</em></p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>info@example.com</li>
                  </ul>
                </div>
               
                <div className="resume-item">
                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                  <h5>2015 - 2016</h5>
                  <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                  <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum
                    qui
                    ut dignissimos deleniti nerada porti sand markend</p>
                </div>
                <div className="resume-item">
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2010 - 2014</h5>
                  <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                  <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione
                    eius
                    unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart
                    dila</p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Senior graphic design specialist</h4>
                  <h5>2019 - Present</h5>
                  <p><em>Experion, New York, NY </em></p>
                  <ul>
                    <li>Lead in the design, development, and implementation of the graphic, layout, and production
                      communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the
                      project. </li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of
                      the
                      design</li>
                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p><em>Stepping Stone Advertising, New York, NY</em></p>
                  <ul>
                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and
                      advertisements).</li>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
  )
}
