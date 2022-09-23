


import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as ContactImage} from './images/contact.svg';
export default function Footer(){
    return (
        <footer>
        <section className='mb-3 mt-5 footer d-flex justify-content-center'>
 <ContactImage className='contactImage image-fluide'/>
<div className="d-md-flex justify-content-center footer  mt-5 pt-5">
<div className="mt-1" >Coded by Tetiana Strelnikova | </div>
<div className=" text-center ms-2 mt-1">
<a className='link'  href="mailto:strelnikova0108@gmail.com">strelnikova0108@gmail.com</a> 
</div></div>
    </section>

 </footer>
    )
}