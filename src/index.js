import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/css/fonts.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./components/css/all.css";
import "./components/css/swiper-bundle.min.css";
import "./components/css/animate.min.css";
import "./components/css/style.css";
import "./components/css/responsive.css";
import "./favicon.png";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
