import React from "react";

export default function Phonetics (props){
    if(props.phonetic){
    return(
        <div className="ms-5 me-5 mb-3 text-center">
        <a href={props.phonetic.audio} target="_blank" className="link"rel="noreferrer"><i className="fa-regular fa-circle-play audio"></i></a><span className="phonetics lighttext">{props.phonetic.text}</span>
        </div>
    );}
    else {return  null}
}