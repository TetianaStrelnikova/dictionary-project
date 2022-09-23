import React from "react";

export default function Phonetics (props){
    console.log(props.phonetic);
    if(props.phonetic){
    return(
        <div>
        {props.phonetic.text}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
        </div>
    );}
    else {return  null}
}