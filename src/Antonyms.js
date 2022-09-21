
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Antonyms(props)
{
if(props.antonyms){
return (<p>{props.antonyms.map(function(antonym,index){return(<span key={index}>"{antonym}",</span>)})}</p>
);}
else{return null;}}
