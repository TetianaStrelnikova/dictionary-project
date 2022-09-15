

import './Search.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Search() {
  const[word,setWord]=useState('');
  function SearchWord(event){
    event.preventDefault();
    alert (`Searching for ${word}`)
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
    </div>
  );
}


