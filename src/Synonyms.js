
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Synonyms(props)
{
if(props.synonyms.length>0){
return (<div><strong>Synonyms:  </strong> <span className='lighttext'> {props.synonyms.map(function(synonym,index){return(<span key={index}>"{synonym}",</span>)})}</span></div>);}
else{return null;}}
