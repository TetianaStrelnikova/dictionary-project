
import './Search.css';
import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer(){
    return (
        <footer>
<div className="d-md-flex justify-content-center footer ">
<div className="codedby mt-1" >Coded by Tetiana Strelnikova | </div>
<div className="email text-center ms-2 mt-1">
<a  className="emaillink" href="mailto:strelnikova0108@gmail.com">strelnikova0108@gmail.com</a> 
</div></div>
<div className="d-flex justify-content-center">
<p className="standwithukraine">Stand with <span className="ukraine me-3">Ukraine</span> </p>
<div className="ukraineimage ms-2 "><img src="./images/ukraine.png" alt="Ukraine" className="img-fluid w-100"/></div>
</div>
</footer>
    )
}