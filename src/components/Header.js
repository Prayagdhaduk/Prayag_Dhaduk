import React from 'react'

function Header() {
  return (
  
    <header id="header" className="header-transparent">
 <div className="profile">
   <img src="assets/img/me.jpg" alt="" className="img-fluid" />
   <h1>P<span>R</span>A<span>Y</span>A<span>G </span>D<span>H</span>A<span>D</span>U<span>K</span></h1>
 </div>
 <nav id="navbar" className="navbar">
   <ul>
     <li><a className="nav-link scrollto active" href="#hero"><i className="fas fa-house-user" />Home</a></li>
     <li><a className="nav-link scrollto" href="#about"><i className="fas fa-user-alt" />About</a></li>
     <li><a className="nav-link scrollto" href="#services"><i className="fas fa-poll" />Services</a></li>
     <li><a className="nav-link scrollto" href="#portfolio"> <i className="fas fa-briefcase" />Portfolio</a></li>
     <li><a className="nav-link scrollto" href="#blog"><i className="fas fa-file" />Blog</a></li>
     <li><a className="nav-link scrollto" href="#contact"><i className="fas fa-envelope" />Contact</a></li>
   </ul>
   <i className="fas fa-bars mobile-nav-toggle" />
 </nav>
 <div className="social-links">
   <a href="https://twitter.com/PrayagDhaduk" className="twitter"><i className="fab fa-twitter" /></a>
   <a href="https://www.facebook.com/prayag.dhaduk.9" className="facebook"><i className="fab fa-facebook-f" /></a>
   <a href="https://www.instagram.com/prayag_patel_007/" className="instagram"><i className="fab fa-instagram" /></a>
   <a href="https://in.linkedin.com/in/prayag-dhaduk-222184190" className="skype"><i className="fab fa-linkedin-in"/></a>
 </div>
</header>
  )
}

export default Header