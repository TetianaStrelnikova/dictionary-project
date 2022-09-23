
import 'bootstrap/dist/css/bootstrap.min.css';
import Meaning from './Meaning';
import Phonetics from "./Phonetics";
export default function SearchResult(props) {

if(props.response){
    return(
    <div className='backgroundLight m-5 p-5'>
    <h1 className='text-center pt-5 maintextcolor'>"{props.response.word}"</h1>
    {props.response.phonetics.map(function(phonetic,index){return(<div key={index}><Phonetics phonetic={phonetic}/></div>);})}
    {props.response.meanings.map(function(meaning,index){return <div key={index}><Meaning meaning={meaning}/></div>})}
     </div>   
    )}
else{ return null;}
}