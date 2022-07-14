import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import MovieDetail from "./MovieDetail";
import PopularMovie from "./PopularMovie";
import MovieInfor from "./MovieInfor";

const API_key = "5615039fc008ff1530efcac688082638";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
// 438148?api_key=5615039fc008ff1530efcac688082638&language=en-US

function launchPopularMovie(props) {
    return <PopularMovie key={props.id} id={props.id} img={IMG_URL + props.poster_path} title={props.title}/>;
}

function GetSingleMov() {
    let {movId} = useParams();
    console.log(typeof movId);
    return (
        
            <MovieInfor id={movId}/>
        
        
    )
    
}

export default GetSingleMov;