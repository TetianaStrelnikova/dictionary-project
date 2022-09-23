
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SearchResult from "./SearchResult";
import {ReactComponent as SearchImage} from './images/SearchImage.svg';
import Photos from './Photos';
export default function Search(props) {


  const[response, setResponse]= useState(null);
  const[word,setWord]=useState(props.word);
  const[loaded, setLoaded]= useState(false);
  const [photos, setPhotos]= useState(null);

  function handleResponse(response){
   setResponse(response.data[0]);
  }
  function handlepexelsresponse(response){
   setPhotos(response.data.photos);
  }
  function pexelsearch(){
    let pexelsapikey  = "563492ad6f917000010000015342e1d8b94e4cadb687acfadbf1899f";
    let pexelsurl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    axios
    .get(pexelsurl, {
      headers: { authorization: `Bearer ${pexelsapikey}` },
    })
    .then(handlepexelsresponse);
  }
  function Searchapi(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    pexelsearch();
    
  }

  function SearchWord(event){
    event.preventDefault();
    Searchapi();
  }
  function Handle(event){
    event.preventDefault();
    setWord(event.target.value);
  }
function load(){
  setLoaded(true);
  Searchapi();
}

 if(loaded){
  return (
    <div>
    <div className='d-flex justify-content-center backgroundLight ms-5 me-5'>
    <div className='pt-1 text-center '>
      <section className=' ps-5 pe-5'>
     <h1 className='mt-5 maintextcolor fontBold'>Dictionary</h1>
     <h3 className='mt-5 mb-5 ms-0 me-0  quastion'>What word do you want to look up?</h3>
     <form className='pt-3' onSubmit={SearchWord}> 
      <input type="search" autoFocus={true} placeholder = "Enter a word" defaultValue={props.word} onChange={Handle}></input>
       <button className="ms-3 button" type="submit">Search</button>
     </form></section></div>
     <SearchImage className='searchimage image-fluid mt-2 mb-2'/>
     </div>
     <SearchResult response={response}/>
     <Photos photos={photos}/>
     </div>
  );}
  else{
load()
return("Loading..")
  }
}


