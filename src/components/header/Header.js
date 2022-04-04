import React from 'react'
import { NavLink } from 'react-router-dom'
import me from "../img/me.jpg";

const Header = () => {
  return (
  <header id="header">
    <div className="profile">
      <img src={me} alt="" className="img-fluid" />
      <h1>P<span>R</span>A<span>Y</span>A<span>G </span>D<span>H</span>A<span>D</span>U<span>K</span></h1>
    </div>
    <nav id="navbar" className="navbar">
      <ul>
        <li><NavLink className="nav-link" to="/"><i className="fas fa-house-user" />Home</NavLink></li>
        <li><NavLink className="nav-link" to="/about"><i className="fas fa-user-alt" />About</NavLink></li>
        <li><NavLink className="nav-link" to="/services"><i className="fas fa-poll" />Services</NavLink></li>
        <li><NavLink className="nav-link" to="/portfolio"> <i className="fas fa-briefcase" />Portfolio</NavLink></li>
        <li><NavLink className="nav-link" to="/blog"><i className="fas fa-file" />Blog</NavLink></li>
        <li><NavLink className="nav-link" to="/contact"><i className="fas fa-envelope" />Contact</NavLink></li>
      </ul>
      <i className="fas fa-bars mobile-nav-toggle" />
    </nav>
    <div className="social-links">
      <a target="_blank"  rel="noreferrer" href="https://twitter.com/PrayagDhaduk" className="twitter"><i className="fab fa-twitter" /></a>
      <a target="_blank"  rel="noreferrer" href="https://www.facebook.com/prayag.dhaduk.9" className="facebook"><i className="fab fa-facebook-f" /></a>
      <a target="_blank"  rel="noreferrer" href="https://www.instagram.com/prayag_patel_007/" className="instagram"><i className="fab fa-instagram-square" /></a>
      <a target="_blank"  rel="noreferrer" href="https://in.linkedin.com/in/prayag-dhaduk-222184190" className="skype"><i className="fab fa-linkedin-in"/></a>
    </div>
    </header>
  )
}

export default Header