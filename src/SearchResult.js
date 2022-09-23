import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meaning from './Meaning';
import Phonetics from "./Phonetics";
export default function SearchResult(props) {

if(props.response){
    return(
    <div>
    <h1>{props.response.word} </h1>
    <div>  
    {props.response.meanings.map(function(meaning,index){return <div key={index}><Meaning meaning={meaning}/></div>})}
    </div>
    {props.response.phonetics.map(function(phonetic,index){return(<div key={index}><Phonetics phonetic={phonetic}/></div>);})}
    </div>   
          )}
else{ return null;}
}