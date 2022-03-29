import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
<>  
<Header/>
<main id="main">
<Home/>
<About/>
<Services/>
<Portfolio/>
<Blog/>
<Contact/>
</main>
</>

  );
}

export default App;