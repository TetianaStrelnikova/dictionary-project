
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Synonyms(props)
{
if(props.synonyms){
return ( <p className='lighttext'> {props.synonyms.map(function(synonym,index){return(<span key={index}>"{synonym}",</span>)})}</p>);}
else{return null;}}
