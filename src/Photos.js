import React from "react";
export default function Photos(props){
    console.log(props.photos)
    if(props.photos){
    return(
        <div className="row p-5 justify-content-center backgroundLight m-5">{props.photos.map(function(photo,index){return(<img className="m-3 p-0 photo image-fluide col-3" src={photo.src.landscape} alt="search" key={index}/>);})}</div>
    );}
    else{return null;}
}