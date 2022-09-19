import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meaning from './Meaning';
export default function SearchResult(props) {

if(props.response){
    return(
    <div>
    <h1>{props.response.word} </h1>
    <div>  
    {props.response.meanings.map(function(meaning,index){return <div key={index}><Meaning meaning={meaning}/></div>})}
    </div>
    </div>   
          )}
else{ return null;}
}