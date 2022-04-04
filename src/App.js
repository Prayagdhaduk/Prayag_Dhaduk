import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
  
function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
