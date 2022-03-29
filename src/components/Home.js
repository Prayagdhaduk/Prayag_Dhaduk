import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
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
    <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 wow bounceInUp" data-wow-duration="3s">
              <div className="hero-img">
                <img src="assets/img/hero-bg.jpg" alt=""/>
              </div>
            </div>
            <div className="col-12 wow bounceInDown" data-wow-duration="3s">
              <div className="hero-box">
                <h1>P<span>R</span>A<span>Y</span>A<span>G</span> D<span>H</span>A<span>D</span>U<span>K</span></h1>
                <h2>I am <span ref={el}></span></h2>
                <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="fas fa-angle-down" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
     
  )
}
