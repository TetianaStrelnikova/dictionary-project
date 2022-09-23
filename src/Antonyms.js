
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Antonyms(props)
{
if(props.antonyms.length>0){
return (<div><strong>Antonyms: </strong><span className='lighttext'>{props.antonyms.map(function(antonym,index){return(<span key={index}>"{antonym}",</span>)})}</span></div>
);}
else{return null;}}
