

import './Search.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SearchResult from "./SearchResult"
export default function Search() {


  const[response, setResponse]= useState(null);
  const[word,setWord]=useState('');

  function handleResponse(response){
   setResponse(response.data[0]);
  }
  

  function SearchWord(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    
  
  }
  function Handle(event){
    event.preventDefault();
    setWord(event.target.value);
  }


 

  return (
    <div >
     <h1>Dictionary</h1>
     <h2>What word do you want to look up?</h2>
     <form onSubmit={SearchWord}> 
      <input type="search" autoFocus={true} placeholder = "Enter a word" onChange={Handle}></input>
     
     </form>
     <SearchResult response={response}/>
    </div>
  );
}


