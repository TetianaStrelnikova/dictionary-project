import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from './Search';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import "./fonts/GraphikBoldItalic.otf";
import "./fonts/GraphikBlack.otf";
import "./fonts/GraphikThinItalic.otf";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container container-fluid   fontRegular backgroundDark'>
      <div className='contacticons'>
  <div class="icons "> 
  <div className=" ms-2 icon1 me-2 mt-2 mb-2"><a href="https://www.instagram.com/tati_strelnik/" title="Instagram Tetiana Strelnikova"><i className="i fa-brands fa-instagram "></i></a></div>
  <div className="ms-2 icon2 me-2 mt-2 mb-2"><a href="https://github.com/TetianaStrelnikova" title="GitHub Tetiana Strelnikova" ><i className="i fa-brands fa-github"></i></a></div>
  <div className="ms-2 icon3 me-2 mt-2 mb-2"><a href="https://www.linkedin.com/in/tetiana-strelnikova-623459229/" title="LinkedIn tetiana Strelnikova" ><i className="i fa-brands fa-linkedin "></i></a></div>
  <div className="ms-2 icon4 me-2 mt-2 mb-2"><a href="mailto:strelnikova0108@gmail.com" title="Mail to Tetiana Strelnikova" ><i className="i fa-solid fa-envelope "></i></a></div>
 </div></div>
    <Search word="hello" />
    <Footer/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//563492ad6f917000010000015342e1d8b94e4cadb687acfadbf1899f api key pexels