
import './Search.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Synonyms from './Synonyms';
import Antonyms from './Antonyms';
export default function Meaning(props)
{
    console.log(props.meaning);
    return (
    <div>
    <h3>{props.meaning.partOfSpeech}</h3>
    <ul>{props.meaning.definitions.map(function(definition){return(<li>{definition.definition} <div><em>{definition.example}</em></div></li>)})}</ul>
    <Synonyms synonyms={props.meaning.synonyms}/>
    <Antonyms antonyms={props.meaning.antonyms}/>
    </div>
    );
}


