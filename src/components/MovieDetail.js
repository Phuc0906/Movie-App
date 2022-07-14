import React, { useEffect, useState } from "react";
import Header from "./Header.js"
import axios from "axios";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=5615039fc008ff1530efcac688082638&language=en-US"


function rendingGenre(props) {
    return (
        <span key={props.id}>{props.name}</span>
    )
}

function MovieDetail(props) {
    const [genre, setGenre] = useState([]);
    const [movieGen, setMovGen] = useState([]);
    useEffect(() => {
        axios.get(GENRE_URL)
            .then(response => {
                setGenre(response.data.genres);
                // console.log(response.data.genres);
                const gens = response.data.genres.filter(ge => props.mov_genre.includes(ge.id));
                setMovGen(gens);
                
            })
            .catch(err => {
                console.log(err);
            })
    }, [GENRE_URL]);

    return (
        <div>
            <Header/>
            <div className="play-container container">
                <img src={IMG_URL + props.poster_path} alt="" className="play-img"/>
            

                <div className="play-text">
                    <h2>Minions: The Rise of Gru</h2>
                
                    
                    <div className="tag">
                        {movieGen.map(rendingGenre)}
                        <span>Rating: {props.vote}</span>
                    </div>
                    
                    <a href="#" className="watch-btn">
                        <i className='bx bxs-right-arrow play-movie'></i>
                        <span>Watch The Trailer</span>
                    </a>
                    
                </div>
            </div>
        </div>
        
    )
}

export default MovieDetail;