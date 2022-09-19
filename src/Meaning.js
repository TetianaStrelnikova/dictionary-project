
import './Search.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Meaning(props)
{
    console.log(props.meaning);
    return (
    <div>
    <h3>{props.meaning.partOfSpeech}</h3>
    <ul>{props.meaning.definitions.map(function(definition){return(<li>{definition.definition} <div><em>{definition.example}</em></div></li>)})}</ul>
    <h3>Synonyms: <p>{props.meaning.synonyms.map(function(synonym,index){return(<span key={index}>"{synonym}",</span>)})}</p></h3>
    <h3>Antonyms:  <p>{props.meaning.antonyms.map(function(antonym,index){return(<span key={index}>"{antonym}",</span>)})}</p></h3>
    </div>
    );
}


