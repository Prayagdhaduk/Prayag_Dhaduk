import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <header id="header" className="header-transparent">
    <div className="profile">
      <img src="assets/img/me.jpg" alt="" className="img-fluid" />
      <h1>P<span>R</span>A<span>Y</span>A<span>G </span>D<span>H</span>A<span>D</span>U<span>K</span></h1>
    </div>
    <nav id="navbar" className="navbar">
      <ul>
        <li><Link className="nav-link scrollto active" to="/"><i className="fas fa-house-user" />Home</Link></li>
        <li><Link className="nav-link scrollto" to="/about"><i className="fas fa-user-alt" />About</Link></li>
        <li><Link className="nav-link scrollto" to="/services"><i className="fas fa-poll" />Services</Link></li>
        <li><Link className="nav-link scrollto" to="/portfolio"> <i className="fas fa-briefcase" />Portfolio</Link></li>
        <li><Link className="nav-link scrollto" to="/blog"><i className="fas fa-file" />Blog</Link></li>
        <li><Link className="nav-link scrollto" to="/contact"><i className="fas fa-envelope" />Contact</Link></li>
      </ul>
      <i className="fas fa-bars mobile-nav-toggle" />
    </nav>
    <div className="social-links">
      <a href="https://twitter.com/PrayagDhaduk" className="twitter"><i className="fab fa-twitter" /></a>
      <a href="https://www.facebook.com/prayag.dhaduk.9" className="facebook"><i className="fab fa-facebook-f" /></a>
      <a href="https://www.instagram.com/prayag_patel_007/" className="instagram"><i className="fab fa-instagram-square" /></a>
      <a href="https://in.linkedin.com/in/prayag-dhaduk-222184190" className="skype"><i className="fab fa-linkedin-in"/></a>
    </div>
    </header>
  )
}

export default Header