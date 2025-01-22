import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { apiGetMoviesNowPlaying } from "../store/action";
import CardComponent from "../ComponenPages/CardComponent";
 
 
 
export default function HomePage(){
//    const dataCoba = useSelector(state => state.dataCoba)
//    const dataMovies = useSelector(state => state.dataMovies)
//    const dispatch = useDispatch()
 
//    console.log(data);
   
 
    // useEffect(() => {
    //     dispatch(apiGetMoviesNowPlaying())
 
    // },[])
 
    return (        
 
    <>
   
    <h1>This is Home page Movie </h1>

 <CardComponent/>
   
   
    </>
     
 
 
    )
 
 
}