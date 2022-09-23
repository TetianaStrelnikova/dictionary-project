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
    <div className='container fontRegular backgroundDark'>
    <Search />
    <Footer/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
