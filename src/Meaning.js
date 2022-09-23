

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Synonyms from './Synonyms';
import Antonyms from './Antonyms';
export default function Meaning(props)
{
    console.log(props.meaning);
    return (
    <div className='ms-5 me-5'>
    <h3 className='fontThinItalic text-start mb-3 mt-5'>{props.meaning.partOfSpeech}</h3>
    <ul><strong>Definition:  </strong>{props.meaning.definitions.map(function(definition){return(<li>{definition.definition} <div className='colorexample'><em>{definition.example}</em></div></li>)})}</ul>
    <Synonyms synonyms={props.meaning.synonyms} />
    <Antonyms antonyms={props.meaning.antonyms} />
    </div>
    );
}


