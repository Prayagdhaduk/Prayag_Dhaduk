import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WEB DEVELOPER","REACT DEVELOPER","FRONTEND DEVELOPER"], 
      startDelay: 300,
      showCursor: true,
      loop: true,
      cursorChar: "|",
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 500
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main id="main">
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 wow bounceInUp" data-wow-duration="3s">
            <div className="hero-img">
              <img src="assets/img/hero-bg.jpg" alt=""/>
            </div>
            {/* <div className='spinner'>
          <img src="assets/img/logo512.png" alt=""/>
          </div> */}
          </div>
          <div className="col-12 wow bounceInDown" data-wow-duration="3s">
            <div className="hero-box">
              <h1>P<span>R</span>A<span>Y</span>A<span>G</span> D<span>H</span>A<span>D</span>U<span>K</span></h1>
              <h2>I am <span ref={el}/></h2>
              <Link to="/about" className="btn-scroll scrollto" title="Scroll Down"><i className="fas fa-angle-down" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Home